import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

const variants = {
  dark: 'card-dark text-white',
  light: 'card-light text-black'
};

export function Card({ children, className = '', variant = 'dark' }: CardProps) {
  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
