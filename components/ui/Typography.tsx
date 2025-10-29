// components/ui/Typography.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-serif font-bold text-balance', {
  variants: {
    level: {
      h1: 'text-display-md md:text-display-lg',
      h2: 'text-heading-xl md:text-display-sm',
      h3: 'text-heading-lg md:text-heading-xl',
      h4: 'text-heading-md md:text-heading-lg',
      h5: 'text-heading-sm md:text-heading-md',
      h6: 'text-body-lg md:text-heading-sm',
    },
    color: {
      default: 'text-neutral-brown',
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      gradient: 'text-gradient-primary',
    },
  },
  defaultVariants: {
    level: 'h2',
    color: 'default',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, as, children, ...props }, ref) => {
    const Component = as || level || 'h2';
    
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level: level || as, color, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

// Text Component
const textVariants = cva('font-sans', {
  variants: {
    size: {
      sm: 'text-body-sm',
      md: 'text-body-md',
      lg: 'text-body-lg',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-neutral-brown',
      muted: 'text-neutral-brown/70',
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      error: 'text-accent-red',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    color: 'default',
    align: 'left',
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'label';
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, align, as = 'p', children, ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, color, align, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

// Handwritten Component
interface HandwrittenProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Handwritten = React.forwardRef<HTMLSpanElement, HandwrittenProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-xl',
      md: 'text-2xl md:text-3xl',
      lg: 'text-3xl md:text-4xl',
      xl: 'text-4xl md:text-5xl',
    };
    
    return (
      <span
        ref={ref}
        className={cn(
          'font-handwritten text-secondary-500',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Handwritten.displayName = 'Handwritten';