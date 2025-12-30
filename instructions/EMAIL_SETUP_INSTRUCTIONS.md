# Email Setup Instructions for Contact Form

The contact form needs to be configured to send emails directly without opening the user's email client. You have two options:

## Option 1: EmailJS (Recommended)

EmailJS is a free service that allows you to send emails directly from the browser without a backend.

### Setup Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (allows 200 emails/month)

2. **Add Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Note:** For Outlook, you'll need to use SMTP service

3. **Create Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - **IMPORTANT:** In the "To Email" field, enter your email directly: `rebecca.loh@outlook.com`
     - Do NOT use `{{to_email}}` variable - this keeps your email hidden from users
   - Use this template structure:
     ```
     To: rebecca.loh@outlook.com  (hardcoded, not a variable)
     From: {{from_name}} <{{from_email}}>
     Reply-To: {{reply_to}}
     Subject: Contact Form: {{from_name}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - **Security Note:** Your email address is stored securely in EmailJS's template settings and is never exposed to website visitors

4. **Get Your Credentials**
   - Go to "Account" → "General"
   - Copy your **Public Key**
   - Go back to "Email Services" and copy your **Service ID**
   - Go to "Email Templates" and copy your **Template ID**

5. **Update contact-form.js**
   - Open `contact-form.js`
   - Find these lines (around line 160):
     ```javascript
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     ```
   - Replace with your actual values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'service_abc123';
     const EMAILJS_TEMPLATE_ID = 'template_xyz789';
     const EMAILJS_PUBLIC_KEY = 'your-public-key-here';
     ```

## Option 2: Formspree (Alternative)

Formspree is another free service that's simpler but less customizable.

### Setup Steps:

1. **Sign up for Formspree**
   - Go to https://formspree.io/
   - Create a free account (allows 50 submissions/month)

2. **Create a New Form**
   - Click "New Form"
   - Enter your email address: `rebecca.loh@outlook.com`
   - Formspree will give you a form ID (e.g., `abc123xyz`)

3. **Update contact-form.js**
   - Open `contact-form.js`
   - Find this line (around line 200):
     ```javascript
     const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';
     ```
   - Replace with your actual form ID:
     ```javascript
     const FORMSPREE_FORM_ID = 'abc123xyz';
     ```

4. **Update the code to use Formspree**
   - In `contact-form.js`, change the `handleSubmit` function to use Formspree first:
     ```javascript
     try {
         // Use Formspree first
         await sendViaFormspree(formData);
     } catch (error) {
         // Fallback to EmailJS if Formspree fails
         if (typeof emailjs !== 'undefined') {
             await sendViaEmailJS(formData);
         } else {
             throw error;
         }
     }
     ```

## Testing

After setup:
1. Fill out the contact form on your website
2. Click "Send"
3. Check your email inbox (`rebecca.loh@outlook.com`)
4. The email should arrive without opening any email client

## Security Notes

- **EmailJS:** Your public key is safe to expose in client-side code
- **Formspree:** Your form ID is safe to expose, but consider upgrading to a paid plan for better security features
- Both services handle spam protection automatically
- Your actual email address (`rebecca.loh@outlook.com`) is never exposed to users

## Troubleshooting

- **EmailJS:** Check browser console for errors, verify all IDs are correct
- **Formspree:** Check Formspree dashboard for submission logs
- **Both:** Make sure you've verified your email address with the service


