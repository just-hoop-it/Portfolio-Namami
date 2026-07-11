import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactInfo, contactConfig } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Determine if the key is configured
  const isKeyConfigured = 
    contactConfig.web3formsAccessKey && 
    contactConfig.web3formsAccessKey !== 'YOUR_ACCESS_KEY_HERE' && 
    contactConfig.web3formsAccessKey.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // If key is not configured, trigger the smart mailto fallback
    if (!isKeyConfigured) {
      triggerMailtoFallback();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactConfig.web3formsAccessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Contact] Message from ${formData.name}`,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again or contact me directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message due to a network issue. Please try again.');
    }
  };

  const triggerMailtoFallback = () => {
    const subjectLine = encodeURIComponent(`[Portfolio] Message from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Open in mail app
    window.location.href = mailtoUrl;
    
    // Set success state to clear form and confirm action
    setStatus('success');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-12 max-w-2xl mx-auto w-full"
      id="contact-section-container"
    >
      {/* Title block */}
      <div className="space-y-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-stone-900">
          Communicate with me
        </h1>
        <p className="text-stone-600 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
          Whether you have a question about my projects, or simply want to say hello — feel free to drop a message!</p>
      </div>

      {/* Contact Form Card */}
      <div className="bg-[#FDFCF7] border border-stone-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center space-y-4"
            id="submission-success-card"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-[#606C38]/10 flex items-center justify-center text-[#606C38]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-stone-900">Message Sent!</h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              {!isKeyConfigured 
                ? "I've prepared an email draft in your default email client. Please review and click send there!"
                : "Thank you for reaching out! Your message has been sent successfully. I will read it and get back to you soon."}
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-5 py-2.5 bg-[#606C38] hover:bg-[#4F592E] text-stone-100 text-sm font-medium rounded-xl transition-colors cursor-pointer"
              id="send-another-btn"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name-input" className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="E.g., Nikola Tesla"
                  className="w-full px-4 py-3 bg-white border border-stone-200/80 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#606C38]/20 focus:border-[#606C38] transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email-input" className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white border border-stone-200/80 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#606C38]/20 focus:border-[#606C38] transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message-input" className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message-input"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your idea, question, or suggestions..."
                className="w-full px-4 py-3 bg-white border border-stone-200/80 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#606C38]/20 focus:border-[#606C38] transition-all resize-y"
              />
            </div>

            {/* Error messages */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800"
                id="form-error-display"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <span className="text-stone-400 text-[11px] font-mono">
                * Indicates required fields
              </span>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#606C38] hover:bg-[#4F592E] disabled:bg-[#606C38]/60 text-stone-100 text-sm font-medium rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
                id="submit-contact-btn"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
