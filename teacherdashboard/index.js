function dashBord() {
    window.location.href = "../admindashbord";
    return;
}

function studentPage() {
    window.location.href = "../studentdashboard";
}

function parentPage() {
    window.location.href = "../parentdashboard";
}

let teachers = [
    {
        id: "TCH001",
        name: "Sarah Johnson",
        subject: "Full Stack Web Development",
        cohort: "january Cohort",
        experience: 12,
        email: "s.johnson@school.edu",
        phone: "+1 (555) 234-5678",
        status: "Active"
    },
    {
        id: "TCH002",
        name: "Michael Brown",
        subject: "Data Science",
        cohort: "March Cohort",
        experience: 8,
        email: "m.brown@school.edu",
        phone: "+1 (555) 345-6789",
        status: "Active"
    },
    {
        id: "TCH003",
        name: "Emily Davis",
        subject: "Mobile Development",
        cohort: "Febuary cohort",
        experience: 15,
        email: "e.davis@school.edu",
        phone: "+1 (555) 456-7890",
        status: "Active"
    },
    {
        id: "TCH004",
        name: "James Wilson",
        subject: "DevOps Engineering",
        cohort: "January cohort",
        experience: 10,
        email: "j.wilson@school.edu",
        phone: "+1 (555) 567-8901",
        status: "Active"
    },
    {
        id: "TCH005",
        name: "Lisa Martinez",
        subject: "Mobile Development",
        cohort: "Febuary Cohort",
        experience: 6,
        email: "l.martinez@school.edu",
        phone: "+1 (555) 678-9012",
        status: "Active"
    },
    {
        id: "TCH006",
        name: "David Thompson",
        subject: "DevOps Engineering",
        cohort: "March cohort",
        experience: 5,
        email: "d.thompson@school.edu",
        phone: "+1 (555) 789-0123",
        status: "Active"
    },
    {
        id: "TCH007",
        name: "Rachel Cooper",
        subject: "Data Science",
        cohort: "January cohort",
        experience: 4,
        email: "r.cooper@school.edu",
        phone: "+1 (555) 890-1234",
        status: "Active"
    }
];

if (!localStorage.getItem("teachers")) {
    localStorage.setItem("teachers", JSON.stringify(teachers));
}

let storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
teachers = storedTeachers;


const teacherInfoDiv = document.getElementById("teacherInfo");

teacherInfoDiv.innerHTML = teachers
    .map(teacher => `
    <div class="teacher-card">
      <h3 class="teacher-name"> 🧑‍🏫 ${teacher.name}</h3>

      <p class="teacher-id">
      <strong> 🆔 ID:</strong> ${teacher.id}
      </p>

      <strong> 📚 Subject: 
      </strong><p class="teacher-subject"> ${teacher.subject}
      </p>

      <p class="detail-label">
      <strong> 👥 Cohort:</strong> ${teacher.cohort}
      </p>

      <p><strong> ⏳ Experience:
      </strong> ${teacher.experience} years
      </p>

      <p ><strong> ✉️ Email:
      </strong> ${teacher.email}
      </p>

      <p><strong> 📞 Phone:
      </strong> ${teacher.phone}
      </p>

      <p class="status ${teacher.status.toLowerCase()}">
        ${teacher.status}
      </p>
    </div>
  `)
    .join("");

    function searchTeacher() {
    let searchTerm = document.querySelector('.search-input').value.toLowerCase();
    let teacherContainer = document.getElementById('teacherInfo');
    teacherContainer.innerHTML = '';
    teachers.forEach(teacher => {
        if (teacher.name.toLowerCase().includes(searchTerm) ||
            teacher.id.toLowerCase().includes(searchTerm) ||
            teacher.subject.toLowerCase().includes(searchTerm)) {
            teacherContainer.innerHTML += `
                <div class="teacher-card">
                  <h3 class="teacher-name"> 🧑‍🏫 ${teacher.name}</h3>

                  <p class="teacher-id">
                  <strong> 🆔 ID:</strong> ${teacher.id}
                  </p>

                  <strong> 📚 Subject: 
                  </strong><p class="teacher-subject"> ${teacher.subject}
                  </p>

                  <p class="detail-label">
                  <strong> 👥 Cohort:</strong> ${teacher.cohort}
                  </p>

                  <p><strong> ⏳ Experience:
                  </strong> ${teacher.experience} years
                  </p>

                  <p ><strong> ✉️ Email:
                  </strong> ${teacher.email}
                  </p>

                  <p><strong> 📞 Phone:
                  </strong> ${teacher.phone}
                  </p>

                  <p class="status ${teacher.status.toLowerCase()}">
                    ${teacher.status}
                  </p>
                </div>
              `;
        }
    });
}

