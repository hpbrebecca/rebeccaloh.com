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
        duration: 500, // Elegant and smooth - Gen Z subtle (500ms is the sweet spot)
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design easing - smooth and professional
        stagger: 40 // Subtle stagger for child elements (elegant timing)
    };

    let isTransitioning = false;

    // ============================================
    // OPTIMIZED PAGE FLIP TRANSITION
    // Elegant, subtle Gen Z style - showing off skills without being flashy
    // ============================================
    async function elegantTransition(currentElement, nextElement, displayValue) {
        if (isTransitioning) {
            // If already transitioning, wait a bit and try again
            await new Promise(resolve => setTimeout(resolve, 50));
            if (isTransitioning) return;
        }
        isTransitioning = true;
        
        try {
            // Phase 1: Elegant page flip exit (current element) - only if exists and is visible
            if (currentElement && nextElement) {
                const computed = window.getComputedStyle(currentElement);
                const isVisible = currentElement.offsetParent !== null &&
                                computed.display !== 'none' && 
                                computed.visibility !== 'hidden' &&
                                computed.opacity !== '0';
                
                if (isVisible) {
                    // Set up 3D transform properties
                    currentElement.style.setProperty('transform-style', 'preserve-3d', 'important');
                    currentElement.style.setProperty('backface-visibility', 'hidden', 'important');
                    currentElement.style.setProperty('transform-origin', 'left center', 'important');
                    currentElement.style.setProperty('display', computed.display || 'flex', 'important');
                    currentElement.style.setProperty('transition', 
                        `transform ${config.duration}ms ${config.easing}, opacity ${config.duration * 0.6}ms ${config.easing}`, 
                        'important'
                    );
                    
                    // Force layout calculation
                    currentElement.offsetHeight;
                    
                    // Trigger page flip animation
                    requestAnimationFrame(() => {
                        currentElement.style.setProperty('transform', 'perspective(1200px) rotateY(-95deg)', 'important');
                        currentElement.style.setProperty('opacity', '0', 'important');
                    });
                    
                    // Wait for exit animation
                    await new Promise(resolve => setTimeout(resolve, config.duration * 0.8));
                    
                    // Clean up
                    currentElement.style.display = 'none';
                    currentElement.style.removeProperty('transform');
                    currentElement.style.removeProperty('opacity');
                    currentElement.style.removeProperty('transition');
                    currentElement.style.removeProperty('transform-style');
                    currentElement.style.removeProperty('backface-visibility');
                    currentElement.style.removeProperty('transform-origin');
                } else {
                    // Just hide if not visible
                    currentElement.style.display = 'none';
                }
            }
            
            // Brief pause for elegance (only if we had an exit animation)
            if (currentElement && nextElement) {
                await new Promise(resolve => setTimeout(resolve, 30));
            }
            
            // Phase 2: Elegant page flip entrance (next element) - always execute
            if (nextElement) {
                // Hide all other sections first to ensure clean state
                const allSections = document.querySelectorAll('[id$="Section"]');
                allSections.forEach(section => {
                    if (section !== nextElement) {
                        section.style.display = 'none';
                    }
                });
                
                // Set up initial state with 3D properties
                const nextDisplay = displayValue || 'flex';
                nextElement.style.setProperty('display', nextDisplay, 'important');
                nextElement.style.setProperty('transform-style', 'preserve-3d', 'important');
                nextElement.style.setProperty('backface-visibility', 'hidden', 'important');
                nextElement.style.setProperty('transform-origin', currentElement ? 'right center' : 'center center', 'important');
                nextElement.style.setProperty('opacity', '0', 'important');
                nextElement.style.setProperty('transform', currentElement 
                    ? 'perspective(1200px) rotateY(95deg)' 
                    : 'perspective(1200px) rotateY(0deg) scale(0.98)', 
                    'important'
                );
                nextElement.style.setProperty('transition', 
                    `transform ${config.duration}ms ${config.easing}, opacity ${config.duration * 0.8}ms ${config.easing}`, 
                    'important'
                );
                
                // Force layout calculation
                nextElement.offsetHeight;
                
                // Trigger entrance animation with double RAF for reliability
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        nextElement.style.setProperty('opacity', '1', 'important');
                        nextElement.style.setProperty('transform', 'perspective(1200px) rotateY(0deg)', 'important');
                    });
                });
                
                // Wait for entrance animation
                await new Promise(resolve => setTimeout(resolve, config.duration));
                
                // Clean up transform properties (keep display)
                nextElement.style.removeProperty('transform');
                nextElement.style.removeProperty('opacity');
                nextElement.style.removeProperty('transition');
                nextElement.style.removeProperty('transform-style');
                nextElement.style.removeProperty('backface-visibility');
                nextElement.style.removeProperty('transform-origin');
                
                // Animate child elements elegantly
                animateChildElements(nextElement, 80);
            }
            
        } catch (error) {
            console.error('Elegant transition error:', error);
            // Ensure next element is visible even on error
            if (nextElement) {
                nextElement.style.display = displayValue || 'flex';
                nextElement.style.opacity = '1';
            }
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
