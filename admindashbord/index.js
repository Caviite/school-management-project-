    
    function studentPage() {
        window.location.href = "../studentdashboard/index.html";
    }

    function teacherPage() {
        window.location.href = "../teacherdashboard/index.html";
    }

    function parentPage() {
        window.location.href = "../parentdashboard/index.html";
    }

    function newTeacher() {
        window.location.href = "../teacherdashboard/index.html";
    }
function logOut() {
    swal({
        title: "Are you sure you want to log out?",
        text: "You will be redirected to the login page.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            window.location.href = "../login/index.html";
        }
    });
}