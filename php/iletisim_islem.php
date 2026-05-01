<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../iletisim.html');
    exit;
}

$ad = htmlspecialchars($_POST['ad'] ?? '');
$email = htmlspecialchars($_POST['email'] ?? '');
$tel = htmlspecialchars($_POST['tel'] ?? '');
$password = htmlspecialchars($_POST['password'] ?? '');
$dogumTarihi = htmlspecialchars($_POST['dogumTarihi'] ?? '');
$konu = htmlspecialchars($_POST['konu'] ?? '');
$iletisimTercihi = htmlspecialchars($_POST['iletisimTercihi'] ?? '');
$mesaj = htmlspecialchars($_POST['mesaj'] ?? '');
$dosya = htmlspecialchars($_POST['dosya'] ?? '');
$kvkk = isset($_POST['kvkk']) ? 'Evet' : 'Hayir';

$konuLabels = [
    'genel' => 'Genel Bilgi',
    'destek' => 'Teknik Destek',
    'oneri' => 'Oneri/Sikayet'
];
$konuDisplay = $konuLabels[$konu] ?? $konu;

$tercihLabels = [
    'telefon' => 'Telefon',
    'email' => 'E-posta'
];
$tercihDisplay = $tercihLabels[$iletisimTercihi] ?? $iletisimTercihi;
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonucu | Web Projesi</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <nav class="navbar navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="../index.html">Web Projesi</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="../index.html">Hakkinda</a></li>
                <li class="nav-item"><a class="nav-link" href="../cv.html">CV</a></li>
                <li class="nav-item"><a class="nav-link" href="../sehir.html">Sehrim</a></li>
                <li class="nav-item"><a class="nav-link" href="../miras.html">Mirasi</a></li>
                <li class="nav-item"><a class="nav-link" href="../ilgi.html">Ilgi Alanlarim</a></li>
                <li class="nav-item"><a class="nav-link" href="../iletisim.html">Iletisim</a></li>
                <li class="nav-item"><a class="nav-link" href="../login.html">Giris</a></li>
            </ul>
        </div>
    </nav>

    <main class="container my-5 py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h1 class="section-title text-center mb-5">Form Sonucu</h1>
                <div class="card">
                    <div class="card-body p-5">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Alan</th>
                                    <th>Deger</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Ad Soyad</strong></td>
                                    <td><?php echo $ad; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>E-posta</strong></td>
                                    <td><?php echo $email; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Telefon</strong></td>
                                    <td><?php echo $tel; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Sifre</strong></td>
                                    <td><?php echo str_repeat('*', strlen($password)); ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Dogum Tarihi</strong></td>
                                    <td><?php echo $dogumTarihi; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Konu</strong></td>
                                    <td><?php echo $konuDisplay; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Iletisim Tercihi</strong></td>
                                    <td><?php echo $tercihDisplay; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Mesaj</strong></td>
                                    <td><?php echo nl2br($mesaj); ?></td>
                                </tr>
                                <tr>
                                    <td><strong>Dosya</strong></td>
                                    <td><?php echo $dosya ?: 'Secilmedi'; ?></td>
                                </tr>
                                <tr>
                                    <td><strong>KVKK Onayi</strong></td>
                                    <td><?php echo $kvkk; ?></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center mt-4">
                            <a href="../iletisim.html" class="btn btn-primary btn-lg">Geri Don</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p class="mb-0">&copy; 2026 Tum Haklari Saklidir.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
