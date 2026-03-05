import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, CheckCircle, AlertCircle, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.message = 'Please enter a valid phone number (min 10 digits)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const emailSubject = `FansFollow Support: ${formData.subject}`
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone || 'Not provided'}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`

      window.location.href = `mailto:support@fansfollow.me?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 border-2 border-gray-700 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send Us a Message</h3>
        <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-fade-in">
          <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
          <div>
            <p className="text-green-500 font-semibold">Message sent successfully!</p>
            <p className="text-green-400 text-sm">Your email client has been opened. We'll respond as soon as possible.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500 rounded-xl flex items-center gap-3 animate-fade-in">
          <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
          <div>
            <p className="text-red-500 font-semibold">Submission failed</p>
            <p className="text-red-400 text-sm">Please try again or contact us directly at support@fansfollow.me</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-900/50 border-2 ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[48px]`}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={14} /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-900/50 border-2 ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[48px]`}
              placeholder="your.email@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle size={14} /> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-white font-semibold mb-2">
            Phone Number <span className="text-gray-400 text-sm font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[48px]"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-white font-semibold mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-900/50 border-2 ${
              errors.subject ? 'border-red-500' : 'border-gray-700'
            } rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[48px]`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Creator Support">Creator Support</option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Payment Question">Payment Question</option>
            <option value="Account Help">Account Help</option>
            <option value="Partnership">Partnership Opportunity</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={14} /> {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-gray-900/50 border-2 ${
              errors.message ? 'border-red-500' : 'border-gray-700'
            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none`}
            placeholder="Tell us how we can help you..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={14} /> {errors.message}
            </p>
          )}
          <p className="mt-1 text-gray-400 text-sm">
            {formData.message.length} characters (minimum 10)
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-[56px]"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>

        <p className="text-gray-400 text-sm text-center">
          Your message will open in your email client for submission.
        </p>
      </form>
    </div>
  )
}

export default ContactForm
