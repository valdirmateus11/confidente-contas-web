import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
  className?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  children,
  className = '',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  ...buttonProps
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }

  const variantClasses = {
    // Primary: Navy background, White text, high contrast institutional authority
    primary:
      'bg-navy text-surface-white hover:bg-navy-dark active:bg-navy-deep shadow-sm hover:shadow-md',
    // Secondary: Cyan background, Navy text (ensures 7.5:1+ WCAG AAA contrast), high energy CTA
    secondary:
      'bg-cyan text-navy hover:bg-cyan-hover active:bg-[#008cc2] font-bold shadow-sm hover:shadow-md',
    // Outline: Border navy, text navy, elegant editorial secondary action
    outline:
      'border-2 border-navy text-navy hover:bg-navy hover:text-surface-white active:bg-navy-dark',
    // Ghost: Subtle, text navy, for in-nav links or text actions
    ghost:
      'text-navy hover:bg-surface-muted active:bg-slate-200',
    // White: White background on dark navy panels, crisp contrast
    white:
      'bg-surface-white text-navy hover:bg-surface-subtle active:bg-slate-100 shadow-md',
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me')
    const finalRel = rel || (isExternal && target === '_blank' ? 'noopener noreferrer' : undefined)

    return (
      <a
        href={href}
        target={target}
        rel={finalRel}
        className={combinedClasses}
        aria-disabled={buttonProps.disabled}
      >
        {leadingIcon && <span className="inline-flex shrink-0">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className="inline-flex shrink-0">{trailingIcon}</span>}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...buttonProps}>
      {leadingIcon && <span className="inline-flex shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="inline-flex shrink-0">{trailingIcon}</span>}
    </button>
  )
}
