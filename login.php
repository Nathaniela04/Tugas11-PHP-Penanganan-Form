<?php
session_start();

// Username dan password yang telah ditentukan sebelumnya
$expectedUsername = "2300018309";
$expectedPassword = "Nathaniela123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Periksa apakah username dan password yang dimasukkan sesuai dengan yang telah ditentukan sebelumnya
    if ($username === $expectedUsername && $password === $expectedPassword) {
        // Jika sesuai, arahkan ke halaman pengisian data diri
        $_SESSION["authenticated"] = true;
        header("Location: DataDiri.html");
        exit;
    } else {
        echo "Username atau password tidak valid.";
    }
}
?>
