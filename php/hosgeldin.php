<?php
session_start();
$ogrenci_no = isset($_SESSION['ogrenci_no']) ? $_SESSION['ogrenci_no'] : '';
if (!$ogrenci_no) {
    header("Location: ../login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoşgeldiniz | Web Projesi</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <nav class="navbar navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="../index.html">Web Projesi</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="../index.html">Hakkında</a></li>
                <li class="nav-item"><a class="nav-link" href="../cv.html">CV</a></li>
                <li class="nav-item"><a class="nav-link" href="../sehir.html">Şehrim</a></li>
                <li class="nav-item"><a class="nav-link" href="../takim.html">Takımımız</a></li>
                <li class="nav-item"><a class="nav-link" href="../ilgi.html">İlgi Alanlarım</a></li>
                <li class="nav-item"><a class="nav-link" href="../iletisim.html">İletişim</a></li>
                <li class="nav-item"><a class="nav-link" href="../login.html">Giriş</a></li>
            </ul>
        </div>
    </nav>

    <main class="container d-flex align-items-center justify-content-center" style="min-height: calc(100vh - 200px);">
        <div class="text-center">
            <div class="mb-4">
                <i class="bi bi-check-circle-fill text-success" style="font-size: 6rem;"></i>
            </div>
            <h1 class="display-4 fw-bold mb-3">Hoşgeldiniz <?php echo $ogrenci_no; ?></h1>
            <p class="lead text-muted mb-4">Giriş işlemi başarıyla tamamlandı.</p>
            <a href="../index.html" class="btn btn-primary btn-lg px-5 py-2 fw-semibold">Ana Sayfaya Dön</a>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5>Web Projesi</h5>
                    <p class="text-muted">Web geliştirme ve tasarım konusunda tutkulu bir yazılım mühendisinin kişisel web sitesi.</p>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                    <h5>Hızlı Linkler</h5>
                    <ul>
                        <li><a href="../index.html">Hakkında</a></li>
                        <li><a href="../cv.html">CV</a></li>
                        <li><a href="../sehir.html">Şehrim</a></li>
                        <li><a href="../takim.html">Takımımız</a></li>
                        <li><a href="../iletisim.html">İletişim</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>İletişim</h5>
                    <ul>
                        <li><a href="mailto:b241210037@sakarya.edu.tr">b241210037@sakarya.edu.tr</a></li>
                        <li><a href="https://github.com/emrezorlu1239" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/emre-zorlu-61131b31a/" target="_blank">LinkedIn</a></li>
                    </ul>
                    <div class="footer-social">
                        <a href="https://github.com/emrezorlu1239" target="_blank"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/emre-zorlu-61131b31a/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        <a href="mailto:b241210037@sakarya.edu.tr"><i class="bi bi-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">&copy; 2026 Tüm Hakları Saklıdır.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
