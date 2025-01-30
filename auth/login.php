<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../static/styles.css">
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <p id="error-message" style="color: red;"></p>
        <input type="text" id="username" placeholder="Username" required><br><br>
        <input type="password" id="password" placeholder="Password" required><br><br>
        <button onclick="login()">Login</button>
    </div>

    <script>
        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Hardcoded credentials (for now)
            const validUser = "admin";
            const validPass = "password123";

            if (username === validUser && password === validPass) {
                localStorage.setItem("loggedIn", "true"); // Store login status
                window.location.href = "../dashboard/index.html";
            } else {
                document.getElementById("error-message").innerText = "Invalid credentials!";
            }
        }
    </script>
</body>
</html>
