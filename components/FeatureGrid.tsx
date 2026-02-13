import { ReactNode } from 'react'

interface Feature {
  title: string
  description: string
  icon?: ReactNode
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid grid-cols-1 ${gridClasses[columns]} gap-8 md:gap-10`}>
      {features.map((feature, index) => (
        <div key={index} className="group">
          {feature.icon && (
            <div className="mb-4 text-slate-600">
              {feature.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

