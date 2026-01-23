import React, { useState } from 'react';
import styles from './styles.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeearjak';

export default function IntegrationInquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          jobTitle: formData.jobTitle,
          message: formData.message || 'No additional message provided.',
          _subject: `Integration Partnership Inquiry from ${formData.company}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', jobTitle: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3>🤝 Build an Integration with IQM</h3>
          <p>Partner with us to expand our ecosystem</p>
          <button className={styles.ctaButton} onClick={() => setIsOpen(true)}>
            Become a Partner
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {submitted ? (
              <div className={styles.successMessage}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Thank you!</h3>
                <p>Your inquiry has been submitted. We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h2>Partner with IQM</h2>
                <p className={styles.modalDescription}>
                  Tell us about your company and how you'd like to integrate with IQM.
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="jobTitle">Job Title *</label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        placeholder="Product Manager"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell us about your integration idea</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the integration you'd like to build or explore..."
                    />
                  </div>

                  {error && <p className={styles.errorMessage}>{error}</p>}

                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
