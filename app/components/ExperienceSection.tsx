import { EXPERIENCE } from '@/app/config';

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="section-header">
        <span className="section-label">Where I've worked</span>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((entry, i) => (
          <div key={i} className="exp-item">
            <div className="exp-meta">
              <div className="exp-meta-left">
                <p className="exp-role">{entry.role}</p>
                <p className="exp-company">{entry.company} &middot; {entry.location}</p>
              </div>
              <span className="exp-dates">{entry.start} &ndash; {entry.end}</span>
            </div>

            <ul className="exp-bullets">
              {entry.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>

            <div className="tech-pill-row">
              {entry.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
