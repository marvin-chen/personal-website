# Email Setup Guide for Contact Form

Your contact form is now set up to send emails directly from your website! Here's how to configure it:

## Option 1: Gmail (Recommended for personal use)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google," select "2-Step Verification"
3. Follow the setup process

### Step 2: Generate App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google," select "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Enter "Portfolio Website" as the device name
5. Copy the generated 16-character password

### Step 3: Update Environment Variables
1. Open `.env.local` file
2. Replace the placeholders:
   ```
   EMAIL_USER=your-actual-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Step 4: Test the Contact Form
1. Start your development server: `pnpm dev`
2. Navigate to your website
3. Fill out and submit the contact form
4. Check your Gmail inbox for the message

## Option 2: Alternative Email Services

If you prefer not to use Gmail, you can modify the nodemailer configuration:

### SendGrid
```javascript
const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Security Notes

1. **Never commit your actual email credentials to Git**
2. The `.env.local` file is already in `.gitignore`
3. For production deployment, set environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Railway: Project → Variables

## Troubleshooting

### "Invalid login" error
- Make sure you're using an app password, not your regular Gmail password
- Verify 2-factor authentication is enabled

### "Connection timeout" error
- Check your internet connection
- Some networks block SMTP ports

### Emails not arriving
- Check spam/junk folders
- Verify the recipient email address
- Check the console for error messages

## Current Configuration

The contact form is configured to:
- ✅ Validate form input
- ✅ Send emails via nodemailer
- ✅ Handle errors gracefully
- ✅ Provide user feedback
- ✅ Include sender's email for easy replies

Your contact form will send emails to: `marvinchen@princeton.edu`

To change the recipient email, edit the `to` field in `/app/api/contact/route.ts`.
