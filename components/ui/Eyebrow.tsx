import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  /** Use 'dark' on Forest Green section backgrounds */
  variant?: 'light' | 'dark'
  className?: string
}

/** DM Mono, 11px, all-caps, 0.2em letter-spacing. */
export function Eyebrow({ children, variant = 'light', className }: EyebrowProps) {
  return (
    <p className={cn(variant === 'dark' ? 'eyebrow-dark' : 'eyebrow', className)}>
      {children}
    </p>
  )
}
