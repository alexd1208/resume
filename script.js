// Активация мобильного меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Кнопка "Наверх"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Анимация прогресс-баров навыков при прокрутке
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(skillBar => {
        const width = skillBar.getAttribute('data-width');
        skillBar.style.width = width;
    });
}

// Запуск анимации при попадании в область видимости
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function checkScroll() {
    const skillsPosition = skillsSection.getBoundingClientRect();
    
    if (skillsPosition.top < window.innerHeight && !skillsAnimated) {
        animateSkills();
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', checkScroll);

// Фильтрация портфолио
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к текущей кнопке
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Обработка формы обратной связи
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь был бы код для отправки данных на сервер
        alert('Сообщение отправлено!');
        this.reset();
    });
}

// Изменение навигации при прокрутке
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Анимация появления элементов при прокрутке
const animatedElements = document.querySelectorAll('.timeline-item, .portfolio-item, .skill-category');

function checkElements() {
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        
        if (elementPosition.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Инициализация стилей для анимации
animatedElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Проверка при загрузке и прокрутке
window.addEventListener('load', checkElements);
window.addEventListener('scroll', checkElements);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, нужно ли анимировать навыки сразу (если секция уже в области видимости)
    checkScroll();
    
    // Проверяем элементы для анимации
    checkElements();
});