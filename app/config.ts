/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.

   Quick start:
     1. Fill in ME below — every raw fact about you (name, role, email,
        usernames, resume path) lives there ONCE. Everything else in this
        file (PERSON, SITE, SOCIAL_LINKS, CONTACT, FOOTER, project GitHub
        links) is derived from it, so you never have to repeat yourself.
     2. Update EDUCATION, EXPERIENCE, and PROJECTS with your own entries
        (add/remove array items freely — sections render however many
        entries you give them).
     3. Skim HERO and adjust the bio/CTAs if you want.
     4. Drop your resume PDF at public/resume.pdf (or wherever ME.resumePath
        points) so the resume links work (see README.md for details).

   Note: you don't need to type in your site's URL anywhere. It's
   derived automatically below — see SITE_URL.
   ───────────────────────────────────────────────────────────────────── */

// ── Your info (edit this once) ─────────────────────────────────────────
// The single source of truth for anything identifying you. Every other
// section below derives from these fields instead of repeating them.
export const ME = {
  firstName:  'Janna Audrey',
  lastName:   'Doratan',
  role:       'Computer Science and Engineering Student at UCLA', // e.g. "Software Engineer", "Data Scientist"
  email:      'jadoratan@gmail.com',
  github:     'jadoratan',      // GitHub username only, no URL
  linkedin:   'jadoratan',      // LinkedIn username only, no URL
  resumePath: '/resume.pdf',       // path under public/ — see README.md
};

// Derived URLs, built once from ME so nothing else hardcodes them.
const GITHUB_URL   = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF   = `mailto:${ME.email}`;

// The site's own URL, figured out automatically instead of hardcoded:
//   - On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set for you at build
//     time, so a Vercel deploy needs zero config here.
//   - Locally (pnpm dev / pnpm build), it falls back to localhost.
//   - Deploying elsewhere (or using a custom domain)? Set NEXT_PUBLIC_SITE_URL
//     in your environment (e.g. a .env.local file) to override.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ──────────────────────────────────────────────────────
// Shown in the hero section and used to build the page title below.
export const PERSON = {
  firstName: ME.firstName,
  lastName:  ME.lastName,
  fullName:  `${ME.firstName} ${ME.lastName}`,
  role:      ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
// Powers the browser tab title, meta description, canonical URL, and
// social previews. `url` is derived automatically (see SITE_URL above).
export const SITE = {
  url:         SITE_URL,
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a ${PERSON.role} at UCLA.`,
};

// ── Navigation links ──────────────────────────────────────────────────
// Shown in the header. Each `href` should match a section's `id` on the
// page (e.g. '#projects' scrolls to <section id="projects">). Add or
// remove entries to match the sections you actually want to show.
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
// The big intro at the top of the page. `ctas` are the call-to-action
// buttons — set `primary: true` for the filled/highlighted button.
export const HERO = {
  greeting: "Hi, I'm",
  bio:      "2nd year undergraduate studying Computer Science and Engineering at UCLA. Interested in full-stack development and AI/ML. Passionate about creating human-centered products that make life easier :).",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Get in touch',       href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
// One entry per school. `minor` and `gpa` are optional — omit them if
// not applicable. `courses` shows as a list of relevant coursework.
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school:     'University of California, Los Angeles',
    degree:     'B.S. Computer Science and Engineering',
    gpa:        '4.0',
    graduation: 'June 2029',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Probability & Statistics',
      'Software Engineering',
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────
// One entry per job/internship/TA position, most recent first. `bullets`
// are rendered as a list of achievements — keep them action-oriented and
// quantify impact where you can. `tech` shows as tag chips.
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company:  'Acme Corporation',
    role:     'Software Engineer Intern',
    location: 'San Francisco, CA',
    start:    'Jun 2025',
    end:      'Aug 2025',
    bullets: [
      'Built a real-time dashboard in React and TypeScript, reducing incident response time by 40%.',
      'Designed and deployed three REST API endpoints serving 50k requests per day.',
      'Collaborated with the design team to ship a redesigned onboarding flow that improved conversion by 18%.',
    ],
    tech: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    company:  'UCLA Engineering',
    role:     'Teaching Assistant — CS 33',
    location: 'Los Angeles, CA',
    start:    'Sep 2024',
    end:      'Dec 2024',
    bullets: [
      'Led weekly discussion sections for 40 students covering systems programming in C.',
      'Held office hours to assist students with debugging and conceptual questions.',
      'Wrote and graded three programming assignments and two midterms.',
    ],
    tech: ['C', 'x86 Assembly', 'Linux'],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
// One entry per project. `github` and `live` are both optional — omit
// whichever doesn't apply. Set `featured: true` to highlight a project
// (check the ProjectsSection component to see how featured entries are
// styled differently, if at all, in this template).
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name:        'StudySync',
    description: 'A collaborative study-planning app that lets UCLA students share notes, schedule group sessions, and track progress together in real time.',
    tech:        ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github:      `${GITHUB_URL}/studysync`,
    live:        'https://studysync.app',
    featured:    true,
  },
  {
    name:        'BruinBot',
    description: 'A Discord bot that surfaces real-time UCLA dining menu data, library room availability, and bus schedules for 2,000+ active users.',
    tech:        ['Node.js', 'Discord.js', 'REST APIs', 'Cron'],
    github:      `${GITHUB_URL}/bruinbot`,
    featured:    true,
  },
  {
    name:        'PocketPortfolio',
    description: 'A mobile-first stock portfolio tracker with custom alerts and a clean chart-based UI, built during a 24-hour hackathon.',
    tech:        ['React Native', 'Expo', 'Recharts', 'Firebase'],
    github:      `${GITHUB_URL}/pocketportfolio`,
    live:        'https://pocketportfolio.dev',
    featured:    false,
  },
  {
    name:        'AutoGrade',
    description: 'A command-line grading tool that runs student Python submissions against test suites in isolated Docker containers and produces structured reports.',
    tech:        ['Python', 'Docker', 'Bash', 'SQLite'],
    github:      `${GITHUB_URL}/autograde`,
    featured:    false,
  },
];

// ── Social links ──────────────────────────────────────────────────────
// Shown in the header/hero area. Add or remove entries as needed.
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: GITHUB_URL   },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email',    href: EMAIL_HREF   },
];

// ── Contact ───────────────────────────────────────────────────────────
// The Resume link points to ME.resumePath, which is served from whatever
// file you place at public/resume.pdf — see README.md > "Adding Your
// Resume". If you don't want to show a resume link, delete that entry.
export const CONTACT = {
  email: ME.email,
  blurb: "I'm actively looking for internships and new-grad roles starting 2026. If you're working on something interesting or just want to chat, my inbox is always open.",
  links: [
    { label: 'Email',    href: EMAIL_HREF,     display: ME.email                         },
    { label: 'GitHub',   href: GITHUB_URL,     display: `github.com/${ME.github}`        },
    { label: 'LinkedIn', href: LINKEDIN_URL,   display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume',   href: ME.resumePath,  display: 'Download PDF'                   },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
// `columns` renders as link groups. The Resume link here reuses
// ME.resumePath, so it stays in sync with CONTACT automatically.
export const FOOTER = {
  tagline: "UCLA Computer Science student building things for the web.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: GITHUB_URL     },
        { label: 'LinkedIn', href: LINKEDIN_URL   },
        { label: 'Email',    href: EMAIL_HREF     },
        { label: 'Resume',   href: ME.resumePath  },
      ],
    },
  ],
};
