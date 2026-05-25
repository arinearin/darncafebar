// Active link on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Toggle Category (ซ่อน/แสดงเมนู)
const categoryHeaders = document.querySelectorAll('.category-header');

categoryHeaders.forEach(header => {
    const content = document.getElementById(`${header.dataset.category}-content`);
    if (content) {
        content.classList.remove('show');
    }
    
    header.addEventListener('click', () => {
        const contentId = `${header.dataset.category}-content`;
        const content = document.getElementById(contentId);
        const icon = header.querySelector('.toggle-icon');
        
        if (content) {
            content.classList.toggle('show');
            
            if (content.classList.contains('show')) {
                icon.textContent = '▲';
            } else {
                icon.textContent = '▼';
            }
        }
    });
});

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.category, .about-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.4s ease-out';
    observer.observe(el);
});