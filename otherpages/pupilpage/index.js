// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJ3fP0NFiyJgmpxPYbR94e2c2lart4JXQ",
    authDomain: "school-portal-aa5df.firebaseapp.com",
    projectId: "school-portal-aa5df",
    storageBucket: "school-portal-aa5df.appspot.com",
    messagingSenderId: "1059672065367",
    appId: "1:1059672065367:web:5a2afaf6256a8056112a12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loader = document.getElementById("loader");
const profileContent = document.getElementById("profileContent");

function showLoader() {
    loader.classList.add("active");
    profileContent.classList.remove("visible");
}

function hideLoader() {
    loader.classList.remove("active");
}


async function loadStudentInfo(email) {
    try {
        const normalizedEmail = email.toLowerCase().trim();

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", normalizedEmail));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.warn("Student not found!");
            hideLoader();
            return;
        }

        const studentData = querySnapshot.docs[0].data();
        displayStudentInfo(studentData);
        hideLoader();
        profileContent.classList.add("visible");

    } catch (error) {
        hideLoader();
        console.error("Error fetching student info:", error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is logged in, get their email from Firebase Auth
            loadStudentInfo(user.email);
        } else {
            hideLoader();
            // No user is signed in
            alert("No logged-in student found. Please login again.");
            window.location.href = "../login/index.html";
        }
    });
});

function displayStudentInfo(data) {
    // Hero section
    document.querySelector(".hero-avatar").src = data.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.email)}&background=3498db&color=fff&size=128`;
    document.querySelector(".hero-text h1").textContent = data.email;
    document.querySelector(".hero-text p").textContent = `${data.course} • ${data.cohort}`;
    document.querySelector(".badge-id").textContent = `ID: ${data.Id}`;

    // Personal Details
    const personalRows = document.querySelectorAll(".data-card:first-child .card-body .data-row strong");
    personalRows[0].textContent = data.dob || "-";
    personalRows[1].textContent = data.gender || "-";
    personalRows[2].textContent = data.bloodGroup || "-";
    personalRows[3].textContent = data.nationality || "-";

    // Contact Information
    const contactRows = document.querySelectorAll(".data-card:nth-child(2) .card-body .data-row strong");
    contactRows[0].textContent = data.email || "-";
    contactRows[1].textContent = data.phone || "-";
    contactRows[2].textContent = data.address ? data.address.toLowerCase() : "-";
    contactRows[3].textContent = data.guardian || "-";

    // Optionally update welcome name
    document.querySelector(".top-bar-user strong").textContent = data.email.split(" ")[0];
}

window.handleLogout = function () {
    localStorage.removeItem("loggedInEmail");
    window.location.href = "../../login/index.html";
};
