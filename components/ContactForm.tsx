'use client'

import { useState, FormEvent } from 'react'
import Button from './ui/Button'
import { trackFormSubmit } from '@/lib/analytics'

interface FormData {
  fullName: string
  company: string
  role: string
  email: string
  assetType: string
  portfolioSize: string
  message: string
  honeypot: string // Anti-spam field
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    assetType: '',
    portfolioSize: '',
    message: '',
    honeypot: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Role is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.assetType) {
      newErrors.assetType = 'Please select an asset type'
    }

    if (!formData.portfolioSize) {
      newErrors.portfolioSize = 'Please select a portfolio size'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      console.log('Bot detected')
      return
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Import server action dynamically
      const { submitDemoRequest } = await import('@/app/book-a-demo/actions')
      const result = await submitDemoRequest(formData)

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitStatus('success')
      trackFormSubmit('book_a_demo')

      // Reset form
      setFormData({
        fullName: '',
        company: '',
        role: '',
        email: '',
        assetType: '',
        portfolioSize: '',
        message: '',
        honeypot: '',
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 border transition-colors
    ${errors[fieldName] 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
      : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
    }
    focus:outline-none focus:ring-2
  `

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-900 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses('fullName')}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses('company')}
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && (
            <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.company}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-900 mb-2">
            Role <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClasses('role')}
            aria-required="true"
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? 'role-error' : undefined}
          />
          {errors.role && (
            <p id="role-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.role}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Asset Type */}
        <div>
          <label htmlFor="assetType" className="block text-sm font-medium text-slate-900 mb-2">
            Asset Type <span className="text-red-500">*</span>
          </label>
          <select
            id="assetType"
            name="assetType"
            value={formData.assetType}
            onChange={handleChange}
            className={inputClasses('assetType')}
            aria-required="true"
            aria-invalid={!!errors.assetType}
            aria-describedby={errors.assetType ? 'assetType-error' : undefined}
          >
            <option value="">Select asset type</option>
            <option value="Wind">Wind</option>
            <option value="Solar">Solar</option>
            <option value="Storage">Energy Storage</option>
            <option value="Mixed">Mixed Portfolio</option>
          </select>
          {errors.assetType && (
            <p id="assetType-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.assetType}
            </p>
          )}
        </div>

        {/* Portfolio Size */}
        <div>
          <label htmlFor="portfolioSize" className="block text-sm font-medium text-slate-900 mb-2">
            Portfolio Size (MW) <span className="text-red-500">*</span>
          </label>
          <select
            id="portfolioSize"
            name="portfolioSize"
            value={formData.portfolioSize}
            onChange={handleChange}
            className={inputClasses('portfolioSize')}
            aria-required="true"
            aria-invalid={!!errors.portfolioSize}
            aria-describedby={errors.portfolioSize ? 'portfolioSize-error' : undefined}
          >
            <option value="">Select portfolio size</option>
            <option value="<100">Less than 100 MW</option>
            <option value="100-500">100-500 MW</option>
            <option value="500-1000">500-1,000 MW</option>
            <option value="1000-5000">1,000-5,000 MW</option>
            <option value=">5000">More than 5,000 MW</option>
          </select>
          {errors.portfolioSize && (
            <p id="portfolioSize-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.portfolioSize}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClasses('message')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200" role="alert">
          <p className="text-green-800 font-medium">
            Thank you! Your demo request has been submitted successfully. We'll be in touch soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200" role="alert">
          <p className="text-red-800 font-medium">
            {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Submitting...' : 'Request Demo'}
      </Button>
    </form>
  )
}


