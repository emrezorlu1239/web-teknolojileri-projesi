<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    $dogru_email = "b241210037@sakarya.edu.tr";
    $dogru_sifre = "b241210037";

    if ($email === $dogru_email && $password === $dogru_sifre) {
        header("Location: ../php/hosgeldin.php");
        exit();
    } else {
        header("Location: ../login.html?error=1");
        exit();
    }
} else {
    header("Location: ../login.html");
    exit();
}
?>
