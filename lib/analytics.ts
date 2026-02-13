// Analytics tracking stub
// Replace with your analytics provider (Google Analytics, Plausible, etc.)

type EventProperties = {
  [key: string]: string | number | boolean
}

export function track(eventName: string, properties?: EventProperties): void {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', eventName, properties)
  }

  // Add your analytics provider here
  // Example for Google Analytics:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, properties)
  // }

  // Example for Plausible:
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible(eventName, { props: properties })
  // }
}

export function trackCTAClick(ctaName: string, location: string): void {
  track('cta_click', {
    cta_name: ctaName,
    location,
  })
}

export function trackFormSubmit(formName: string): void {
  track('form_submit', {
    form_name: formName,
  })
}

export function trackPageView(url: string): void {
  track('page_view', {
    url,
  })
}

