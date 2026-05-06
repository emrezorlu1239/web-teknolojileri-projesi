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
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('main, section, header').forEach(function(section) {
        section.classList.add('fade-in');
    });

    const cards = document.querySelectorAll('.card, .info-card, .place-card, .experience-card');
    cards.forEach(function(card, index) {
        card.classList.add('fade-in-delay-' + ((index % 5) + 1));
    });

    // İletişim Formu Doğrulama
    const nativeValidateBtn = document.getElementById('nativeValidateBtn');
    if (nativeValidateBtn) {
        nativeValidateBtn.addEventListener('click', function() {
            let isValid = true;

            const validateField = function(id, condition, errorMsg) {
                const el = document.getElementById(id);
                const errorEl = document.getElementById(id + 'Error');
                if (!el || !errorEl) return;
                const tickEl = document.getElementById(id + 'Tick');

                if (!condition) {
                    el.classList.add('input-error');
                    el.classList.remove('input-valid');
                    errorEl.textContent = errorMsg;
                    errorEl.style.display = 'block';
                    if (tickEl) tickEl.style.display = 'none';
                    isValid = false;
                } else {
                    el.classList.remove('input-error');
                    el.classList.add('input-valid');
                    errorEl.style.display = 'none';
                    if (tickEl) tickEl.style.display = 'inline';
                }
            };

            const ad = document.getElementById('ad');
            validateField('ad', ad.value.trim() !== '', 'Ad Soyad alanı boş bırakılamaz.');

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField('email', email.value.trim() !== '' && emailRegex.test(email.value), 'Geçerli bir e-posta adresi giriniz.');

            const tel = document.getElementById('tel');
            const telDigits = tel.value.replace(/\D/g, '');
            if (!tel.value.trim()) {
                validateField('tel', false, 'Telefon numarası zorunludur.');
            } else if (telDigits.length !== 10) {
                validateField('tel', false, 'Telefon numarası 10 haneli olmalıdır (5XX XXX XX XX).');
            } else if (!telDigits.startsWith('5')) {
                validateField('tel', false, 'Telefon numarası 5 ile başlamalıdır.');
            } else {
                validateField('tel', true, '');
            }

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
                if (tercihTick) tercihTick.style.display = 'none';
                isValid = false;
            } else {
                tercihError.style.display = 'none';
                if (tercihTick) tercihTick.style.display = 'inline-block';
            }

            const mesaj = document.getElementById('mesaj');
            validateField('mesaj', mesaj.value.trim() !== '', 'Mesaj alanı boş bırakılamaz.');

            const kvkk = document.getElementById('kvkk');
            validateField('kvkk', kvkk.checked, 'KVKK onay metnini kabul etmelisiniz.');

            if (isValid) {
                document.getElementById('iletisimForm').submit();
            }
        });
    }

    // Telefon formatlama
    const telInput = document.getElementById('tel');
    if (telInput) {
        telInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.substring(0, 10);
            if (value.length > 9) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3,6) + ' ' + value.slice(6,8) + ' ' + value.slice(8);
            } else if (value.length > 6) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3,6) + ' ' + value.slice(6);
            } else if (value.length > 3) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3);
            } else if (value.length > 0) {
                value = '(' + value;
            }
            e.target.value = value;
        });
    }

    // Login Sayfası Doğrulama
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('error') === '1') {
            const errorEl = document.getElementById('errorMessage');
            if (errorEl) errorEl.style.display = 'block';
        }

        loginForm.addEventListener('submit', function(e) {
            let isValid = true;

            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const emailError = document.getElementById('emailLoginError');
            const passwordError = document.getElementById('passwordLoginError');
            const generalError = document.getElementById('errorMessage');

            if (generalError) generalError.style.display = 'none';
            if (emailError) { emailError.style.display = 'none'; emailError.textContent = ''; }
            if (passwordError) { passwordError.style.display = 'none'; passwordError.textContent = ''; }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email.value.trim()) {
                if (emailError) {
                    emailError.textContent = 'E-posta alanı boş bırakılamaz.';
                    emailError.style.display = 'block';
                }
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                if (emailError) {
                    emailError.textContent = 'Geçerli bir e-posta adresi giriniz.';
                    emailError.style.display = 'block';
                }
                isValid = false;
            }

            if (!password.value.trim()) {
                if (passwordError) {
                    passwordError.textContent = 'Şifre alanı boş bırakılamaz.';
                    passwordError.style.display = 'block';
                }
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Carousel Slider
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        const thumbs = document.querySelectorAll('.thumb');
        const prevBtn = document.getElementById('cPrev');
        const nextBtn = document.getElementById('cNext');
        const progressBar = document.getElementById('cProgressBar');
        let idx = 0;
        let autoTimer;

        function goTo(i) {
            slides[idx].classList.remove('active');
            thumbs[idx].classList.remove('active');
            idx = i;
            carouselTrack.style.transform = 'translateX(-' + (idx * 100) + '%)';
            slides[idx].classList.add('active');
            thumbs[idx].classList.add('active');
            progressBar.style.width = ((idx + 1) / slides.length * 100) + '%';
            resetAuto();
        }

        function resetAuto() {
            clearInterval(autoTimer);
            autoTimer = setInterval(function() {
                goTo((idx + 1) % slides.length);
            }, 4000);
        }

        prevBtn.addEventListener('click', function() { goTo((idx - 1 + slides.length) % slides.length); });
        nextBtn.addEventListener('click', function() { goTo((idx + 1) % slides.length); });
        thumbs.forEach(function(t) { t.addEventListener('click', function() { goTo(+t.dataset.index); }); });

        let startX = 0;
        carouselTrack.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
        carouselTrack.addEventListener('touchend', function(e) {
            const diff = e.changedTouches[0].clientX - startX;
            if (diff < -50) goTo((idx + 1) % slides.length);
            else if (diff > 50) goTo((idx - 1 + slides.length) % slides.length);
        });

        resetAuto();
    }

    // İlgi Alanlarım - RAWG API Entegrasyonu
    const gamesContainer = document.getElementById('gamesContainer');
    const spinner = document.getElementById('spinner');
    const errorMsg = document.getElementById('errorMsg');
    if (gamesContainer && spinner && errorMsg) {
        const API_KEY = '9be1d067a7b440da8def96f6558efb4a';
        const BASE_URL = 'https://api.rawg.io/api/games';

        const myGames = [
            'The Witcher 3: Wild Hunt',
            'Red Dead Redemption 2',
            'God of War',
            'Elden Ring',
            'Cyberpunk 2077',
            'Grand Theft Auto V',
            'Minecraft',
            'The Last of Us Part II',
            'Half-Life',
            'Dark Souls III',
            'Portal 2',
            'Sekiro: Shadows Die Twice'
        ];

        function getPlatforms(game) {
            if (!game.platforms || game.platforms.length === 0) return 'Bilinmiyor';
            return game.platforms.map(function(p) { return p.platform.name; }).join(', ');
        }

        function createGameCard(game) {
            const image = game.background_image || 'https://via.placeholder.com/400x200?text=Gorsel+Yok';
            const rating = game.rating ? game.rating.toFixed(1) : 'N/A';
            const released = game.released || 'Bilinmiyor';
            const platforms = getPlatforms(game);

            return '<div class="col-md-6 col-lg-4 mb-4">' +
                     '<div class="card h-100">' +
                         '<img src="' + image + '" class="card-img-top" alt="' + game.name + '" style="height: 200px; object-fit: cover;">' +
                         '<div class="card-body d-flex flex-column">' +
                             '<h5 class="card-title">' + game.name + '</h5>' +
                             '<p class="card-text mb-1">' +
                                 '<i class="bi bi-star-fill text-warning"></i> <strong>Puan:</strong> ' + rating +
                             '</p>' +
                             '<p class="card-text mb-1">' +
                                 '<i class="bi bi-calendar-event"></i> <strong>Çıkış:</strong> ' + released +
                             '</p>' +
                             '<p class="card-text text-muted small mt-auto">' +
                                 '<i class="bi bi-controller"></i> ' + platforms +
                             '</p>' +
                         '</div>' +
                     '</div>' +
                 '</div>';
        }

        async function fetchSpecificGames() {
            spinner.classList.remove('d-none');
            gamesContainer.innerHTML = '';
            errorMsg.classList.add('d-none');
            try {
                const requests = myGames.map(function(name) {
                    return fetch(BASE_URL + '?key=' + API_KEY + '&page_size=1&search=' + encodeURIComponent(name))
                        .then(function(res) {
                            if (!res.ok) throw new Error('API hatası');
                            return res.json();
                        })
                        .then(function(data) {
                            if (data.results && data.results.length > 0) return data.results[0];
                            return null;
                        });
                });
                const results = await Promise.all(requests);
                const games = results.filter(function(g) { return g !== null; });
                spinner.classList.add('d-none');
                if (games.length > 0) {
                    gamesContainer.innerHTML = games.map(createGameCard).join('');
                } else {
                    gamesContainer.innerHTML = '<div class="col-12 text-center text-muted">Sonuç bulunamadı.</div>';
                }
            } catch (error) {
                spinner.classList.add('d-none');
                errorMsg.classList.remove('d-none');
            }
        }

        fetchSpecificGames();
    }

    console.log('Web Projesi Yüklendi');
});
