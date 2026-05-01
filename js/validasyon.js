document.addEventListener('DOMContentLoaded', function() {
    console.log('Validasyon Modülü Yüklendi');

    const nativeBtn = document.getElementById('nativeValidateBtn');
    if (nativeBtn) {
        nativeBtn.addEventListener('click', function() {
            let isValid = true;

            const ad = document.getElementById('ad').value.trim();
            const email = document.getElementById('email').value.trim();
            const tel = document.getElementById('tel').value.trim();
            const password = document.getElementById('password').value.trim();
            const dogumTarihi = document.getElementById('dogumTarihi').value;
            const konu = document.getElementById('konu').value;
            const iletisimTercihi = document.querySelector('input[name="iletisimTercihi"]:checked');
            const mesaj = document.getElementById('mesaj').value.trim();
            const dosya = document.getElementById('dosya').value;
            const kvkk = document.getElementById('kvkk').checked;

            clearNativeErrors();

            if (!ad) {
                showNativeError('adError', 'Ad Soyad zorunludur.');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showNativeError('emailError', 'E-posta zorunludur.');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showNativeError('emailError', 'Gecerli bir e-posta adresi giriniz.');
                isValid = false;
            }

            if (!tel) {
                showNativeError('telError', 'Telefon numarasi zorunludur.');
                isValid = false;
            } else if (!/^\d+$/.test(tel)) {
                showNativeError('telError', 'Telefon numarasi sadece rakamlardan olusmalidir.');
                isValid = false;
            }

            if (!password) {
                showNativeError('passwordError', 'Sifre zorunludur.');
                isValid = false;
            }

            if (!dogumTarihi) {
                showNativeError('dogumTarihiError', 'Dogum tarihi zorunludur.');
                isValid = false;
            }

            if (!konu) {
                showNativeError('konuError', 'Konu secimi zorunludur.');
                isValid = false;
            }

            if (!iletisimTercihi) {
                showNativeError('iletisimTercihiError', 'Iletisim tercihi zorunludur.');
                isValid = false;
            }

            if (!mesaj) {
                showNativeError('mesajError', 'Mesaj zorunludur.');
                isValid = false;
            }

            if (!dosya) {
                showNativeError('dosyaError', 'Dosya secimi zorunludur.');
                isValid = false;
            }

            if (!kvkk) {
                showNativeError('kvkkError', 'KVKK onayi zorunludur.');
                isValid = false;
            }

            if (isValid) {
                alert('Native JS: Tum alanlar dogru! Form gonderiliyor...');
                document.getElementById('iletisimForm').submit();
            }
        });
    }

    function showNativeError(elementId, message) {
        const el = document.getElementById(elementId);
        if (el) {
            el.textContent = message;
            el.style.display = 'block';
        }
    }

    function clearNativeErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function(el) {
            el.textContent = '';
            el.style.display = 'none';
        });
    }
});
