interface Stat {
  value: string
  label: string
}

interface StatsStripProps {
  stats: Stat[]
}

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

