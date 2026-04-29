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

    console.log('Web Projesi Yüklendi');
});