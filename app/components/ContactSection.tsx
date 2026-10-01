import { CONTACT } from '@/app/config';

export function ContactSection() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--last">
      <div className="section-header">
        <span className="section-label">Say hello</span>
      </div>

      <div className="contact-layout">
        <div>
          <p className="contact-blurb">{CONTACT.blurb}</p>
          <a href={`mailto:${CONTACT.email}`} className="btn-primary contact-cta">
            Send me an email
          </a>
        </div>

        <div className="contact-links">
          {CONTACT.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="contact-link"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-link-label">{link.label}</span>
              <span className="contact-link-value">{link.display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
