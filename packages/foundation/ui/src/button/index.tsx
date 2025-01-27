import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

const buttonStyles = cva(
  [
    'relative select-none rounded-xl font-sans antialiased',
    'inline-flex items-center justify-center gap-2',
    'transition-transform active:scale-95',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-none focus-visible:ring-2',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-gradient-to-br from-indigo-500 to-purple-600',
          'text-white shadow-lg shadow-indigo-500/25',
          'hover:from-indigo-600 hover:to-purple-700',
          'focus-visible:ring-indigo-500',
        ],
        secondary: [
          'bg-gradient-to-br from-neutral-100 to-neutral-200',
          'text-neutral-900 border border-neutral-200',
          'hover:from-neutral-200 hover:to-neutral-300',
          'focus-visible:ring-neutral-400',
        ],
        danger: [
          'bg-gradient-to-br from-rose-500 to-red-600',
          'text-white shadow-lg shadow-rose-500/25',
          'hover:from-rose-600 hover:to-red-700',
          'focus-visible:ring-rose-500',
        ],
        ghost: [
          'hover:bg-neutral-100',
          'text-neutral-700',
          'focus-visible:ring-neutral-400',
        ],
      },
      dimension: {
        compact: 'h-8 px-3 text-xs',
        default: 'h-11 px-5 text-sm',
        spacious: 'h-14 px-7 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      dimension: 'default',
      fullWidth: false,
    },
  }
)

interface Props
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonStyles> {
  isProcessing?: boolean
}

export const ActionButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      intent,
      dimension,
      fullWidth,
      isProcessing,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isProcessing}
        className={buttonStyles({ intent, dimension, fullWidth, className })}
        {...props}
      >
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        )}
        <span className={isProcessing ? 'invisible' : 'visible'}>
          {children}
        </span>
      </button>
    )
  }
)

ActionButton.displayName = 'ActionButton' 