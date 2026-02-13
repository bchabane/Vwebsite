// Simple in-memory rate limiter
// In production, use Redis or a more robust solution

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 3

export function checkRateLimit(identifier: string): { allowed: boolean; resetAt?: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  // Clean up expired entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetAt < now) {
        rateLimitMap.delete(key)
      }
    }
  }

  if (!entry || entry.resetAt < now) {
    // Create new entry or reset expired entry
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + WINDOW_MS,
    })
    return { allowed: true }
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, resetAt: entry.resetAt }
  }

  // Increment count
  entry.count++
  return { allowed: true }
}

