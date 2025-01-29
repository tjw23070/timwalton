<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: ../auth/login.php");
    exit;
}

// Ensure 'uploads/' exists and is writable
$target_dir = "../uploads/";

if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true); // Create folder if missing
}

if (!is_writable($target_dir)) {
    chmod($target_dir, 0777); // Attempt to fix permissions
}

// Handle file upload
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $target_file = $target_dir . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "File uploaded successfully!";
    } else {
        echo "Error uploading file.";
    }
}
?>
<a href="index.php">Go Back</a>
