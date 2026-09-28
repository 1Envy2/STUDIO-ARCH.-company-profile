'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/studio', label: 'Studio' },
    { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="text-sm font-bold tracking-[0.2em] text-slate-900 hover:text-slate-500 transition-colors">
          STUDIO ARCH.
        </Link>
        <nav className="flex gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-xs md:text-sm font-medium tracking-widest hover:text-slate-500 transition-colors ${pathname === link.href ? 'text-slate-900' : 'text-slate-400'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
