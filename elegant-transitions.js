/* ============================================
   ELEGANT PAGE TRANSITIONS - Fast Page Flip
   Billion-Dollar Web Design: Modern & Editorial
   Smooth Page Flip Effect - Gen Z Style (Inspired by nadlo.ch)
   Optimized for Performance
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // OPTIMIZED CONFIGURATION
    // ============================================
    const config = {
        duration: 550, // Fast and snappy
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        stagger: 35
    };

    let isTransitioning = false;

    // ============================================
    // OPTIMIZED PAGE FLIP TRANSITION
    // ============================================
    async function elegantTransition(currentElement, nextElement, displayValue) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        try {
            // Phase 1: Fast page flip exit
            if (currentElement) {
                const computed = window.getComputedStyle(currentElement);
                const isVisible = computed.display !== 'none' && 
                                 computed.visibility !== 'hidden' &&
                                 computed.opacity !== '0';
                
                if (isVisible) {
                    // Batch all style changes at once
                    currentElement.style.cssText += `
                        display: ${computed.display || 'flex'} !important;
                        transform-style: preserve-3d;
                        backface-visibility: hidden;
                        transform-origin: left center;
                        transition: transform ${config.duration}ms ${config.easing}, opacity ${config.duration * 0.5}ms ${config.easing};
                    `;
                    
                    // Force single layout
                    currentElement.offsetHeight;
                    
                    // Single animation trigger
                    currentElement.style.transform = 'perspective(1200px) rotateY(-100deg)';
                    currentElement.style.opacity = '0';
                    
                    await new Promise(resolve => {
                        setTimeout(() => {
                            currentElement.style.display = 'none';
                            currentElement.style.transform = '';
                            currentElement.style.opacity = '';
                            currentElement.style.transition = '';
                            currentElement.style.transformStyle = '';
                            currentElement.style.backfaceVisibility = '';
                            currentElement.style.transformOrigin = '';
                            resolve();
                        }, config.duration * 0.7);
                    });
                } else {
                    currentElement.style.display = 'none';
                }
            }
            
            // Minimal pause
            await new Promise(resolve => setTimeout(resolve, 25));
            
            // Phase 2: Fast page flip entrance
            if (nextElement) {
                // Batch all initial styles
                nextElement.style.cssText += `
                    display: ${displayValue || 'flex'} !important;
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                    transform-origin: right center;
                    opacity: 0;
                    transform: perspective(1200px) rotateY(100deg);
                    transition: transform ${config.duration}ms ${config.easing}, opacity ${config.duration * 0.6}ms ${config.easing};
                `;
                
                // Force single layout
                nextElement.offsetHeight;
                
                // Single animation trigger
                requestAnimationFrame(() => {
                    nextElement.style.opacity = '1';
                    nextElement.style.transform = 'perspective(1200px) rotateY(0deg)';
                });
                
                await new Promise(resolve => {
                    setTimeout(() => {
                        // Clean up in batch
                        nextElement.style.transform = '';
                        nextElement.style.opacity = '';
                        nextElement.style.transition = '';
                        nextElement.style.transformStyle = '';
                        nextElement.style.backfaceVisibility = '';
                        nextElement.style.transformOrigin = '';
                        
                        // Quick child animations
                        animateChildElements(nextElement, 0);
                        resolve();
                    }, config.duration);
                });
            }
            
        } catch (error) {
            console.error('Transition error:', error);
        } finally {
            isTransitioning = false;
        }
    }

    // ============================================
    // OPTIMIZED CHILD ANIMATIONS
    // ============================================
    function animateChildElements(element, delay = 0) {
        const selectors = [
            '.section-heading',
            '.about-description',
            '.about-content',
            '.contact-greeting',
            '.contact-description',
            '.logo-tile',
            '.contact-form'
        ];
        
        // Single querySelectorAll call
        const children = Array.from(element.querySelectorAll(selectors.join(', ')))
            .filter(el => el.offsetParent !== null); // Fast visibility check
        
        // Batch operations
        children.forEach((child, index) => {
            const childDelay = delay + (index * config.stagger);
            setTimeout(() => {
                // Batch initial state
                child.style.opacity = '0';
                child.style.transform = 'translateY(5px)';
                child.style.transition = `opacity 280ms ${config.easing}, transform 280ms ${config.easing}`;
                
                // Single layout trigger
                child.offsetHeight;
                
                // Animate in
                requestAnimationFrame(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                });
            }, childDelay);
        });
    }

    // ============================================
    // EXPOSE GLOBALLY
    // ============================================
    window.elegantTransition = elegantTransition;
    window.animateChildElements = animateChildElements;

})();
