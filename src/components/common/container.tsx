import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clsx('container px-16 py-10', className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
