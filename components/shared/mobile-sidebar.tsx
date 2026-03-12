'use client'

import { useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export function MobileSidebar({ open, onOpenChange, children, className }: MobileSidebarProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => onOpenChange(false), [onOpenChange])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)

    // Lock body scroll — use overflow:hidden (safe on iOS, no position:fixed issues)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[200] bg-black/50',
          'transition-opacity duration-300 ease-out',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed inset-y-0 right-0 z-[201] w-[min(300px,85vw)]',
          'bg-bg-secondary backdrop-blur-2xl border-l border-border-subtle',
          'shadow-[-8px_0_30px_rgba(0,0,0,0.2)]',
          'flex flex-col',
          'sidebar-panel',
          open ? 'sidebar-open' : 'sidebar-closed',
          !open && 'pointer-events-none',
          className
        )}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 z-10 p-1.5 rounded-md text-foreground/60 hover:text-foreground hover:bg-bg-tertiary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className={cn(
          'flex-1 overflow-y-auto pt-14 px-4 pb-6',
          'sidebar-content',
          open ? 'sidebar-content-open' : 'sidebar-content-closed'
        )}>
          {children}
        </div>
      </div>
    </>
  )
}
