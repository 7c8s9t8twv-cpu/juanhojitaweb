'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/acerca', label: 'Acerca de' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/herramientas/clasificador', label: 'Herramientas' },
  { href: '/tienda', label: 'Tienda' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          JUAN HOJITA
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cart">
          <span className="lang">ES</span>
          <button
            className="nav-toggle"
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
