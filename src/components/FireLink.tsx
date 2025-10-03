import { cn } from '@/utils/cn';
import Link from 'next/link';

type FireLinkProps = {
  children: React.ReactNode;
  href: string;
  size?: 'sm' | 'md' | 'lg';
};

export const FireLink = ({ children, href, size = 'md' }: FireLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative',
        'text-2xl font-extrabold tracking-widest uppercase',
        'text-yellow-200',
        'bg-gradient-to-br from-yellow-700 via-orange-700 to-red-800',
        'border-4 border-yellow-400',
        'rounded-xl',
        'transition duration-200',
        'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-yellow-400/40 before:to-transparent before:blur-sm before:opacity-80 before:pointer-events-none',
        'after:absolute after:inset-0 after:rounded-xl after:ring-2 after:ring-yellow-300/60 after:animate-pulse after:pointer-events-none',
        'overflow-hidden',
        size === 'sm' &&
          'px-4 py-2 text-sm shadow-[0_0_20px_5px_rgba(255,140,0,0.7)] hover:shadow-[0_0_30px_10px_rgba(255,215,0,0.9)]',
        size === 'md' &&
          'px-8 py-3 text-base shadow-[0_0_40px_10px_rgba(255,140,0,0.7)] hover:shadow-[0_0_60px_20px_rgba(255,215,0,0.9)]',
        size === 'lg' &&
          'px-12 py-4 text-lg shadow-[0_0_60px_15px_rgba(255,140,0,0.7)] hover:shadow-[0_0_80px_30px_rgba(255,215,0,0.9)]'
      )}
      style={{
        textShadow:
          size === 'sm'
            ? '0 0 4px #fff200, 0 0 12px #ff8c00, 0 0 1px #000'
            : size === 'lg'
            ? '0 0 12px #fff200, 0 0 36px #ff8c00, 0 0 3px #000'
            : '0 0 8px #fff200, 0 0 24px #ff8c00, 0 0 2px #000',
        boxShadow:
          size === 'sm'
            ? '0 0 20px 5px #ff8c00aa, 0 0 4px 1px #fff20099 inset'
            : size === 'lg'
            ? '0 0 60px 15px #ff8c00aa, 0 0 12px 3px #fff20099 inset'
            : '0 0 40px 10px #ff8c00aa, 0 0 8px 2px #fff20099 inset',
      }}
    >
      <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
        {children}
      </span>
      <span
        className="
        absolute left-1/2 top-0 -translate-x-1/2
        w-2/3 h-1
        bg-gradient-to-r from-yellow-300 via-yellow-100 to-transparent
        opacity-80 blur-sm
        animate-pulse
        z-20
      "
      />
      <span
        className="
        absolute right-2 bottom-2 w-4 h-4
        bg-gradient-radial from-yellow-400 via-orange-400 to-transparent
        rounded-full opacity-70 blur
        animate-ping
        z-0
      "
      />
    </Link>
  );
};
