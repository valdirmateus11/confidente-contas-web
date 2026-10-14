import React from 'react'

export interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  inverted = false,
  className = '',
  titleAs: TitleComponent = 'h2',
}) => {
  const isCentered = align === 'center'

  return (
    <div
      className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCentered ? 'justify-center' : ''}`}>
          <span
            className={`text-xs uppercase tracking-widest font-heading font-bold px-3 py-1 rounded-full ${
              inverted
                ? 'bg-cyan/15 text-cyan border border-cyan/30'
                : 'bg-navy/5 text-navy border border-navy/15'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <TitleComponent
        className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight leading-tight ${
          inverted ? 'text-surface-white' : 'text-navy'
        }`}
      >
        {title}
      </TitleComponent>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? 'text-slate-300' : 'text-text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
