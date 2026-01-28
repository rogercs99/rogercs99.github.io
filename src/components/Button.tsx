import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-[10px] border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facdcd]';

const variants = {
  primary: 'border-transparent bg-white text-black shadow-[8px_8px_0_rgba(250,71,119,1)] hover:-translate-y-0.5',
  secondary: 'border-transparent bg-white text-black shadow-[8px_8px_0_rgba(250,205,205,1)] hover:-translate-y-0.5',
  ghost: 'border-white/40 text-white hover:border-white hover:text-ink-200',
  light: 'border-black/40 text-black hover:border-black'
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
