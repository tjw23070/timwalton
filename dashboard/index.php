<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: ../auth/login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="../static/styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Your File Storage</h1>
        <p>Upload your files securely.</p>
        <form action="upload.php" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload</button>
        </form>
        <br>
        <a href="../auth/logout.php">Logout</a>
    </div>
</body>
</html>

