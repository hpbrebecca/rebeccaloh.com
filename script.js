// Detect mobile devices and set LinkedIn link accordingly
(function() {
    // Function to detect mobile devices
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && window.innerHeight <= 1024);
    }

    // Get the link element
    const link = document.querySelector('.name-link');
    
    if (link) {
        // Set the appropriate link based on device type
        if (isMobileDevice()) {
            // Use LinkedIn app deep link for mobile
            // Format: linkedin://in/[username]
            const appUrl = 'linkedin://in/rebiloh';
            const webUrl = 'https://ch.linkedin.com/in/rebiloh';
            
            // Set initial href to deep link
            link.href = appUrl;
            
            // Add click handler with intelligent fallback
            link.addEventListener('click', function(e) {
                let appOpened = false;
                
                // Track if page becomes hidden (app likely opened)
                const handleVisibilityChange = function() {
                    if (document.hidden) {
                        appOpened = true;
                    }
                };
                document.addEventListener('visibilitychange', handleVisibilityChange);
                
                // Try to open the app
                window.location.href = appUrl;
                
                // Fallback: if page is still visible after delay, redirect to web
                setTimeout(function() {
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    if (!appOpened && !document.hidden) {
                        window.location.href = webUrl;
                    }
                }, 1000);
            });
        } else {
            // Use web link for desktop
            link.href = 'https://ch.linkedin.com/in/rebiloh';
        }
    }
})();
