// Navigasi Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi Fade In sederhana saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// ==========================================
// Fitur Hitam/Putih Mode Toggle
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Menambah/menghapus class 'light-mode' di tag <body>
        body.classList.toggle('light-mode');
        
        // Cek apakah sekarang sedang mode terang atau gelap
        if (body.classList.contains('light-mode')) {
            // Jika mode terang: ganti ikon jadi matahari
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            // Jika mode gelap: ganti ikon kembali jadi bulan
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}