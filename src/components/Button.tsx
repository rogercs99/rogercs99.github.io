import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';

const variants = {
  primary:
    'bg-indigo-600 text-white shadow-soft hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400',
  secondary:
    'border-slate-200 bg-white text-slate-900 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100',
  ghost: 'border-transparent text-slate-700 hover:text-indigo-600 dark:text-slate-200',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props} />;
}

export function LinkButton({ variant = 'primary', className = '', ...props }: LinkButtonProps) {
  return <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props} />;
}
