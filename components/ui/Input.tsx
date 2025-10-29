// components/ui/Input.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-xl border transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-brown/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-neutral-brown/20 bg-white text-neutral-brown focus-visible:ring-primary',
        outlined:
          'border-2 border-primary bg-transparent text-neutral-brown focus-visible:ring-primary',
        filled:
          'border-transparent bg-neutral-cream text-neutral-brown focus-visible:ring-primary',
      },
      inputSize: {
        sm: 'h-9 px-3 py-2 text-sm',
        md: 'h-11 px-4 py-2 text-base',
        lg: 'h-13 px-5 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      type,
      label,
      error,
      helperText,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-brown mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant, inputSize, className }),
            error && 'border-accent-red focus-visible:ring-accent-red'
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-accent-red">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-neutral-brown/60">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };