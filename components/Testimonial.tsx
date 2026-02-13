interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
      <div className="text-accent-600 mb-6">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <blockquote className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      <div className="border-t border-slate-200 pt-6">
        <div className="font-semibold text-slate-900">{author}</div>
        <div className="text-sm text-slate-600">{role}, {company}</div>
      </div>
    </div>
  )
}

