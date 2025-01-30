document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hidden-link").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "auth/login.php";
    });
});
