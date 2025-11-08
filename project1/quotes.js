ver// Quotes System with Multi-language Support
(function() {
    // Extract all quotes from the provided HTML structure
    const quotes = {
        en: [
            // Change
            "Be the change that you wish to see in the world. – Mahatma Gandhi",
            "Nothing endures but change. – Heraclitus",
            "Change your thoughts and you change your world. – Norman Vincent Peale",
            "Change before you have to. – Jack Welch",
            // Growth
            "Growth and comfort do not coexist. – Ginni Rometty",
            "We grow through what we go through. – Unknown",
            "Growth begins at the end of your comfort zone. – Neale Donald Walsch",
            "Personal growth is not about learning new things, but unlearning old limits. – Unknown",
            // Life
            "Life is either a daring adventure or nothing at all. – Helen Keller",
            "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
            "Life is short, and it's up to you to make it sweet. – Sarah Louise Delany",
            // Joy
            "Find joy in the ordinary. – Unknown",
            "Let your joy be in your journey, not in some distant goal. – Tim Cook",
            "Joy is the simplest form of gratitude. – Karl Barth",
            "The essence of joy is inner stillness. – Eckhart Tolle"
        ],
        de: [
            // Wandel
            "Sei die Veränderung, die du dir für die Welt wünschst. – Mahatma Gandhi",
            "Nichts bleibt, ausser der Veränderung. – Heraklit",
            "Ändere deine Gedanken – und du veränderst deine Welt. – Norman Vincent Peale",
            "Verändere dich, bevor du musst. – Jack Welch",
            // Wachstum
            "Wachstum und Komfort können nicht nebeneinander bestehen. – Ginni Rometty",
            "Wir wachsen an dem, was wir durchleben. – Unbekannt",
            "Wachstum beginnt dort, wo deine Komfortzone endet. – Neale Donald Walsch",
            "Persönliches Wachstum heisst, alte Grenzen loszulassen – nicht nur Neues zu lernen. – Unbekannt",
            // Leben
            "Das Leben ist entweder ein mutiges Abenteuer – oder gar nichts. – Helen Keller",
            "Lebe, als würdest du morgen sterben. Lerne, als würdest du ewig leben. – Mahatma Gandhi",
            "Das Leben ist kurz – du entscheidest, ob es süss wird. – Sarah Louise Delany",
            // Freude
            "Finde Freude im Alltäglichen – dort wohnt das Echte. – Unbekannt",
            "Finde deine Freude im Weg, nicht im Ziel. – Tim Cook",
            "Freude ist die reinste Form von Dankbarkeit. – Karl Barth",
            "Das Wesen der Freude ist stille Präsenz. – Eckhart Tolle"
        ],
        fr: [
            // Changement
            "Sois le changement que tu veux voir dans le monde. – Mahatma Gandhi",
            "Rien ne dure, sauf le changement. – Héraclite",
            "Change tes pensées et tu changeras ton monde. – Norman Vincent Peale",
            "Change avant d'y être forcé. – Jack Welch",
            // Croissance
            "La croissance et le confort ne coexistent pas. – Ginni Rometty",
            "Nous grandissons à travers ce que nous traversons. – Inconnu",
            "La croissance commence là où finit ta zone de confort. – Neale Donald Walsch",
            "Grandir, c'est moins apprendre du nouveau que se libérer de ses limites. – Inconnu",
            // Vie
            "La vie est soit une aventure audacieuse, soit rien du tout. – Helen Keller",
            "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours. – Mahatma Gandhi",
            "La vie est courte ; à toi de la rendre douce. – Sarah Louise Delany",
            // Joie
            "Trouve la joie dans les choses simples du quotidien. – Inconnu",
            "Trouve ta joie dans le chemin, pas seulement dans le but. – Tim Cook",
            "La joie est la forme la plus pure de la gratitude. – Karl Barth",
            "L'essence de la joie est une paix intérieure profonde. – Eckhart Tolle"
        ],
        zh: [
            // 改变
            "成为你希望在世界上看到的改变。—— 圣雄甘地",
            "唯有变化永恒。—— 赫拉克利特",
            "改变你的想法，你就能改变世界。—— 诺曼·文森特·皮尔",
            "在不得不改变之前先改变。—— 杰克·韦尔奇",
            // 成长
            "成长与舒适无法并存。—— 吉妮·罗梅蒂",
            "我们在经历中成长。—— 佚名",
            "成长始于舒适区的尽头。—— 尼尔·唐纳德·沃尔什",
            "个人成长不是学习新知识，而是放下旧的限制。—— 佚名",
            // 生活
            "生活要么是大胆的冒险，要么什么都不是。—— 海伦·凯勒",
            "像明天就会死一样生活，像永远活着一样学习。—— 圣雄甘地",
            "生命短暂，由你让它变得美好。—— 莎拉·露易丝·德拉尼",
            // 喜悦
            "在平凡中发现喜悦，那是真实的幸福。—— 佚名",
            "让你的喜悦存在于旅程之中，而非远方的终点。—— 蒂姆·库克",
            "喜悦是感恩最纯粹的表达。—— 卡尔·巴特",
            "喜悦的本质，是内在的宁静与觉知。—— 埃克哈特·托利"
        ]
    };

    // Name translations with location
    const nameTranslations = {
        de: "Rebecca Loh<br><span class='name-city'>Zürich, Schweiz</span>",
        en: "Rebecca Loh<br><span class='name-city'>Zurich, Switzerland</span>",
        fr: "Rebecca Loh<br><span class='name-city'>Zurich, Suisse</span>",
        zh: "羅碧嘉<br><span class='name-city'>蘇黎世，瑞士</span>"
    };
    
    // Language labels in their own language
    const languageLabels = {
        de: "Sprache",
        en: "Language",
        fr: "Langue",
        zh: "語言"
    };
    
    // Navigation labels in all languages
    const navigationLabels = {
        about: {
            de: "Über mich",
            en: "About",
            fr: "À propos",
            zh: "關於"
        },
        quotes: {
            de: "Zitate",
            en: "Quotes",
            fr: "Citations",
            zh: "引言"
        }
    };

        let currentLang = 'en';

    const quoteContainer = document.getElementById('quoteContainer');
    const nameLink = document.getElementById('nameLink');
    const languageSelector = document.getElementById('languageSelector');
    const languageTrigger = document.getElementById('languageTrigger');
    const languageText = document.getElementById('languageText');
    const languageDropdown = document.getElementById('languageDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const navLinks = document.querySelectorAll('.nav-text');

    // Update language display
    function updateLanguageDisplay(lang) {
        currentLang = lang;
        languageText.textContent = languageLabels[lang];
        nameLink.innerHTML = nameTranslations[lang];
        
        // Set lang attribute for proper font rendering
        nameLink.setAttribute('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Update active option
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
        
        // Update navigation labels
        navLinks.forEach(nav => {
            const langKey = nav.getAttribute('data-lang-key');
            if (langKey && navigationLabels[langKey]) {
                nav.textContent = navigationLabels[langKey][lang];
            }
        });
    }

    // Language switching
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateLanguageDisplay(lang);
            
            // Clear any pending close timeout
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
                dropdownTimeout = null;
            }
            
            // Close dropdown after a short delay
            setTimeout(() => {
                languageSelector.classList.remove('open');
            }, 100);
            
            // Immediately remove old quote and show same quote in new language
            // Access variables from outer scope (defined below)
            const quoteElement = window.currentQuoteElement;
            const quoteTimeout = window.currentQuoteTimeout;
            const quoteIndex = window.currentQuoteIndex;
            
            if (quoteTimeout) {
                clearTimeout(quoteTimeout);
                window.currentQuoteTimeout = null;
            }
            
            if (quoteElement) {
                // Remove immediately without fade out
                if (quoteElement.parentNode) {
                    quoteElement.parentNode.removeChild(quoteElement);
                }
                window.currentQuoteElement = null;
            }
            
            // Show same quote in new language (if we have a current quote index)
            if (quoteIndex !== null && quoteIndex !== undefined) {
                showQuoteByIndex(quoteIndex);
            } else {
                // No quote was showing, show a new one
                showNextQuote();
            }
        });
    });

    // Hover dropdown - only show when hovering over the text area
    let dropdownTimeout = null;
    
    // Show dropdown when hovering over the trigger (which contains the text)
    languageTrigger.addEventListener('mouseenter', () => {
        // Clear any pending close
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            dropdownTimeout = null;
        }
        languageSelector.classList.add('open');
    });

    // Close when leaving the trigger or dropdown
    languageTrigger.addEventListener('mouseleave', () => {
        // Add delay before closing so user can move to dropdown
        dropdownTimeout = setTimeout(() => {
            languageSelector.classList.remove('open');
            dropdownTimeout = null;
        }, 200); // 200ms delay
    });
    
    // Keep open when hovering over dropdown
    languageDropdown.addEventListener('mouseenter', () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            dropdownTimeout = null;
        }
        languageSelector.classList.add('open');
    });
    
    languageDropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            languageSelector.classList.remove('open');
            dropdownTimeout = null;
        }, 200);
    });

    // Initialize with default language
    updateLanguageDisplay('en');

    // Track the current quote (only one at a time) - declared in window scope for language switching
    window.currentQuoteElement = null;
    window.currentQuoteTimeout = null;
    window.currentQuoteIndex = null;
    
    // Get random centered position (relatively centered on screen)
    function getRandomPosition() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Center area: 40-60% of screen width and height (relatively centered)
        const centerAreaWidth = viewportWidth * 0.2; // 20% of screen width around center
        const centerAreaHeight = viewportHeight * 0.2; // 20% of screen height around center
        
        // Random position within center area
        const centerX = viewportWidth / 2;
        const centerY = viewportHeight / 2;
        
        const x = centerX + (Math.random() - 0.5) * centerAreaWidth;
        const y = centerY + (Math.random() - 0.5) * centerAreaHeight;
        
        return { x: x, y: y };
    }

    function showNextQuote() {
        // Get quotes for current language
        const langQuotes = quotes[currentLang];
        
        // Get random quote index
        const randomIndex = Math.floor(Math.random() * langQuotes.length);

        // Show quote by index in a random position
        showQuoteByIndex(randomIndex);
    }

    // Show quote by index in one of the 4 random sections
    function showQuoteByIndex(index) {
        // Clear any existing timeout
        if (window.currentQuoteTimeout) {
            clearTimeout(window.currentQuoteTimeout);
            window.currentQuoteTimeout = null;
        }

        // Remove existing quote if any
        if (window.currentQuoteElement) {
            window.currentQuoteElement.classList.remove('visible');
            window.currentQuoteElement.classList.add('fadeOut');
            setTimeout(() => {
                if (window.currentQuoteElement.parentNode) {
                    window.currentQuoteElement.parentNode.removeChild(window.currentQuoteElement);
                }
                window.currentQuoteElement = null;
            }, 2000);
        }

        // Get quotes for current language
        const langQuotes = quotes[currentLang];
        
        // Ensure index is valid
        if (index < 0 || index >= langQuotes.length) {
            index = 0; // Fallback to first quote
        }

        const quoteText = langQuotes[index];
        window.currentQuoteIndex = index; // Store current index

        // Format quote: split at dash/em-dash, put blank line, then dash + author
        let formattedQuote = quoteText;
        // Match various dash types: – (en dash), — (em dash), - (hyphen), —— (Chinese dash)
        const dashPattern = /[–—\-]|——/;
        const dashMatch = quoteText.match(dashPattern);
        
        if (dashMatch) {
            const dashIndex = quoteText.indexOf(dashMatch[0]);
            const quotePart = quoteText.substring(0, dashIndex).trim(); // Quote ends before dash
            const dashAndAuthor = quoteText.substring(dashIndex).trim(); // Dash + author together
            // Blank line (small spacing) then dash + author (dash comes after blank line)
            formattedQuote = quotePart + '<br><br class="quote-blank-line"><span class="quote-author">' + dashAndAuthor + '</span>';
        }

            // Create quote element - centered in viewport like project2
            const quoteEl = document.createElement('div');
            quoteEl.className = 'quote';
            quoteEl.setAttribute('lang', currentLang); // Set lang for proper font rendering
            quoteEl.innerHTML = formattedQuote; // Use innerHTML to support <br> and <span>
            quoteEl.dataset.quoteIndex = index; // Store quote index for tracking
            
            // Center in viewport (like project2)
            quoteEl.style.left = '50%';
            quoteEl.style.top = '50%';
        
        // Append to container
        quoteContainer.appendChild(quoteEl);

        // Store reference
        window.currentQuoteElement = quoteEl;

        // Trigger fade in
        setTimeout(() => {
            quoteEl.classList.add('visible');
        }, 10);

        // Show duration: 8-12 seconds
        const showDuration = 8000 + Math.random() * 4000;

        // Start fading out before next quote appears (overlap)
        const fadeOutDelay = showDuration - 2000; // Start fade out 2s before next quote

        window.currentQuoteTimeout = setTimeout(() => {
            quoteEl.classList.remove('visible');
            quoteEl.classList.add('fadeOut');

            // Remove element after fade out
            setTimeout(() => {
                if (quoteEl.parentNode) {
                    quoteEl.parentNode.removeChild(quoteEl);
                }
                window.currentQuoteElement = null;
                window.currentQuoteIndex = null;
                
                // Show next quote in a random section
                showNextQuote();
            }, 2000);
        }, fadeOutDelay);
    }

    // Start showing quotes after page load - show only one quote at a time
    setTimeout(() => {
        // Show first quote
        showNextQuote();
    }, 3000); // Start after 3 seconds

})();

