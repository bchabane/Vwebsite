import { ReactNode } from 'react'

interface UseCaseSectionProps {
  title: string
  description: string | ReactNode
  items: string[]
  reverse?: boolean
}

export default function UseCaseSection({
  title,
  description,
  items,
  reverse = false
}: UseCaseSectionProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          {title}
        </h3>
        <div className="text-lg text-slate-700 mb-6 leading-relaxed">
          {description}
        </div>
      </div>

      <div className="bg-slate-50 p-8">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

