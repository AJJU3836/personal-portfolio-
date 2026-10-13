// ============================================================
//  team.ts — SINGLE SOURCE OF TRUTH
//  Edit only this file to update any team member's details.
// ============================================================

export interface Project {
  name: string;
  description: string;
  url: string;         // GitHub or live link
}

export interface Member {
  slug: string;        // URL slug, e.g. "ajay" → /member/ajay
  name: string;
  role: string;
  bio: string;         // 2-3 sentence bio shown on profile page
  skills: string[];    // full list of skills (profile page)
  topSkills: string[]; // exactly 3 — shown on the home card
  photo: string;       // filename inside /public, e.g. "ajay.png" or "placeholder.png"
  projects: Project[]; // exactly 2 sample projects
  github: string;      // full URL
  linkedin: string;    // full URL
  email: string;       // email address
}

// ============================================================
//  TEAM DATA — replace sample data with real info
// ============================================================

export const TEAM: Member[] = [
  {
    slug: 'ajay',
    name: 'Ajay',
    role: 'Frontend Developer',
    bio: 'Ajay specialises in crafting clean, responsive user interfaces. He loves turning Figma mockups into pixel-perfect Angular apps and is passionate about web performance and accessibility.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Responsive Design'],
    topSkills: ['HTML', 'CSS', 'Angular'],
    photo: 'ajay.png',
    projects: [
      {
        name: 'Portfolio Site',
        description: 'A personal portfolio built with Angular 20, featuring smooth animations and a responsive layout.',
        url: 'https://github.com/AJJU3836',
      },
      {
        name: 'Weather Dashboard',
        description: 'A real-time weather app consuming the OpenWeatherMap API, built with vanilla JS and CSS Grid.',
        url: 'https://github.com/AJJU3836',
      },
    ],
    github: 'https://github.com/AJJU3836',
    linkedin: 'https://www.linkedin.com/in/ajay-kale-1b3a09307',
    email: 'kaleajy626@gmail.com',
  },
  {
    slug: 'pranav',
    name: 'Pranav',
    role: 'Backend Developer',
    bio: 'Pranav builds robust, scalable server-side systems. He enjoys designing RESTful APIs and working with databases to power full-stack applications.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth', 'Postman'],
    topSkills: ['Node.js', 'Express', 'MongoDB'],
    photo: 'placeholder.png',
    projects: [
      {
        name: 'REST API — Task Manager',
        description: 'A full CRUD REST API for a task management app with JWT authentication and MongoDB.',
        url: 'https://github.com/pranav',
      },
      {
        name: 'E-commerce Backend',
        description: 'Express-based backend with product, cart, and order management, integrated with Razorpay.',
        url: 'https://github.com/pranav',
      },
    ],
    github: 'https://github.com/pranav',
    linkedin: 'https://linkedin.com/in/pranav',
    email: 'pranav@example.com',
  },
  {
    slug: 'parth',
    name: 'Parth',
    role: 'UI/UX Designer',
    bio: 'Parth bridges the gap between design and development. He creates intuitive user flows in Figma and implements them with semantic HTML and carefully crafted CSS.',
    skills: ['Figma', 'CSS', 'Responsive Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    topSkills: ['Figma', 'CSS', 'Responsive Design'],
    photo: 'placeholder.png',
    projects: [
      {
        name: 'Food Delivery App — UI Kit',
        description: 'A complete Figma design system for a food delivery app including components, tokens, and flows.',
        url: 'https://figma.com/',
      },
      {
        name: 'College Event Portal',
        description: 'Redesigned the college event portal UI from scratch — improved task completion rate by 40%.',
        url: 'https://github.com/parth',
      },
    ],
    github: 'https://github.com/parth',
    linkedin: 'https://linkedin.com/in/parth',
    email: 'parth@example.com',
  },
  {
    slug: 'shruti',
    name: 'Shruti',
    role: 'Full Stack Developer',
    bio: 'Shruti is comfortable on both ends of the stack. She integrates Angular frontends with Node.js backends and keeps everything version-controlled and well-documented with Git.',
    skills: ['Angular', 'Node.js', 'MySQL', 'Git', 'TypeScript', 'REST APIs'],
    topSkills: ['Angular', 'Node.js', 'MySQL'],
    photo: 'placeholder.png',
    projects: [
      {
        name: 'Student Management System',
        description: 'Full-stack app with Angular frontend, Node/Express backend, and MySQL database for managing student records.',
        url: 'https://github.com/shruti',
      },
      {
        name: 'Expense Tracker',
        description: 'A responsive expense tracker with charts, category filters, and a RESTful API backend.',
        url: 'https://github.com/shruti',
      },
    ],
    github: 'https://github.com/shruti',
    linkedin: 'https://linkedin.com/in/shruti',
    email: 'shruti@example.com',
  },
  {
    slug: 'paritosh',
    name: 'Paritosh',
    role: 'Project Lead / Tester',
    bio: 'Paritosh keeps the team on track. He manages the project workflow on GitHub, writes clear documentation, and ensures quality through systematic testing before every release.',
    skills: ['Git', 'GitHub', 'Manual Testing', 'Documentation', 'Project Management', 'Agile'],
    topSkills: ['Git', 'Testing', 'Documentation'],
    photo: 'placeholder.png',
    projects: [
      {
        name: 'Bakery Management System',
        description: 'Oversaw the full project lifecycle — from planning and sprint management to final QA and deployment.',
        url: 'https://github.com/GLITCHGOD1611/bakery-management-system',
      },
      {
        name: 'User Management System',
        description: 'Led testing and documentation for a full-stack user management system with role-based access control.',
        url: 'https://github.com/GLITCHGOD1611/user-management-system',
      },
    ],
    github: 'https://github.com/paritosh',
    linkedin: 'https://linkedin.com/in/paritosh',
    email: 'paritosh@example.com',
  },
];
