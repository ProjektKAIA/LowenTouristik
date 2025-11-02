// components/forms/ContactForm/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { ContactFormProps, ContactFormData, ContactFormState } from './ContactForm.types';

export function ContactForm({ className = '' }: ContactFormProps) {
  const t = useTranslations('contactPage.form');
  
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSuccess: false, isError: false });

    try {
      // TODO: Implement API endpoint for form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, isSuccess: true, isError: false });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setFormState({ isSubmitting: false, isSuccess: false, isError: true });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-brown mb-2">
            {t('firstName')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-brown mb-2">
            {t('lastName')} <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-brown mb-2">
          {t('email')} <span className="text-accent-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-brown mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-neutral-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-brown mb-2">
          {t('message')} <span className="text-accent-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-neutral-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />
      </div>

      {/* Status Messages */}
      {formState.isSuccess && (
        <div className="p-4 bg-accent-green/10 border border-accent-green rounded-lg text-accent-green">
          {t('success')}
        </div>
      )}

      {formState.isError && (
        <div className="p-4 bg-accent-red/10 border border-accent-red rounded-lg text-accent-red">
          {t('error')}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState.isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}