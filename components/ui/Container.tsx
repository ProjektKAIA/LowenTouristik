// components/ui/Container.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva('w-full mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      default: 'max-w-[1400px]',
      narrow: 'max-w-[960px]',
      wide: 'max-w-[1600px]',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4 sm:px-6',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12',
    },
  },
  defaultVariants: {
    size: 'default',
    padding: 'md',
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

// Section Component with padding
const sectionVariants = cva('w-full', {
  variants: {
    padding: {
      none: 'py-0',
      sm: 'py-12 md:py-16 lg:py-20',
      md: 'py-16 md:py-24 lg:py-32',
      lg: 'py-20 md:py-32 lg:py-40',
    },
    background: {
      default: 'bg-neutral-cream',
      white: 'bg-white',
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      gradient: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white',
    },
  },
  defaultVariants: {
    padding: 'md',
    background: 'default',
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
  containerPadding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      padding,
      background,
      containerSize = 'default',
      containerPadding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, background, className }))}
        {...props}
      >
        <Container size={containerSize} padding={containerPadding}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';