'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  {
    label: 'Maps',
    href: '/game/studio/maps',
  },
  {
    label: 'Monsters',
    href: '/game/studio/monsters',
  },
  {
    label: 'Items',
    href: '/game/studio/items',
  },
];
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <header className="flex flex-row gap-2 justify-between items-center px-4 py-2 border-b border-gray-200">
        <Link href="/game/studio">
          <span className="text-2xl font-extrabold tracking-widest uppercase">
            STORYTELLER <span className="text-xs">studio</span>
          </span>
        </Link>
        <nav className="flex flex-row gap-2 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                pathname === link.href
                  ? 'text-yellow-500 font-extrabold'
                  : 'text-gray-500 font-normal cursor-pointer hover:text-yellow-200/50 transition-colors duration-200',
                'text-md tracking-widest uppercase '
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
