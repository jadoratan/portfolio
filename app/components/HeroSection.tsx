import Link from 'next/link';
import { PERSON, HERO } from '@/app/config';

/* Colored squares that arc across the hero (blue → purple → pink)
   Each square: left/top as % of hero, size in px, rotation in deg,
   CSS HSL color, animation duration, animation delay */
const SQUARES = [
  { l: 53, t: 84, s: 15, r: 28,  c: 'hsl(242,66%,52%)', dur: 3.4, del: 0.0 },
  { l: 55, t: 76, s: 21, r:-38,  c: 'hsl(246,67%,53%)', dur: 2.9, del: 0.4 },
  { l: 57, t: 82, s: 13, r: 52,  c: 'hsl(250,67%,53%)', dur: 3.8, del: 0.8 },
  { l: 60, t: 73, s: 19, r:-22,  c: 'hsl(254,68%,53%)', dur: 3.1, del: 0.2 },
  { l: 59, t: 66, s: 17, r: 43,  c: 'hsl(258,68%,54%)', dur: 4.0, del: 0.6 },
  { l: 63, t: 70, s: 23, r:-47,  c: 'hsl(263,69%,54%)', dur: 3.3, del: 1.0 },
  { l: 65, t: 62, s: 15, r: 32,  c: 'hsl(268,70%,54%)', dur: 2.7, del: 0.3 },
  { l: 68, t: 65, s: 19, r:-28,  c: 'hsl(274,72%,55%)', dur: 3.6, del: 0.7 },
  { l: 67, t: 57, s: 17, r: 58,  c: 'hsl(280,74%,55%)', dur: 3.2, del: 0.1 },
  { l: 71, t: 60, s: 13, r:-42,  c: 'hsl(286,76%,56%)', dur: 4.1, del: 0.5 },
  { l: 70, t: 52, s: 21, r: 22,  c: 'hsl(292,78%,56%)', dur: 3.0, del: 0.9 },
  { l: 73, t: 55, s: 15, r:-32,  c: 'hsl(298,80%,57%)', dur: 3.7, del: 0.2 },
  { l: 75, t: 47, s: 19, r: 48,  c: 'hsl(303,82%,57%)', dur: 2.8, del: 0.6 },
  { l: 77, t: 50, s: 13, r:-53,  c: 'hsl(308,83%,58%)', dur: 3.4, del: 1.1 },
  { l: 79, t: 42, s: 17, r: 37,  c: 'hsl(312,84%,58%)', dur: 3.9, del: 0.3 },
  { l: 81, t: 45, s: 21, r:-23,  c: 'hsl(316,85%,59%)', dur: 3.1, del: 0.7 },
  { l: 82, t: 37, s: 15, r: 26,  c: 'hsl(320,86%,59%)', dur: 2.6, del: 0.0 },
  { l: 84, t: 40, s: 11, r:-48,  c: 'hsl(323,87%,60%)', dur: 4.2, del: 0.4 },
  { l: 86, t: 32, s: 19, r: 42,  c: 'hsl(326,87%,60%)', dur: 3.5, del: 0.8 },
  { l: 88, t: 35, s: 13, r:-36,  c: 'hsl(328,88%,61%)', dur: 3.0, del: 1.2 },
  { l: 87, t: 27, s: 17, r: 52,  c: 'hsl(330,88%,61%)', dur: 3.8, del: 0.2 },
  { l: 90, t: 30, s: 21, r:-27,  c: 'hsl(330,88%,62%)', dur: 2.9, del: 0.6 },
  { l: 89, t: 22, s: 15, r: 31,  c: 'hsl(332,88%,62%)', dur: 3.3, del: 1.0 },
  { l: 92, t: 25, s: 11, r:-47,  c: 'hsl(334,88%,62%)', dur: 4.0, del: 0.4 },
  { l: 91, t: 17, s: 17, r: 21,  c: 'hsl(336,88%,62%)', dur: 3.6, del: 0.8 },
];

export function HeroSection() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Animated squares layer */}
      <div className="squares-layer" aria-hidden="true">
        {SQUARES.map((sq, i) => (
          <div
            key={i}
            className="sq"
            style={{
              left: `${sq.l}%`,
              top: `${sq.t}%`,
              width: sq.s,
              height: sq.s,
              background: sq.c,
              '--r': `${sq.r}deg`,
              '--dur': `${sq.dur}s`,
              '--delay': `${sq.del}s`,
              animationDuration: `${sq.dur}s`,
              animationDelay: `${sq.del}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="hero-inner">
        {/* Left: text */}
        <div className="hero-text">
          <h1 className="hero-heading">
            {HERO.greeting}{' '}
            <span style={{ color: 'var(--primary)' }}>{PERSON.fullName}</span>
          </h1>
          <p className="hero-sub">{HERO.bio}</p>
          <div className="hero-ctas">
            {HERO.ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={cta.primary ? 'btn-primary' : 'btn-secondary'}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: character illustration */}
        <div className="hero-character" aria-hidden="true">
          {/*
            TODO: Replace this placeholder with your own photo or illustration:
            <img src="/images/your-photo.png" alt="" className="character-img" />

            Or remove the hero-text and go fully visual like the original.
          */}
          <div className="character-figure">
            <div className="character-placeholder">
              <span role="img" aria-hidden="true">🧑‍💻</span>
              <small>Your photo here</small>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud transition at the bottom of the hero */}
      <div className="hero-clouds" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="5120" height="456" fill="none" viewBox="0 0 5120 456" preserveAspectRatio="none">
          <path fill="var(--bg)" d="M2641.4 401.5C2613.31 399.999 2525.75 198 2121.01 198C1862 198 1840 264.5 1806.88 259.5C1773.77 254.499 1723.34 129.991 1562.17 136C1401 142.009 1366.58 313.5 1339 321C1311.42 328.5 1279 226.5 1034.79 234.5C802.99 242.093 724.297 318.5 697 313C669.703 307.5 681 75.9996 430.496 32.4996C214.304 -5.042 99.7464 183.937 60.6394 266.475C51.4353 285.9 27.9703 295.392 8.5729 286.129C-15.3473 274.705 -43 292.144 -43 318.652V429.5C-43 443.859 -31.3592 455.5 -16.9999 455.5H5103C5127.3 455.5 5147 435.8 5147 411.5V232.89C5147 226.643 5146.46 220.404 5144.55 214.457C5136.92 190.729 5108.7 128.5 5022.5 128.5C4881 128.5 4935 253.704 4838.83 249C4808.16 247.499 4757.27 55.5004 4535 59C4312.73 62.4996 4283.98 270.5 4250.5 268.5C4217.02 266.5 4197 199 4037.27 189.5C3834.76 177.455 3790.86 285 3753.5 279C3716.14 273 3652.96 98.8238 3377.5 153.5C3156.46 197.374 3191.5 387.48 3139.82 376.5C3118.64 371.999 3078.5 339 2948.03 339C2894.2 339 2890.37 330.676 2837.19 339C2708.5 359.141 2669.5 403 2641.4 401.5Z"/>
        </svg>
      </div>
    </section>
  );
}
