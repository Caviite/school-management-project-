function dashBord() {
    window.location.href = "./admindashbord";
    return;
}

function teacherPage() {
    window.location.href = "./teacherdashboard";
}

function parentPage() {
    window.location.href = "./parentdashboard";
}



let students = [
    { id: 1, name: "Alex Johnson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 2, name: "Sarah Martinez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 3, name: "Michael Chen", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 4, name: "Emily Parker", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 5, name: "David Wilson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 6, name: "Lisa Thompson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Inactive" },
    { id: 7, name: "James Rodriguez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 8, name: "Maria Garcia", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 9, name: "Robert Lee", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 10, name: "Jennifer Brown", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 11, name: "Christopher Taylor", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 12, name: "Amanda White", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 13, name: "Daniel Harris", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 14, name: "Jessica Clark", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Inactive" },
    { id: 15, name: "Matthew Lewis", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 16, name: "Ashley Walker", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 17, name: "Joshua Hall", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 18, name: "Stephanie Allen", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 19, name: "Andrew Young", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 20, name: "Melissa King", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 21, name: "Kevin Wright", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 22, name: "Laura Scott", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 23, name: "Brian Green", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 24, name: "Nicole Adams", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 25, name: "Ryan Baker", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Inactive" },
    { id: 26, name: "Rachel Nelson", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 27, name: "Jason Carter", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 28, name: "Samantha Mitchell", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 29, name: "Brandon Perez", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 30, name: "Megan Roberts", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 31, name: "Justin Turner", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 32, name: "Lauren Phillips", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 33, name: "Eric Campbell", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 34, name: "Brittany Parker", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 35, name: "Aaron Evans", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 36, name: "Heather Edwards", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Inactive" },
    { id: 37, name: "Adam Collins", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 38, name: "Catherine Stewart", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 39, name: "Nathan Sanchez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 40, name: "Victoria Morris", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 41, name: "Zachary Rogers", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 42, name: "Amber Reed", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 43, name: "Kyle Cook", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 44, name: "Danielle Morgan", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 45, name: "Tyler Bell", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 46, name: "Kayla Murphy", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Inactive" },
    { id: 47, name: "Jacob Bailey", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 48, name: "Olivia Rivera", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 49, name: "Ethan Cooper", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },
    { id: 50, name: "Hannah Richardson", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active" },

    { id: 51, name: "Marcus Thompson", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 52, name: "Sophia Anderson", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 53, name: "Lucas Martinez", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 54, name: "Isabella Davis", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 55, name: "Mason Wilson", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 56, name: "Emma Moore", cohort: "January-Cohort", program: "Mobile Development", status: "Inactive" },
    { id: 57, name: "Logan Jackson", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 58, name: "Ava Taylor", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 59, name: "Jackson Thomas", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 60, name: "Mia Hernandez", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 61, name: "Aiden Garcia", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 62, name: "Charlotte Martinez", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 63, name: "Elijah Robinson", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 64, name: "Amelia Clark", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 65, name: "Oliver Rodriguez", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 66, name: "Harper Lewis", cohort: "March-Cohort", program: "Mobile Development", status: "Inactive" },
    { id: 67, name: "Benjamin Lee", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 68, name: "Evelyn Walker", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 69, name: "Sebastian Hall", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 70, name: "Abigail Allen", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 71, name: "Alexander Young", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 72, name: "Emily King", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 73, name: "Jack Wright", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 74, name: "Elizabeth Scott", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 75, name: "Henry Torres", cohort: "March-Cohort", program: "Mobile Development", status: "Inactive" },
    { id: 76, name: "Sofia Nguyen", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 77, name: "Samuel Hill", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 78, name: "Avery Flores", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 79, name: "William Green", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 80, name: "Ella Adams", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 81, name: "James Nelson", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 82, name: "Scarlett Baker", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 83, name: "Carter Gonzalez", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 84, name: "Grace Wilson", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 85, name: "Owen Mitchell", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 86, name: "Chloe Perez", cohort: "February-Cohort", program: "Mobile Development", status: "Inactive" },
    { id: 87, name: "Wyatt Roberts", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 88, name: "Lily Turner", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },
    { id: 89, name: "Luke Phillips", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 90, name: "Zoe Campbell", cohort: "January-Cohort", program: "Mobile Development", status: "Active" },
    { id: 91, name: "Jayden Parker", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 92, name: "Layla Evans", cohort: "February-Cohort", program: "Mobile Development", status: "Active" },
    { id: 93, name: "Gabriel Edwards", cohort: "March-Cohort", program: "Mobile Development", status: "Active" },

    { id: 94, name: "Nina Collins", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 95, name: "Isaac Stewart", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 96, name: "Aria Sanchez", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 97, name: "Julian Morris", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 98, name: "Nora Rogers", cohort: "January-Cohort", program: "Data Science", status: "Inactive" },
    { id: 99, name: "Leo Reed", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 100, name: "Hannah Cook", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 101, name: "Levi Morgan", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 102, name: "Lillian Bell", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 103, name: "Mateo Murphy", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 104, name: "Addison Bailey", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 105, name: "Grayson Rivera", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 106, name: "Ellie Cooper", cohort: "March-Cohort", program: "Data Science", status: "Inactive" },
    { id: 107, name: "Asher Richardson", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 108, name: "Zoey Cox", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 109, name: "Lincoln Howard", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 110, name: "Penelope Ward", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 111, name: "Ezra Torres", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 112, name: "Aurora Peterson", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 113, name: "Hudson Gray", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 114, name: "Hazel Ramirez", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 115, name: "Maverick James", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 116, name: "Violet Watson", cohort: "February-Cohort", program: "Data Science", status: "Inactive" },
    { id: 117, name: "Easton Brooks", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 118, name: "Claire Kelly", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 119, name: "Jaxon Sanders", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 120, name: "Skylar Price", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 121, name: "Colton Bennett", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 122, name: "Bella Wood", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 123, name: "Cooper Barnes", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 124, name: "Paisley Ross", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 125, name: "Carson Henderson", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 126, name: "Savannah Coleman", cohort: "March-Cohort", program: "Data Science", status: "Inactive" },
    { id: 127, name: "Axel Jenkins", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 128, name: "Lucy Perry", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 129, name: "Dominic Powell", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 130, name: "Stella Long", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 131, name: "Silas Patterson", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 132, name: "Elena Hughes", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 133, name: "Jace Flores", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 134, name: "Alice Washington", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 135, name: "Kai Butler", cohort: "February-Cohort", program: "Data Science", status: "Active" },
    { id: 136, name: "Madelyn Simmons", cohort: "February-Cohort", program: "Data Science", status: "Inactive" },
    { id: 137, name: "Rhett Foster", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 138, name: "Kinsley Gonzales", cohort: "March-Cohort", program: "Data Science", status: "Active" },
    { id: 139, name: "Miles Bryant", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 140, name: "Naomi Alexander", cohort: "January-Cohort", program: "Data Science", status: "Active" },
    { id: 141, name: "Beckett Russell", cohort: "February-Cohort", program: "Data Science", status: "Active" },

    { id: 142, name: "Preston Griffin", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 143, name: "Ivy Diaz", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 144, name: "Roman Hayes", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 145, name: "Isabelle Myers", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 146, name: "Knox Ford", cohort: "January-Cohort", program: "DevOps Engineering", status: "Inactive" },
    { id: 147, name: "Natalie Hamilton", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 148, name: "Felix Graham", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 149, name: "Julia Sullivan", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 150, name: "Theo Wallace", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 151, name: "Emilia Woods", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 152, name: "Ezekiel Cole", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 153, name: "Piper West", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 154, name: "Rowan Jordan", cohort: "March-Cohort", program: "DevOps Engineering", status: "Inactive" },
    { id: 155, name: "Ruby Owens", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 156, name: "Atlas Reynolds", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 157, name: "Willow Fisher", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 158, name: "Declan Ellis", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 159, name: "Adalynn Gibson", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 160, name: "Barrett McDonald", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 161, name: "Quinn Cruz", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 162, name: "Remi Marshall", cohort: "March-Cohort", program: "DevOps Engineering", status: "Inactive" },
    { id: 163, name: "Bowen Ortiz", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 164, name: "Gianna Gomez", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 165, name: "Finnegan Murray", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 166, name: "Emery Freeman", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 167, name: "Wilder Wells", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 168, name: "Raelynn Webb", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active" },
    { id: 169, name: "Brooks Simpson", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active" }
]

if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify(students));
}

let storedStudents = JSON.parse(localStorage.getItem("students")) || [];
students = storedStudents;

function getStudent() {
    let studentContainer = document.getElementById('table-roll');

    students.forEach(pupil => {
        studentContainer.innerHTML += `
            <tr>
                <td>${pupil.name}</td>
                <td>${pupil.cohort}</td>
                <td>${pupil.program}</td>
                <td>${pupil.status}</td>
                <td><button style="padding: 10px; background: #ffffffff; color: #61776dff; border-radius: 10px; border: 1px solid #506159ff;" onclick="deleteStudent(${pupil.id})">🗑️</button></td>
                
            </tr>
        `;
    });
}
getStudent();

const deleteStudent = (id) => {
    // Remove student from the array
    students = students.filter(pupil => pupil.id !== id);

    // Update localStorage so deletion persists
    localStorage.setItem('students', JSON.stringify(students));

    // Clear and reload table
    let studentContainer = document.getElementById('table-roll');
    studentContainer.innerHTML = '';
    getStudent();
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

function addStudents() {
    document.getElementById('main').style.display = 'block';
    main.style.display = 'flex';
    document.getElementById('table-me').style.display = 'none';
};

function formDetail(event) {
    event.preventDefault(); // stops form from refreshing the page

    const name = document.getElementById('name').value;
    const cohort = document.getElementById('cohort').value;
    const program = document.getElementById('program').value;
    const status = document.getElementById('status').value;

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        cohort,
        program,
        status
    };

    students.push(newStudent); // add to memory array
    localStorage.setItem('students', JSON.stringify(students));

    // Refresh the table
    document.getElementById('table-roll').innerHTML = '';
    getStudent();

    Swal.fire({
        title: 'Success!',
        text: 'Student added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    document.getElementById('newStudentInfo').reset();
}


function removeSec() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('table-me').style.display = 'inline-table';
}

const filters = document.querySelectorAll('.filter-select');
const studentContainer = document.getElementById('table-roll');

function applyFilters() {
    const programValue = filters[0].value;
    const cohortValue = filters[1].value;
    const statusValue = filters[2].value;

    studentContainer.innerHTML = '';

    students.forEach(pupil => {
        const matchProgram =
            programValue === 'All Programs' || pupil.program === programValue;

        const matchCohort =
            cohortValue === 'All Cohorts' || pupil.cohort === cohortValue;

        const matchStatus =
            statusValue === 'All Status' || pupil.status === statusValue;

        if (matchProgram && matchCohort && matchStatus) {
            studentContainer.innerHTML += `
        <tr>
          <td>${pupil.name}</td>
          <td>${pupil.cohort}</td>
          <td>${pupil.program}</td>
          <td>${pupil.status}</td>
          <td>
            <button style="padding: 10px; background: #ffffffff; color: black; border-radius: 10px; border: 1px solid #46504bff;" onclick="deleteStudent(${pupil.id})">
              🗑️
            </button>
          </td>
        </tr>
      `;
        }
    });
}

filters.forEach(select => {
    select.addEventListener('change', applyFilters);
});

// Initial load
applyFilters();

function clearFilters() {
    filters.forEach(select => {
        select.value = select.options[0].value;
    });
    applyFilters();
}