/* ============================================
   PREMIUM PAGE TRANSITIONS - Gen Z & Editorial
   Billion-Dollar Web Design Quality
   State-of-the-Art: Enhanced Particle Dissolve + Liquid Morph + 3D Flip
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // PREMIUM CONFIGURATION
    // ============================================
    const config = {
        duration: 1200, // Slightly longer for more impact
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        particleCount: 100, // More particles for better effect
        stagger: 50
    };

    let isTransitioning = false;
    let currentSection = null;

    // ============================================
    // ENHANCED PARTICLE DISSOLVE SYSTEM
    // ============================================
    function createParticleDissolve(element) {
        return new Promise((resolve) => {
            if (!element) {
                resolve();
                return;
            }

            const rect = element.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                resolve();
                return;
            }

            const particles = [];
            const container = document.createElement('div');
            container.className = 'particle-dissolve-container';
            container.style.cssText = `
                position: fixed;
                left: ${rect.left}px;
                top: ${rect.top}px;
                width: ${rect.width}px;
                height: ${rect.height}px;
                pointer-events: none;
                z-index: 99999;
                overflow: visible;
                transform: translateZ(0);
            `;
            
            document.body.appendChild(container);
            
            // Get computed styles for particle color - extract from background
            const computed = window.getComputedStyle(element);
            const bgColor = computed.backgroundColor || 'rgba(255, 255, 255, 0.15)';
            
            // Create particles with varied colors (Gen Z style)
            const particleColors = [
                bgColor,
                'rgba(75, 58, 143, 0.8)',  // Violet accent
                'rgba(106, 47, 111, 0.6)', // Purple accent
                'rgba(255, 255, 255, 0.2)'
            ];
            
            for (let i = 0; i < config.particleCount; i++) {
                const particle = document.createElement('div');
                const size = Math.random() * 12 + 6; // Larger particles
                const startX = Math.random() * rect.width;
                const startY = Math.random() * rect.height;
                const velocityX = (Math.random() - 0.5) * 16; // Faster
                const velocityY = (Math.random() - 0.5) * 16 - 6; // Upward bias
                const rotation = Math.random() * 360;
                const color = particleColors[Math.floor(Math.random() * particleColors.length)];
                
                particle.style.cssText = `
                    position: absolute;
                    left: ${startX}px;
                    top: ${startY}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${color};
                    border-radius: 50%;
                    opacity: 1;
                    transform: rotate(${rotation}deg);
                    box-shadow: 0 0 ${size * 2}px ${color};
                    transition: all ${config.duration}ms cubic-bezier(0.34, 1.56, 0.64, 1);
                `;
                
                container.appendChild(particle);
                
                particles.push({
                    element: particle,
                    vx: velocityX,
                    vy: velocityY,
                    vr: (Math.random() - 0.5) * 1080, // More rotation
                    finalSize: size * (0.3 + Math.random() * 0.4) // Shrink to different sizes
                });
            }
            
            // Animate particles with requestAnimationFrame for smoothness
            let startTime = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / config.duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
                
                particles.forEach((particle, index) => {
                    const delay = (index / config.particleCount) * 200; // Stagger particle animation
                    const adjustedProgress = Math.max(0, Math.min(1, (progress * config.duration - delay) / (config.duration - delay)));
                    
                    if (adjustedProgress > 0 && adjustedProgress <= 1) {
                        const currentX = parseFloat(particle.element.style.left) + particle.vx * adjustedProgress * 3;
                        const currentY = parseFloat(particle.element.style.top) + particle.vy * adjustedProgress * 3 + (adjustedProgress * adjustedProgress * 100); // Gravity
                        const currentRot = parseFloat(particle.element.style.transform.match(/rotate\(([^)]+)/)?.[1] || 0) + particle.vr * adjustedProgress;
                        const currentOpacity = 1 - adjustedProgress;
                        const currentScale = 1 - (adjustedProgress * 0.7); // Scale down but not completely
                        
                        particle.element.style.left = currentX + 'px';
                        particle.element.style.top = currentY + 'px';
                        particle.element.style.transform = `rotate(${currentRot}deg) scale(${currentScale})`;
                        particle.element.style.opacity = currentOpacity;
                        particle.element.style.boxShadow = `0 0 ${particle.finalSize * 2 * (1 - adjustedProgress)}px ${particle.element.style.background.replace('rgb', 'rgba').replace(')', `, ${currentOpacity})`)}`;
                    }
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    container.remove();
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // ============================================
    // ENHANCED LIQUID MORPH ENTRANCE
    // ============================================
    function createLiquidMorphEntrance(element) {
        return new Promise((resolve) => {
            if (!element) {
                resolve();
                return;
            }

            const rect = element.getBoundingClientRect();
            const overlay = document.createElement('div');
            overlay.className = 'liquid-morph-entrance';
            
            // Generate more complex blob shape
            const blobPoints = [];
            const pointCount = 12;
            for (let i = 0; i < pointCount; i++) {
                const angle = (i / pointCount) * Math.PI * 2;
                const radius = 40 + Math.random() * 40;
                const x = 50 + Math.cos(angle) * (radius / 100) * 50;
                const y = 50 + Math.sin(angle) * (radius / 100) * 50;
                blobPoints.push(`${x}% ${y}%`);
            }
            
            const blobShape = `polygon(${blobPoints.join(', ')})`;
            
            overlay.style.cssText = `
                position: fixed;
                left: ${rect.left}px;
                top: ${rect.top}px;
                width: ${rect.width}px;
                height: ${rect.height}px;
                background: linear-gradient(135deg, 
                    rgba(75, 58, 143, 0.15),
                    rgba(106, 47, 111, 0.1),
                    rgba(75, 58, 143, 0.15)
                );
                clip-path: ${blobShape};
                z-index: 99998;
                pointer-events: none;
                opacity: 0;
                transition: clip-path ${config.duration * 0.7}ms cubic-bezier(0.34, 1.56, 0.64, 1),
                            opacity ${config.duration * 0.7}ms ease,
                            filter ${config.duration * 0.7}ms ease;
                filter: blur(0);
            `;
            
            document.body.appendChild(overlay);
            
            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                overlay.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    overlay.style.filter = 'blur(10px)';
                    setTimeout(() => {
                        overlay.remove();
                        resolve();
                    }, config.duration * 0.7);
                }, config.duration * 0.4);
            });
        });
    }

    // ============================================
    // PREMIUM COMBINED TRANSITION
    // ============================================
    async function premiumTransition(currentElement, nextElement, displayValue) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Prevent scrolling during transition
        document.body.style.overflow = 'hidden';
        
        try {
            // Phase 1: Enhanced particle dissolve exit
            const exitPromise = currentElement && currentElement.style.display !== 'none'
                ? Promise.all([
                    createParticleDissolve(currentElement),
                    new Promise(resolve => {
                        currentElement.style.transition = `
                            opacity ${config.duration * 0.7}ms ${config.easing},
                            transform ${config.duration * 0.7}ms ${config.easing},
                            filter ${config.duration * 0.7}ms ${config.easing}
                        `;
                        currentElement.style.opacity = '0';
                        currentElement.style.transform = 'scale(0.92) translateY(30px) rotateX(5deg)';
                        currentElement.style.filter = 'blur(15px) brightness(0.8)';
                        setTimeout(() => {
                            currentElement.style.display = 'none';
                            resolve();
                        }, config.duration * 0.7);
                    })
                ])
                : Promise.resolve();
            
            await exitPromise;
            
            // Small delay between exit and entrance
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Phase 2: Show next element with enhanced entrance
            if (nextElement) {
                nextElement.style.display = displayValue;
                
                // Force layout recalculation
                nextElement.offsetHeight;
                
                // Initial state - more dramatic
                nextElement.style.opacity = '0';
                nextElement.style.transform = 'scale(0.88) translateY(40px) rotateX(-5deg)';
                nextElement.style.filter = 'blur(20px) brightness(1.2)';
                
                // Force reflow
                nextElement.offsetHeight;
                
                // Liquid morph entrance overlay (non-blocking)
                createLiquidMorphEntrance(nextElement);
                
                // Phase 3: Dramatic entrance
                nextElement.style.transition = `
                    opacity ${config.duration}ms ${config.easing},
                    transform ${config.duration}ms cubic-bezier(0.34, 1.56, 0.64, 1),
                    filter ${config.duration}ms ${config.easing}
                `;
                
                await new Promise(resolve => {
                    requestAnimationFrame(() => {
                        nextElement.style.opacity = '1';
                        nextElement.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
                        nextElement.style.filter = 'blur(0) brightness(1)';
                        setTimeout(resolve, config.duration);
                    });
                });
                
                // Phase 4: Staggered child animations
                await new Promise(resolve => setTimeout(resolve, 150));
                animateChildElements(nextElement, 0);
            }
            
        } catch (error) {
            console.error('Transition error:', error);
        } finally {
            isTransitioning = false;
            document.body.style.overflow = '';
        }
    }

    // ============================================
    // ENHANCED STAGGERED CHILD ANIMATIONS
    // ============================================
    function animateChildElements(element, delay = 0) {
        const selectors = [
            '.section-heading',
            '.about-description',
            '.about-content',
            '.quote-future',
            '.service-link',
            '.contact-greeting',
            '.contact-description',
            '.logo-tile',
            '.recommendation-card',
            '.contact-form',
            '.about-detail',
            '.home-image-wrapper',
            '.home-image-overlay-box'
        ];
        
        const children = Array.from(element.querySelectorAll(selectors.join(', ')))
            .filter(el => {
                const rect = el.getBoundingClientRect();
                return el.offsetParent !== null && rect.width > 0 && rect.height > 0;
            });
        
        children.forEach((child, index) => {
            setTimeout(() => {
                const originalOpacity = window.getComputedStyle(child).opacity;
                const originalTransform = window.getComputedStyle(child).transform;
                
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px) scale(0.94) rotateY(5deg)';
                child.style.transition = `opacity 700ms ${config.easing}, transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
                child.style.willChange = 'opacity, transform';
                
                // Force reflow
                child.offsetHeight;
                
                requestAnimationFrame(() => {
                    child.style.opacity = originalOpacity || '1';
                    child.style.transform = originalTransform || 'translateY(0) scale(1) rotateY(0deg)';
                    
                    // Clean up will-change after animation
                    setTimeout(() => {
                        child.style.willChange = 'auto';
                    }, 700);
                });
            }, delay + (index * config.stagger));
        });
    }

    // ============================================
    // ENHANCED SHOW SECTION
    // ============================================
    function createEnhancedShowSection(originalShowSection, sections) {
        return async function(section) {
            const target = sections[section] ? section : 'home';
            const currentSectionElement = currentSection ? (sections[currentSection]?.element) : null;
            const nextSectionElement = sections[target]?.element;

            if (!nextSectionElement) {
                if (originalShowSection) originalShowSection(target);
                return;
            }

            // Skip if same section
            if (currentSection === target && nextSectionElement.style.display !== 'none') {
                return;
            }

            // Perform premium transition
            await premiumTransition(
                currentSectionElement,
                nextSectionElement,
                sections[target].display || 'block'
            );

            // Hide all other sections and reset styles
            Object.entries(sections).forEach(([key, value]) => {
                if (key !== target && value.element) {
                    value.element.style.display = 'none';
                    value.element.style.opacity = '';
                    value.element.style.transform = '';
                    value.element.style.filter = '';
                    value.element.style.transition = '';
                    value.element.style.willChange = '';
                }
            });

            // Update current section
            currentSection = target;

            // Call original function for additional logic
            if (originalShowSection) {
                originalShowSection(target);
            }
        };
    }

    // ============================================
    // ROBUST INITIALIZATION
    // ============================================
    function initPageTransitions() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPageTransitions);
            return;
        }

        let attempts = 0;
        const maxAttempts = 50; // More attempts
        const checkInterval = 50; // Check more frequently
        
        function tryInit() {
            attempts++;
            
            // Check if sections and showSection are available
            if (window.sections && (window.originalShowSection || window.showSection)) {
                // If originalShowSection doesn't exist yet, capture current showSection
                if (!window.originalShowSection && window.showSection) {
                    window.originalShowSection = window.showSection;
                }
                
                // Create enhanced version
                const enhanced = createEnhancedShowSection(
                    window.originalShowSection || window.showSection, 
                    window.sections
                );
                window.showSection = enhanced;
                
                console.log('✓ Premium page transitions initialized');
                return;
            }
            
            if (attempts < maxAttempts) {
                setTimeout(tryInit, checkInterval);
            } else {
                console.warn('⚠ Page transitions: Could not initialize (sections not found)');
            }
        }
        
        // Start immediately and also after a delay
        tryInit();
        setTimeout(tryInit, 200);
        setTimeout(tryInit, 500);
        setTimeout(tryInit, 1000);
    }

    // Expose for manual initialization
    window.initPageTransitions = initPageTransitions;
    
    // Auto-initialize
    if (document.readyState === 'complete') {
        initPageTransitions();
    } else {
        window.addEventListener('load', initPageTransitions);
        initPageTransitions();
    }

})();
