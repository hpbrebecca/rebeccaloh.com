/* ============================================
   ADVANCED WEB CODING SKILLS SHOWCASE
   - Smooth Scroll Animations
   - Parallax Effects
   - Advanced Micro-interactions
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // 1. SMOOTH SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
    // ============================================
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.stagger-animate');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('stagger-visible');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections and animated elements
        document.querySelectorAll('.about-section-designer, .quote-section-designer, .recommendations-section, #connectSection, .home-image-overlay-box').forEach(el => {
            el.classList.add('scroll-animate');
            observer.observe(el);
        });
    };

    // ============================================
    // 2. PARALLAX SCROLL EFFECTS
    // ============================================
    const initParallax = () => {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');
            
            parallaxElements.forEach(element => {
                const speed = element.classList.contains('parallax-fast') ? 0.5 : 0.2;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px) translateZ(0)`;
            });

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    };

    // ============================================
    // 3. ADVANCED MICRO-INTERACTIONS
    // ============================================
    const initMicroInteractions = () => {
        // Magnetic cursor effect for buttons and links
        const magneticElements = document.querySelectorAll('.nav-link, .linkedin-connection-btn, .form-submit-btn, .service-link');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.3;
                const moveY = y * 0.3;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px) translateZ(0)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0) translateZ(0)';
            });
        });

        // 3D tilt effect for cards
        const tiltElements = document.querySelectorAll('.home-image-overlay-box, .about-section-designer, .recommendations-section');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    };

    // Initialize all effects when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initScrollAnimations();
            initParallax();
            initMicroInteractions();
        });
    } else {
        initScrollAnimations();
        initParallax();
        initMicroInteractions();
    }
})();

