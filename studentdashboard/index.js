// index.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// --- Firebase config ---
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

let searchValue = "";

window.addEventListener("DOMContentLoaded", () => {
    const studentContainer = document.getElementById("table-roll");
    const filters = document.querySelectorAll('.filter-select');
    const programFilter = filters[0];
    const cohortFilter = filters[1];

    // --- Load students from Firestore ---
    async function loadStudents() {
        studentContainer.innerHTML = "";

        try {
            const snapshot = await getDocs(collection(db, "users"));

            if (snapshot.empty) {
                studentContainer.innerHTML =
                    `<tr><td colspan="5">No students found.</td></tr>`;
                return;
            }

            snapshot.forEach(docSnap => {
                const student = docSnap.data();
                const studentId = docSnap.id;

                // 🚨 THIS IS THE MAIN FIX
                if (student.role !== "student") return;

                // Program filter
                const matchProgram =
                    programFilter.value === "All Programs" ||
                    student.course === programFilter.value;

                // Cohort filter
                const matchCohort =
                    cohortFilter.value === "cohort" ||
                    student.cohort === cohortFilter.value;

                // 🔍 Search logic
                function searchStudent() {
                    const input = document.querySelector(".search-input");
                    searchValue = input.value.toLowerCase();
                    loadStudents();
                }

                window.searchStudent = searchStudent;

                const matchSearch =
                    searchValue === "" || searchStudent.includes(searchValue);

                if (!matchProgram || !matchCohort || !matchSearch) return;

                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${student.email}</td>
                <td>${student.cohort}</td>
                <td>${student.course}</td>
                <td>${student.dob || "N/A"}</td>
                <td>
                    <button data-id="${studentId}">🗑️</button>
                </td>
            `;

                tr.querySelector("button").onclick = async () => {
                    if (confirm(`Delete ${student.email}?`)) {
                        await deleteDoc(doc(db, "users", studentId));
                        loadStudents();
                    }
                };

                studentContainer.appendChild(tr);
            });

        } catch (error) {
            console.error("Error loading students:", error);
            studentContainer.innerHTML =
                `<tr><td colspan="5">Failed to load students.</td></tr>`;
        }
    }



    // --- Show the Add Student form ---
    function addStudents() {
        // Show the form section
        document.getElementById('main').style.display = 'block';
        // Hide the students table
        document.getElementById('table-me').style.display = 'none';
    }

    function showLoader() {
        document.getElementById("loader").style.display = "flex";
    }

    function hideLoader() {
        document.getElementById("loader").style.display = "none";
    }



    // Export to window so HTML onclick can use them
    window.addStudents = addStudents;

    // --- Add student ---
    async function formDetail(event) {
        event.preventDefault();

        const email = document.getElementById("email");
        const cohort = document.getElementById("cohort");
        const program = document.getElementById("program");
        const dob = document.getElementById("dob");
        const phone = document.getElementById("phone");
        const gender = document.getElementById("gender");
        const guardian = document.getElementById("guardian");

        showLoader()

        // Safety check (prevents "cannot read property of null")
        if (!email || !cohort || !program || !dob || !phone || !gender || !guardian) {
            hideLoader()
            alert("One or more form fields are missing. Check input IDs.");
            return;
        }

        const student = {
            role: "student",
            email: email.value.trim(),
            cohort: cohort.value.trim(),
            course: program.value.trim(),
            dob: dob.value,
            phone: phone.value.trim(),
            gender: gender.value.trim(),
            guardian: guardian.value.trim(),
            createdAt: new Date()
        };

        try {
            // Check if email already exists
            const snapshot = await getDocs(collection(db, "users"));
            const emailExists = snapshot.docs.some(
                doc => doc.data().email === student.email
            );

            if (emailExists) {
                hideLoader()
                alert("Student with this email already exists!");
                return;
            }

            await addDoc(collection(db, "users"), student);

            document.getElementById("newStudentInfo").reset();
            alert("Student added successfully!");

            loadStudents(); // reload table if you have it
        } catch (error) {
            console.error("Error adding student:", error);
            alert("Failed to add student.");
        }
        hideLoader()
    }


    // --- Remove add student section ---
    function removeSec() {
        document.getElementById('main').style.display = 'none';
        document.getElementById('table-me').style.display = 'inline-table';
    }

    // --- Clear filters ---
    function clearFilters() {
        filters.forEach(f => f.value = f.options[0].value);
        loadStudents();
    }

    filters.forEach(f => f.addEventListener("change", loadStudents));

    // --- Export functions to window for HTML ---
    window.formDetail = formDetail;
    window.removeSec = removeSec;
    window.clearFilters = clearFilters;
    window.dashBord = dashBord;
    window.studentPage = studentPage;
    window.teacherPage = teacherPage;

    // --- Initial load ---
    loadStudents();
});
