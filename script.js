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

    // Get the link element
    const link = document.querySelector('.name-link');
    
    if (link) {
        const webUrl = 'https://ch.linkedin.com/in/rebiloh';
        
        if (isMobileDevice()) {
            // Different deep link formats for iOS and Android
            let appUrl;
            if (isIOS()) {
                // iOS LinkedIn app deep link
                appUrl = 'linkedin://profile/rebiloh';
            } else if (isAndroid()) {
                // Android LinkedIn app deep link
                appUrl = 'linkedin://in/rebiloh';
            } else {
                // Fallback for other mobile devices
                appUrl = 'linkedin://in/rebiloh';
            }
            
            // Set href to web URL as fallback
            link.href = webUrl;
            
            // Override click behavior to try app first
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Try to open the app
                const startTime = Date.now();
                let appOpened = false;
                
                // Listen for page visibility change (app opened)
                const visibilityHandler = function() {
                    if (document.hidden) {
                        appOpened = true;
                    }
                };
                document.addEventListener('visibilitychange', visibilityHandler);
                
                // Try opening the app
                window.location = appUrl;
                
                // Fallback to web if app doesn't open
                setTimeout(function() {
                    document.removeEventListener('visibilitychange', visibilityHandler);
                    if (!appOpened) {
                        // Try alternative deep link format
                        if (isIOS()) {
                            window.location = 'linkedin://in/rebiloh';
                            setTimeout(function() {
                                if (!document.hidden) {
                                    window.location = webUrl;
                                }
                            }, 500);
                        } else {
                            window.location = webUrl;
                        }
                    }
                }, 800);
            });
        } else {
            // Desktop: use web link
            link.href = webUrl;
        }
    }
})();