// Get filter elements
const programFilter = document.getElementById('programFilter');
const statusFilter = document.getElementById('statusFilter');
const cohortFilter = document.getElementById('cohortFilter');
const teacherContainer = document.getElementById('teacherInfo');
const clearBtn = document.querySelector('.btn-secondary');

// Normalize helper (prevents casing issues)
const normalize = value => value.toLowerCase().trim();

// Render teachers
function renderTeachers(list) {
    if (list.length === 0) {
        teacherContainer.innerHTML = `<p>No teachers match the selected filters.</p>`;
        return;
    }

    teacherContainer.innerHTML = list.map(teacher => `
        <div class="teacher-card">
            <h3 class="teacher-name">🧑‍🏫 ${teacher.name}</h3>

            <p>🆔 <strong>ID:</strong> ${teacher.id}</p>
            <p>📚 <strong>Subject:</strong> ${teacher.subject}</p>
            <p>👥 <strong>Cohort:</strong> ${teacher.cohort}</p>
            <p>⏳ <strong>Experience:</strong> ${teacher.experience} years</p>
            <p>✉️ <strong>Email:</strong> ${teacher.email}</p>
            <p>📞 <strong>Phone:</strong> ${teacher.phone}</p>

            <p class="status ${teacher.status.toLowerCase()}">
                ${teacher.status === "Active" ? "🟢" : "🔴"} ${teacher.status}
            </p>
        </div>
    `).join('');
}

function searchStudent() {
    let searchTerm = document.querySelector('.search-input').value.toLowerCase();
    let studentContainer = document.getElementById('table-roll');
    studentContainer.innerHTML = '';
    students.forEach(pupil => {
        if (pupil.name.toLowerCase().includes(searchTerm) ||
            pupil.cohort.toLowerCase().includes(searchTerm) ||
            pupil.program.toLowerCase().includes(searchTerm)) {
            studentContainer.innerHTML += `
                <tr>
                    <td>${pupil.name}</td>
                    <td>${pupil.cohort}</td>
                    <td>${pupil.program}</td>
                    <td>${pupil.status}</td>
                    <td><button onclick="deleteStudent(${pupil.id})">🗑️</button></td>
                </tr>
            `;
        }
    });
}

function addTeacher() {
    document.getElementById('main').style.display = 'block';
    main.style.display = 'flex';
    document.getElementById('teacherInfo').style.display = 'none';
};

function formDetail() {
    const name = document.getElementById('name').value;
    const identity = document.getElementById('identity').value;
    const course = document.getElementById('course').value;
    const cohort = document.getElementById('cohort').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const status = document.getElementById('status').value;

    const newTeacher = {
        id: identity,
        name,
        subject: course,
        cohort,
        experience,
        email,
        phone,
        status
    };

    let storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];

    storedTeachers.push(newTeacher);

    localStorage.setItem('teachers', JSON.stringify(storedTeachers));

    renderTeachers(storedTeachers);

    Swal.fire({
        title: 'Success!',
        text: 'Teacher added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Optional: clear the form
    document.getElementById('newStudentInfo').reset();
}

window.addEventListener('DOMContentLoaded', () => {
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    if (storedTeachers.length > 0) {
        renderTeachers(storedTeachers);
        teachers = storedTeachers;
    }
});





function removeSec() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('teacherInfo').style.display = 'grid';
}

// Apply filters
function applyFilters() {
    const programValue = normalize(programFilter.value);
    const statusValue = normalize(statusFilter.value);
    const cohortValue = normalize(cohortFilter.value);

    const filteredTeachers = teachers.filter(teacher => {
        return (
            (programValue === "" || normalize(teacher.subject) === programValue) &&
            (statusValue === "" || normalize(teacher.status) === statusValue) &&
            (cohortValue === "" || normalize(teacher.cohort) === cohortValue)
        );
    });

    renderTeachers(filteredTeachers);
}

// Clear filters
function clearFilters() {
    programFilter.value = "";
    statusFilter.value = "";
    cohortFilter.value = "";
    applyFilters();
}

// Event listeners
programFilter.addEventListener('change', applyFilters);
statusFilter.addEventListener('change', applyFilters);
cohortFilter.addEventListener('change', applyFilters);
clearBtn.addEventListener('click', clearFilters);

// Initial render
applyFilters();


