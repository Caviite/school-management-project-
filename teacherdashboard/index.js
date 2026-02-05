import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

/* Firebase config */
const firebaseConfig = {
    apiKey: "AIzaSyCJ3fP0NFiyJgmpxPYbR94e2c2lart4JXQ",
    authDomain: "school-portal-aa5df.firebaseapp.com",
    projectId: "school-portal-aa5df",
    storageBucket: "school-portal-aa5df.firebasestorage.app",
    messagingSenderId: "1059672065367",
    appId: "1:1059672065367:web:5a2afaf6256a8056112a12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function dashBord() {
    window.location.href = "../admin/index.html";
}

function studentPage() {
    window.location.href = "../studentdashboard/index.html";
}
function teacherPage() {
    window.location.href = "../teacherdashboard/index.html";
}

/* Global state */
let teachers = [];
let searchValue = "";

/* DOM refs */
const teacherContainer = document.getElementById("teacherInfo");
const programFilter = document.getElementById("programFilter");
const statusFilter = document.getElementById("statusFilter");
const cohortFilter = document.getElementById("cohortFilter");

/* Normalize helper */
const normalize = v => (v || "").toLowerCase().trim();

/* 🔥 LOAD TEACHERS FROM FIRESTORE */
async function loadTeachers() {
    teacherContainer.innerHTML = "";
    teachers = [];

    const snapshot = await getDocs(collection(db, "users"));

    snapshot.forEach(docSnap => {
        const data = docSnap.data();

        // ✅ THIS IS THE KEY LINE
        if (data.role !== "teacher") return;

        teachers.push({ id: docSnap.id, ...data });
    });

    applyFilters();
}

/* 🔍 SEARCH */
function searchTeacher() {
    searchValue = document.querySelector(".search-input").value.toLowerCase();
    applyFilters();
}

/* 🎯 FILTER + RENDER */
function applyFilters() {
    const program = normalize(programFilter.value);
    const status = normalize(statusFilter.value);
    const cohort = normalize(cohortFilter.value);

    const filtered = teachers.filter(t => {
        return (
            (program === "" || normalize(t.course) === program) &&
            (status === "" || normalize(t.status) === status) &&
            (cohort === "" || normalize(t.cohort) === cohort) &&
            (
                normalize(t.name).includes(searchValue) ||
                normalize(t.identity).includes(searchValue) ||
                normalize(t.course).includes(searchValue)
            )
        );
    });

    renderTeachers(filtered);
}

/* 🎨 RENDER */
function renderTeachers(list) {
    if (!list.length) {
        teacherContainer.innerHTML = "<p>No teachers found.</p>";
        return;
    }

    teacherContainer.innerHTML = list.map(t => `
        <div class="teacher-card">
            <h3 class="teacher-name">🧑‍🏫 ${t.name}</h3>
            <p><strong>ID:</strong> ${t.id}</p>
            <p><strong>Subject:</strong> ${t.course}</p>
            <p><strong>Cohort:</strong> ${t.cohort}</p>
            <p><strong>Experience:</strong> ${t.experience} years</p>
            <p><strong>Email:</strong> ${t.email}</p>
            <p><strong>Phone:</strong> ${t.phone}</p>
            <p class="status ${normalize(t.status)}">${t.status}</p>
        </div>
    `).join("");
}

/* ➕ ADD TEACHER */
async function formDetail() {
    const teacher = {
        role: "teacher",
        name: document.getElementById("name").value,
        identity: document.getElementById("identity").value,
        course: document.getElementById("course").value,
        cohort: document.getElementById("cohort").value,
        experience: document.getElementById("experience").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        status: document.getElementById("status").value,
        createdAt: new Date()
    };

    await addDoc(collection(db, "users"), teacher);

    Swal.fire("Success", "Teacher added", "success");
    document.getElementById("newStudentInfo").reset();
    removeSec();
    loadTeachers();
}

/* UI helpers */
function addTeacher() {
    main.style.display = "flex";
    teacherContainer.style.display = "none";
}

function removeSec() {
    main.style.display = "none";
    teacherContainer.style.display = "grid";
}

/* Expose to HTML */
window.searchTeacher = searchTeacher;
window.addTeacher = addTeacher;
window.removeSec = removeSec;
window.formDetail = formDetail;
window.dashBord = dashBord;
window.studentPage = studentPage;
window.teacherPage = teacherPage;

/* Init */
window.addEventListener("DOMContentLoaded", loadTeachers);
