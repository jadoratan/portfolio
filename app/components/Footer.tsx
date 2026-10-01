import Link from 'next/link';
import { PERSON, FOOTER } from '@/app/config';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-container">
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <Link href="/" className="footer-logo">
              {PERSON.fullName}
            </Link>
            <p className="footer-tagline">{FOOTER.tagline}</p>
          </div>

          {/* Dynamic link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <p className="footer-col-title">{col.heading}</p>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer-link"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {YEAR} {PERSON.fullName}. Designed by{' '}
            <a
              href="https://bseatucla.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Bruin Software Engineers
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
