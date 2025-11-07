// Detect mobile devices and set LinkedIn link accordingly
(function() {
    // Function to detect mobile devices
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && window.innerHeight <= 1024);
    }

    // Function to detect iOS
    function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // Function to detect Android
    function isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }

    // Function to setup LinkedIn link with deep linking
    function setupLinkedInLink(linkElement) {
        if (!linkElement) return;
        
        const webUrl = 'https://ch.linkedin.com/in/rebiloh';
        
        if (isMobileDevice()) {
            // Set href to web URL (LinkedIn Universal Links should auto-open app)
            linkElement.href = webUrl;
            
            // Try multiple methods to open app on click
            linkElement.addEventListener('click', function(e) {
                e.preventDefault();
                
                let appOpened = false;
                
                // Method 1: Try Android Intent URL (for Android)
                if (isAndroid()) {
                    const intentUrl = 'intent://linkedin.com/in/rebiloh#Intent;scheme=https;package=com.linkedin.android;end';
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = intentUrl;
                    document.body.appendChild(iframe);
                    
                    setTimeout(function() {
                        document.body.removeChild(iframe);
                        if (!appOpened) {
                            // Method 2: Try standard deep link
                            tryOpenApp('linkedin://in/rebiloh');
                        }
                    }, 500);
                } else if (isIOS()) {
                    // Method 1: Try iOS deep link
                    tryOpenApp('linkedin://profile/rebiloh');
                } else {
                    // Try standard deep link
                    tryOpenApp('linkedin://in/rebiloh');
                }
                
                function tryOpenApp(appUrl) {
                    // Listen for page visibility change (app opened)
                    const visibilityHandler = function() {
                        if (document.hidden) {
                            appOpened = true;
                        }
                    };
                    document.addEventListener('visibilitychange', visibilityHandler);
                    
                    // Try opening the app using iframe method (more reliable)
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = appUrl;
                    document.body.appendChild(iframe);
                    
                    // Fallback to direct location change
                    setTimeout(function() {
                        if (!appOpened) {
                            window.location.href = appUrl;
                        }
                    }, 100);
                    
                    // Final fallback to web
                    setTimeout(function() {
                        document.removeEventListener('visibilitychange', visibilityHandler);
                        if (iframe.parentNode) {
                            document.body.removeChild(iframe);
                        }
                        if (!appOpened && !document.hidden) {
                            window.location.href = webUrl;
                        }
                    }, 1500);
                }
            });
        } else {
            // Desktop: use web link
            linkElement.href = webUrl;
        }
    }
    
    // Setup LinkedIn link for name
    const nameLink = document.querySelector('.name-link');
    if (nameLink) {
        setupLinkedInLink(nameLink);
    }
    
    // Setup LinkedIn link for icon (wait for DOM to be ready)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const iconLink = document.querySelector('.linkedin-icon-link');
            if (iconLink) {
                setupLinkedInLink(iconLink);
            }
        });
    } else {
        const iconLink = document.querySelector('.linkedin-icon-link');
        if (iconLink) {
            setupLinkedInLink(iconLink);
        }
    }
})();
