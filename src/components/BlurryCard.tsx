import { cn } from '@/utils/cn';

type BlurryCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const BlurryCard = ({ children, className }: BlurryCardProps) => {
  return (
    <div
      className={cn(
        `relative rounded-3xl p-8
        bg-gradient-to-br from-white/60 via-white/30 to-white/10
        backdrop-blur-2xl
        shadow-[8px_8px_24px_0_rgba(31,38,135,0.12),-8px_-8px_24px_0_rgba(255,255,255,0.25)]
        border border-white/30
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-[12px_12px_32px_0_rgba(31,38,135,0.18),-12px_-12px_32px_0_rgba(255,255,255,0.35)]
        `
      )}
      style={{
        boxShadow:
          '8px 8px 24px 0 rgba(31,38,135,0.12), -8px -8px 24px 0 rgba(255,255,255,0.25), 0 1.5px 0 0 rgba(255,255,255,0.10) inset',
      }}
    >
      {/* Eumorphic top-right highlight (subtle) */}
      <div
        className="
          pointer-events-none
          absolute right-0 top-0 w-1/2 h-1/3
          rounded-tr-3xl
          z-10
        "
        style={{
          background:
            'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)',
          filter: 'blur(2.5px)',
          opacity: 0.45,
        }}
        aria-hidden="true"
      />
      {/* Eumorphic bottom-left shadow */}
      <div
        className="
          pointer-events-none
          absolute left-0 bottom-0 w-2/3 h-1/3
          rounded-bl-3xl
          z-10
        "
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(31,38,135,0.10) 0%, rgba(31,38,135,0.05) 60%, transparent 100%)',
          filter: 'blur(2.5px)',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      {/* Subtle inner border gloss */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          border-2 border-white/10
          z-10
        "
        aria-hidden="true"
      />
      {/* Optional: soft inner shadow for depth */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          z-10
        "
        style={{
          boxShadow:
            'inset 0 2px 12px 0 rgba(31,38,135,0.08), inset 0 -2px 8px 0 rgba(255,255,255,0.10)',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  );
};
