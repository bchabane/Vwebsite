'use server'

import { prisma } from '@/lib/prisma'
import { checkRateLimit } from '@/lib/rate-limit'
import { headers } from 'next/headers'

interface FormSubmission {
  fullName: string
  company: string
  role: string
  email: string
  assetType: string
  portfolioSize: string
  message?: string
  honeypot: string
}

export async function submitDemoRequest(data: FormSubmission) {
  try {
    // Honeypot check
    if (data.honeypot) {
      console.log('Honeypot triggered - bot detected')
      return { success: false, error: 'Invalid submission' }
    }

    // Get IP address for rate limiting
    const headersList = headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip)
    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetAt || 0)
      return {
        success: false,
        error: `Too many submissions. Please try again after ${resetDate.toLocaleTimeString()}.`,
      }
    }

    // Validate required fields
    if (!data.fullName || !data.company || !data.role || !data.email || !data.assetType || !data.portfolioSize) {
      return { success: false, error: 'All required fields must be filled out' }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: 'Invalid email address' }
    }

    // Save to database
    await prisma.submission.create({
      data: {
        fullName: data.fullName,
        company: data.company,
        role: data.role,
        email: data.email,
        assetType: data.assetType,
        portfolioSize: data.portfolioSize,
        message: data.message || '',
        ipAddress: ip,
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Error submitting demo request:', error)
    return { success: false, error: 'An error occurred. Please try again later.' }
  }
}

