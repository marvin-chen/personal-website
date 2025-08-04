# Contact Form Setup Guide

## Setting up Formspree for Direct Email Sending

Your contact form is currently configured to use Formspree, a free service that allows forms to send emails directly without opening the mail application.

### Setup Steps:

1. **Go to Formspree**: Visit [https://formspree.io](https://formspree.io)

2. **Sign Up**: Create a free account (allows 50 submissions per month)

3. **Create a Form**: 
   - Click "New Form"
   - Enter your email address (where you want to receive messages)
   - Give your form a name (e.g., "Personal Website Contact")

4. **Get Your Form ID**: 
   - After creating the form, you'll get a form ID that looks like: `xwpkgqkd`
   - Copy this ID

5. **Update Your Environment Variables**:
   - Open the `.env.local` file in your project root
   - Replace `xwpkgqkd` with your actual form ID
   - Update the email address if needed

6. **Test the Form**: 
   - Start your development server: `npm run dev`
   - Go to your website and test the contact form
   - You should receive the test email at your specified address

### Alternative Services:

If you prefer other services, here are alternatives:

- **EmailJS**: Client-side email sending (no backend needed)
- **Netlify Forms**: Built-in forms if hosting on Netlify
- **Vercel Contact Forms**: If deploying to Vercel
- **Custom Backend**: Using SendGrid, NodeMailer, etc.

### Current Configuration:

- Form Endpoint: `https://formspree.io/f/xwpkgqkd`
- Contact Email: `marvinchen@princeton.edu`
- Fallback: Opens mail application if form submission fails

The form will now send emails directly from your website without opening the user's mail application!
