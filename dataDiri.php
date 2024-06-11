<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pastikan pengguna telah login sebelum mengakses halaman ini
    if (!isset($_SESSION["authenticated"]) || $_SESSION["authenticated"] !== true) {
        header("Location: login.php");
        exit;
    }

    // Retrieve form data
    $name = $_POST['name'];
    $tgl = $_POST['tgl'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $country = $_POST['country'];
    $notelp = $_POST['notelp'];

    // Menampilkan data yang diterima dari form
    echo "<h2>Informasi yang Anda masukkan:</h2>";
    echo "<p>Nama : $name</p>";
    echo "<p>Tanggal Lahir : $tgl</p>";
    echo "<p>Umur : $age tahun</p>";
    echo "<p>Email : $email</p>";
    echo "<p>Asal : $country</p>";
    echo "<p>Nomor Telpon : $notelp</p>";
    echo "Terimakasih sudah mengisi formulir!";
} else {
    // Jika tidak ada data yang dipost, tampilkan pesan
    echo "<p>Harap isi formulir terlebih dahulu.</p>";
}
?>
