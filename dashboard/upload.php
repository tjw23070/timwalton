<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: ../auth/login.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $target_dir = "../uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "File uploaded successfully!";
    } else {
        echo "Error uploading file.";
    }
}
?>
<a href="index.php">Go Back</a>

