        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Calendar day selection
        const days = document.querySelectorAll('.calendar-day');
        days.forEach(day => {
            if (day.textContent.match(/^\d+$/)) {
                day.addEventListener('click', function() {
                    days.forEach(d => d.classList.remove('active'));
                    this.classList.add('active');
                });
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Intersection Observer for scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.section-title, .service-card, .testing-card, .calendar, .contact-info, .contact-form');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        if (entry.target.style.animation) {
                            entry.target.style.animationPlayState = 'running';
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            elements.forEach(element => {
                element.style.opacity = 0;
                element.style.animation = 'fadeInUp 1s ease forwards';
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });
        };
        
        window.addEventListener('DOMContentLoaded', animateOnScroll);
