// 1️⃣ Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";


// 2️⃣ Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCJ3fP0NFiyJgmpxPYbR94e2c2lart4JXQ",
    authDomain: "school-portal-aa5df.firebaseapp.com",
    projectId: "school-portal-aa5df",
    storageBucket: "school-portal-aa5df.appspot.com",
    messagingSenderId: "1059672065367",
    appId: "1:1059672065367:web:5a2afaf6256a8056112a12"
};

// 3️⃣ Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);    

// 4️⃣ Wait for DOM
// window.addEventListener("DOMContentLoaded", () => {
//     const email = localStorage.getItem("loggedInEmail");

//     if (!email) {
//         window.location.href = "../../login/index.html";
//         return;
//     }

//     loadTeacherProfile(email);
// });

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        const snap = await getDoc(doc(db, "users", uid))
        const data = snap.data()
        loadTeacherProfile(data.email);
    } else {
        window.location.href = "../../login/index.html";
    }
})

// 5️⃣ Load teacher from Firestore
async function loadTeacherProfile(email) {
    try {
        const q = query(
            collection(db, "users"),
            where("email", "==", email.toLowerCase().trim())
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            alert("Teacher profile not found");
            return;
        }

        const teacher = snapshot.docs[0].data();

        // 🔐 Safety: ensure role
        if (teacher.role !== "teacher") {
            alert("Access denied. Not a teacher account.");
            return;
        }

        displayTeacherData(teacher);

    } catch (err) {
        console.error("Error loading teacher profile:", err);
    }
}

// 6️⃣ Display teacher info
function displayTeacherData(teacher) {
    const name = teacher.name || teacher.email?.split("@")[0] || "Teacher";

    document.getElementById("nav-teacher-name").textContent = name;
    document.getElementById("view-full-name").textContent = name;
    document.getElementById("view-subject-title").textContent = teacher.course || "-";

    document.getElementById("view-id").textContent = `ID: ${teacher.id || "-"}`;
    document.getElementById("view-status").textContent = teacher.status || "-";

    document.getElementById("view-cohort").textContent = teacher.cohort || "-";
    document.getElementById("view-experience").textContent =
        teacher.experience ? `${teacher.experience} Years` : "-";

    document.getElementById("view-email").textContent = teacher.email || "-";
    document.getElementById("view-phone").textContent = teacher.phone || "-";

    // Avatar
    document.getElementById("view-avatar").src =
        teacher.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=256`;
}

// 7️⃣ Logout
window.handleLogout = function () {
    localStorage.removeItem("loggedInEmail");
    window.location.href = "../../login/index.html";
};
