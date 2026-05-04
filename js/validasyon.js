document.addEventListener('DOMContentLoaded', function() {
    console.log('Validasyon Modülü Yüklendi');

    const telInput = document.getElementById('tel');
    if (telInput) {
        telInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.substring(0, 11);
            if (value.length > 10) {
                value = `(${value.slice(0,3)}) ${value.slice(3,6)} ${value.slice(6,8)} ${value.slice(8,10)} ${value.slice(10)}`;
            } else if (value.length > 8) {
                value = `(${value.slice(0,3)}) ${value.slice(3,6)} ${value.slice(6,8)} ${value.slice(8)}`;
            } else if (value.length > 6) {
                value = `(${value.slice(0,3)}) ${value.slice(3,6)} ${value.slice(6)}`;
            } else if (value.length > 3) {
                value = `(${value.slice(0,3)}) ${value.slice(3)}`;
            } else if (value.length > 0) {
                value = `(${value}`;
            }
            e.target.value = value;
        });
    }

    const nativeBtn = document.getElementById('nativeValidateBtn');
    if (nativeBtn) {
        nativeBtn.addEventListener('click', function() {
            let isValid = true;

            const ad = document.getElementById('ad').value.trim();
            const email = document.getElementById('email').value.trim();
            const tel = document.getElementById('tel').value.trim();
            const telDigits = tel.replace(/\D/g, '');
            const password = document.getElementById('password').value.trim();
            const dogumTarihi = document.getElementById('dogumTarihi').value;
            const konu = document.getElementById('konu').value;
            const iletisimTercihi = document.querySelector('input[name="iletisimTercihi"]:checked');
            const mesaj = document.getElementById('mesaj').value.trim();
            const kvkk = document.getElementById('kvkk').checked;

            clearNativeErrors();

            if (!ad) {
                showNativeError('adError', 'Ad Soyad zorunludur.');
                setFieldError('ad');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showNativeError('emailError', 'E-posta zorunludur.');
                setFieldError('email');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showNativeError('emailError', 'Geçerli bir e-posta adresi giriniz.');
                setFieldError('email');
                isValid = false;
            }

            if (!telDigits) {
                showNativeError('telError', 'Telefon numarası zorunludur.');
                setFieldError('tel');
                isValid = false;
            }

            if (!password) {
                showNativeError('passwordError', 'Şifre zorunludur.');
                setFieldError('password');
                isValid = false;
            }

            const today = new Date().toISOString().slice(0, 10);
            if (!dogumTarihi) {
                showNativeError('dogumTarihiError', 'Doğum tarihi zorunludur.');
                setFieldError('dogumTarihi');
                isValid = false;
            } else if (dogumTarihi > today) {
                showNativeError('dogumTarihiError', 'Böyle bir tarihte doğamazsın.');
                setFieldError('dogumTarihi');
                isValid = false;
            }

            if (!konu) {
                showNativeError('konuError', 'Konu seçimi zorunludur.');
                setFieldError('konu');
                isValid = false;
            }

            if (!iletisimTercihi) {
                showNativeError('iletisimTercihiError', 'İletişim tercihi zorunludur.');
                isValid = false;
            }

            if (!mesaj) {
                showNativeError('mesajError', 'Mesaj zorunludur.');
                setFieldError('mesaj');
                isValid = false;
            }

            if (!kvkk) {
                showNativeError('kvkkError', 'KVKK onayı zorunludur.');
                isValid = false;
            }

            if (isValid) {
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

    function setFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.add('input-error');
            field.classList.remove('input-valid');
        }
    }

    function clearNativeErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function(el) {
            el.textContent = '';
            el.style.display = 'none';
        });

        const fields = document.querySelectorAll('.form-control, .form-select');
        fields.forEach(function(el) {
            el.classList.remove('input-error', 'input-valid');
        });
    }
});
