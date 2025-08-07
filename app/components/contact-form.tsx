'use client';

import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get form endpoint from environment variables
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID 
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
    : 'https://formspree.io/f/xwpkgqkd'; // fallback

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'marvinchen@princeton.edu';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
      console.log('Form ID:', formId); // Debug log
      
      if (!formId) {
        console.error('Formspree form ID not found');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Using Formspree - much simpler than nodemailer!
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      console.log('Response status:', response.status); // Debug log

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Formspree error:', response.status);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-gradient-to-r from-accent-emerald/10 to-accent-blue/10 rounded-2xl p-8 border border-accent-emerald/20 text-center">
        <div className="bg-accent-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaPaperPlane className="w-8 h-8 text-accent-emerald" />
        </div>
        <h3 className="text-2xl font-bold text-accent-emerald mb-2">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Thank you for reaching out! I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-accent-blue hover:text-accent-blue/80 transition-colors duration-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, collaborations, or just chatting about technology and innovation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaUser className="inline w-4 h-4 mr-2" />
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors duration-300"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaEnvelope className="inline w-4 h-4 mr-2" />
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors duration-300"
            placeholder="What would you like to discuss?"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <FaComment className="inline w-4 h-4 mr-2" />
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors duration-300 resize-vertical"
            placeholder="Tell me about your project, idea, or just say hello!"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Error State */}
                {/* Error State */}
        {submitStatus === 'error' && (
          <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 mb-2">
              There was an issue submitting your message.
            </p>
            <button
              onClick={() => {
                const mailtoLink = `mailto:marvinchen@princeton.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                  `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
                )}`;
                window.location.href = mailtoLink;
              }}
              className="text-accent-blue hover:text-accent-blue/80 transition-colors duration-300 underline"
            >
              Click here to send via email instead
            </button>
          </div>
        )}
      </form>

      {/* Alternative Contact */}
      <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Prefer email? Reach me directly at{' '}
          <a 
            href={`mailto:${contactEmail}`}
            className="text-accent-blue hover:text-accent-blue/80 transition-colors duration-300"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
