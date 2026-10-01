'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { PERSON, NAV_LINKS } from '@/app/config';
/* ── Header ──────────────────────────────────────────────────────── */

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hysteresis: appear at 40px, disappear only when back at 8px
      // This prevents the frosted glass from flickering near the threshold
      setScrolled((prev) => (y > 40 ? true : y < 8 ? false : prev));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="content-container">
        <Link href="/" className="site-logo">
          {PERSON.fullName}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-icons">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
