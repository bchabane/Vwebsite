import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'large' | 'narrow'
}

export default function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',
    large: 'max-w-8xl',
    narrow: 'max-w-4xl',
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
}

