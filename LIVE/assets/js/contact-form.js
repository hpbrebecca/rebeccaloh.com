// Contact Form Handler - Gen Z Editorial Style
(function() {
    'use strict';

    // Initialize EmailJS (you'll need to set up EmailJS service)
    // For now, we'll use a simple mailto fallback
    const EMAIL_RECIPIENT = 'rebecca.loh@outlook.com';

    // Character limits
    const CHAR_LIMITS = {
        firstName: 50,
        lastName: 50,
        email: 100,
        message: 1000
    };

    // Form elements
    let contactForm = null;
    let formFields = {};
    let charCounts = {};
    let currentLang = 'en';
    let captchaAnswer = null;

    // Initialize form when DOM is ready
    function initContactForm() {
        contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        // Get form fields
        formFields = {
            firstName: document.getElementById('firstName'),
            lastName: document.getElementById('lastName'),
            email: document.getElementById('email'),
            message: document.getElementById('message'),
            captcha: document.getElementById('captcha')
        };
        
        // Generate and display math captcha
        generateCaptcha();

        // Get character count elements
        charCounts = {
            firstName: document.getElementById('firstNameCount'),
            lastName: document.getElementById('lastNameCount'),
            email: document.getElementById('emailCount'),
            message: document.getElementById('messageCount')
        };

        // Add event listeners
        Object.keys(formFields).forEach(key => {
            const field = formFields[key];
            const countEl = charCounts[key];
            
            if (!field) return;
            
            // Skip captcha for character count (it has no char count element)
            if (key === 'captcha') {
                // Add validation listener for captcha
                field.addEventListener('input', () => {
                    validateField(key);
                });
            } else if (countEl) {
                // Character count update
                field.addEventListener('input', () => {
                    updateCharCount(key, field.value.length);
                    validateField(key);
                });

                // Initial character count
                updateCharCount(key, 0);
            }
            
            // Mouse tracking for glow effect (all fields)
            field.addEventListener('mousemove', (e) => {
                const rect = field.parentElement.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                field.parentElement.style.setProperty('--mouse-x', x + '%');
                field.parentElement.style.setProperty('--mouse-y', y + '%');
            });
        });

        // Form submission
        contactForm.addEventListener('submit', handleSubmit);

        // Update translations when language changes
        if (window.currentLang) {
            currentLang = window.currentLang;
        }
    }

    function updateCharCount(fieldName, length) {
        const countEl = charCounts[fieldName];
        const limit = CHAR_LIMITS[fieldName];
        if (countEl) {
            countEl.textContent = `${length}/${limit}`;
            // Change color when approaching limit
            if (length > limit * 0.9) {
                countEl.style.color = 'rgba(255, 182, 193, 0.9)';
            } else if (length > limit * 0.7) {
                countEl.style.color = 'rgba(255, 255, 255, 0.7)';
            } else {
                countEl.style.color = 'rgba(255, 255, 255, 0.4)';
            }
        }
    }

    // Generate simple math captcha
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
        const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
        captchaAnswer = num1 + num2;
        
        const questionEl = document.getElementById('captchaQuestion');
        if (questionEl) {
            questionEl.textContent = `${num1} + ${num2} = ?`;
        }
        
        // Clear captcha input
        if (formFields.captcha) {
            formFields.captcha.value = '';
        }
    }
    
    function validateField(fieldName) {
        const field = formFields[fieldName];
        if (!field) return false;

        const value = field.value.trim();
        let isValid = true;

        switch(fieldName) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                break;
            case 'firstName':
            case 'lastName':
                isValid = value.length > 0 && value.length <= CHAR_LIMITS[fieldName];
                break;
            case 'message':
                isValid = value.length > 0 && value.length <= CHAR_LIMITS[fieldName];
                break;
            case 'captcha':
                const captchaValue = parseInt(value);
                isValid = !isNaN(captchaValue) && captchaValue === captchaAnswer;
                break;
        }

        // Visual feedback
        if (value.length > 0) {
            if (isValid) {
                field.setCustomValidity('');
            } else {
                field.setCustomValidity('Invalid input');
            }
        }

        return isValid;
    }

    function validateForm() {
        let isValid = true;
        Object.keys(formFields).forEach(key => {
            if (key === 'captcha') {
                // Special validation for captcha
                const captchaValue = parseInt(formFields.captcha.value.trim());
                if (isNaN(captchaValue) || captchaValue !== captchaAnswer) {
                    isValid = false;
                    formFields.captcha.setCustomValidity('Incorrect answer. Please try again.');
                } else {
                    formFields.captcha.setCustomValidity('');
                }
            } else {
                if (!validateField(key) || !formFields[key].value.trim()) {
                    isValid = false;
                }
            }
        });
        return isValid;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) {
            showMessage('error', getTranslation('error'));
            return;
        }

        const submitBtn = document.getElementById('submitBtn');
        const formMessage = document.getElementById('formMessage');

        // Disable form
        submitBtn.disabled = true;
        submitBtn.classList.add('sending');
        formMessage.classList.remove('show');

        // Get form data
        const formData = {
            firstName: formFields.firstName.value.trim(),
            lastName: formFields.lastName.value.trim(),
            email: formFields.email.value.trim(),
            message: formFields.message.value.trim()
        };

        // Open email client with mailto link
        const subject = encodeURIComponent(`Contact Form: ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );
        const mailtoLink = `mailto:${EMAIL_RECIPIENT}?subject=${subject}&body=${body}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Show success message after a short delay
        setTimeout(() => {
            showMessage('success', getTranslation('success'));
            contactForm.reset();
            Object.keys(charCounts).forEach(key => {
                updateCharCount(key, 0);
            });
            // Generate new captcha after successful submit
            generateCaptcha();
            submitBtn.disabled = false;
            submitBtn.classList.remove('sending');
        }, 500);
    }

    async function sendViaEmailJS(formData) {
        // EmailJS configuration
        // You need to:
        // 1. Sign up at https://www.emailjs.com/
        // 2. Create an email service (Gmail, Outlook, etc.)
        // 3. Create an email template
        // 4. Get your Public Key, Service ID, and Template ID
        // 5. Replace the values below
        
        const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
        const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
        const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
        
        // Initialize EmailJS (only once)
        if (!window.emailjsInitialized) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
            window.emailjsInitialized = true;
        }
        
        // Prepare template parameters
        // NOTE: Your email address (rebecca.loh@outlook.com) should be set in the EmailJS template,
        // NOT passed here. This ensures it's never visible to users.
        const templateParams = {
            // Only send user-submitted data - your email is configured in EmailJS template
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
            reply_to: formData.email
        };
        
        // Send email
        // Your email address is configured server-side in EmailJS template settings
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );
        
        if (response.status !== 200) {
            throw new Error('EmailJS send failed');
        }
    }

    async function sendViaFormspree(formData) {
        // Formspree is a free service that doesn't require backend
        // Sign up at https://formspree.io/ to get your form ID
        // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
        
        const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Replace with your Formspree form ID
        const formspreeUrl = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
        
        const response = await fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                message: formData.message,
                _subject: `Contact Form: ${formData.firstName} ${formData.lastName}`
            })
        });
        
        if (!response.ok) {
            throw new Error('Formspree send failed');
        }
    }

    function showMessage(type, text) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type} show`;
            setTimeout(() => {
                formMessage.classList.remove('show');
            }, 5000);
        }
    }

    function getTranslation(key) {
        const translations = window.contactTranslations || {};
        const langTranslations = translations[currentLang] || translations['en'] || {};
        return langTranslations[key] || '';
    }

    function updateContactTranslations(lang) {
        currentLang = lang;
        const translations = window.contactTranslations || {};
        const langTranslations = translations[lang] || translations['en'] || {};

        // Update labels - ensure we extract string values, not objects
        const labels = langTranslations.labels || {};
        
        // Helper function to safely get string value
        function getLabelValue(labelObj) {
            if (typeof labelObj === 'string') {
                return labelObj;
            }
            if (typeof labelObj === 'object' && labelObj !== null) {
                return labelObj[lang] || labelObj['en'] || '';
            }
            return '';
        }
        
        const labelEls = {
            firstName: document.getElementById('labelFirstName'),
            lastName: document.getElementById('labelLastName'),
            email: document.getElementById('labelEmail'),
            message: document.getElementById('labelMessage'),
            captcha: document.getElementById('labelCaptcha'),
            submit: document.getElementById('submitText')
        };
        
        if (labelEls.firstName) {
            const text = getLabelValue(labels.firstName) || 'First Name';
            labelEls.firstName.textContent = text;
        }
        if (labelEls.lastName) {
            const text = getLabelValue(labels.lastName) || 'Last Name';
            labelEls.lastName.textContent = text;
        }
        if (labelEls.email) {
            const text = getLabelValue(labels.email) || 'E-Mail';
            labelEls.email.textContent = text;
        }
        if (labelEls.message) {
            const text = getLabelValue(labels.message) || 'Message';
            labelEls.message.textContent = text;
        }
        if (labelEls.captcha) {
            const text = getLabelValue(labels.captcha) || 'Answer';
            labelEls.captcha.textContent = text;
        }
        if (labelEls.submit) {
            const text = getLabelValue(labels.submit) || 'Send';
            labelEls.submit.textContent = text;
        }
    }

    // Expose functions globally
    window.updateContactTranslations = updateContactTranslations;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();

