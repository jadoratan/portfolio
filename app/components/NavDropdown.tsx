'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export interface DropdownItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="nav-dropdown-wrapper" ref={wrapperRef}>
      <button
        className="nav-link-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
      </button>

      {open && (
        <div className="nav-dropdown-panel" role="dialog" aria-label={`${label} menu`}>
          {/* Rounded caret pointing up toward the nav button */}
          <svg
            aria-hidden="true"
            className="dropdown-caret"
            width="50"
            height="22"
            viewBox="0 0 50 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,22 L22,4 Q25,0 28,4 L50,22 Z" fill="currentColor" />
          </svg>

          <div className="dropdown-grid">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                <span className="dropdown-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="dropdown-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
