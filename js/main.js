document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('main, section, header').forEach(section => {
        section.classList.add('fade-in');
    });

    const cards = document.querySelectorAll('.card, .info-card, .place-card, .experience-card');
    cards.forEach((card, index) => {
        card.classList.add(`fade-in-delay-${(index % 5) + 1}`);
    });

    // İletişim Formu Doğrulama
    const nativeValidateBtn = document.getElementById('nativeValidateBtn');
    if (nativeValidateBtn) {
        nativeValidateBtn.addEventListener('click', function() {
            let isValid = true;
            
            const validateField = (id, condition, errorMsg) => {
                const el = document.getElementById(id);
                const errorEl = document.getElementById(id + 'Error');
                const tickEl = document.getElementById(id + 'Tick');
                
                if (!condition) {
                    el.classList.add('input-error');
                    el.classList.remove('input-valid');
                    errorEl.textContent = errorMsg;
                    errorEl.style.display = 'block';
                    tickEl.style.display = 'none';
                    isValid = false;
                } else {
                    el.classList.remove('input-error');
                    el.classList.add('input-valid');
                    errorEl.style.display = 'none';
                    tickEl.style.display = 'inline';
                }
            };

            const ad = document.getElementById('ad');
            validateField('ad', ad.value.trim() !== '', 'Ad Soyad alanı boş bırakılamaz.');

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField('email', email.value.trim() !== '' && emailRegex.test(email.value), 'Geçerli bir e-posta adresi giriniz.');

            const tel = document.getElementById('tel');
            const telRegex = /^\d+$/;
            validateField('tel', tel.value.trim() !== '' && telRegex.test(tel.value), 'Telefon numarası sadece rakamlardan oluşmalıdır.');

            const password = document.getElementById('password');
            validateField('password', password.value.trim() !== '', 'Şifre alanı boş bırakılamaz.');

            const dogumTarihi = document.getElementById('dogumTarihi');
            validateField('dogumTarihi', dogumTarihi.value !== '', 'Doğum tarihi seçiniz.');

            const konu = document.getElementById('konu');
            validateField('konu', konu.value !== '', 'Lütfen bir konu seçiniz.');

            const iletisimTercihi = document.querySelector('input[name="iletisimTercihi"]:checked');
            const tercihError = document.getElementById('iletisimTercihiError');
            const tercihTick = document.getElementById('iletisimTercihiTick');
            if (!iletisimTercihi) {
                tercihError.textContent = 'İletişim tercihi seçiniz.';
                tercihError.style.display = 'block';
                tercihTick.style.display = 'none';
                isValid = false;
            } else {
                tercihError.style.display = 'none';
                tercihTick.style.display = 'inline-block';
            }

            const mesaj = document.getElementById('mesaj');
            validateField('mesaj', mesaj.value.trim() !== '', 'Mesaj alanı boş bırakılamaz.');

            const dosya = document.getElementById('dosya');
            validateField('dosya', dosya.value !== '', 'Lütfen bir dosya yükleyiniz.');

            const kvkk = document.getElementById('kvkk');
            validateField('kvkk', kvkk.checked, 'KVKK onay metnini kabul etmelisiniz.');

            if (isValid) {
                document.getElementById('iletisimForm').submit();
            }
        });
    }

    console.log('Web Projesi Yüklendi');
});