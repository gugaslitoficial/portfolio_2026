import type { Experience, BilingualExperience } from '@/types/experience'

export const experiences: BilingualExperience[] = [
  {
    periodPt: 'Jan 2026 — Presente',
    periodEn: 'Jan 2026 — Present',
    role: 'Full-Stack Developer – AI Focus',
    company: 'Yogi Baby · PR, Brasil',
    descPt:
      'Atuo com IA aplicada à automação de processos de marketing e operações, desenvolvendo agentes de IA, fluxos automatizados e integrações entre sistemas internos e plataformas externas como Shopify.',
    descEn:
      'Working with applied AI for marketing and operations automation, building AI agents, automated workflows and integrations between internal systems and external platforms such as Shopify.',
  },
  {
    periodPt: 'Ago 2025 — Out 2025',
    periodEn: 'Aug 2025 — Oct 2025',
    role: 'Full-Stack Developer – SENAI / Inova Talentos',
    company: 'Narwal Sistemas · RS, Brasil',
    descPt:
      'Desenvolvi funcionalidades full stack para sistema logístico corporativo com React, Next.js e C# ASP.NET, atuando na modelagem de bancos de dados relacionais e não relacionais em ambiente ágil.',
    descEn:
      'Developed full stack features for a corporate logistics system using React, Next.js and C# ASP.NET, working on relational and non-relational database modeling in an agile environment.',
  },
  {
    periodPt: 'Abr 2025 — Jul 2025',
    periodEn: 'Apr 2025 — Jul 2025',
    role: 'Full-Stack Developer',
    company: 'CreativeCode · PR, Brasil',
    descPt:
      'Desenvolvimento full stack de aplicações web e mobile para os setores bancário e de agronegócio, com React Native, Next.js, Node.js e PostgreSQL, além de documentação técnica e integração entre times.',
    descEn:
      'Full stack development of web and mobile applications for banking and agribusiness sectors using React Native, Next.js, Node.js and PostgreSQL, plus technical documentation and cross-team integration.',
  },
  {
    periodPt: 'Fev 2025 — Abr 2025',
    periodEn: 'Feb 2025 — Apr 2025',
    role: 'Front-End Developer',
    company: 'Onvita · PR, Brasil',
    descPt:
      'Desenvolvimento de sistemas com arquitetura frontend moderna, integração com APIs REST e GraphQL, aplicação de SOLID e Clean Code, testes automatizados e melhorias de acessibilidade.',
    descEn:
      'Built modern frontend systems, integrated REST and GraphQL APIs, applied SOLID and Clean Code principles, implemented automated tests and improved accessibility.',
  },
  {
    periodPt: 'Out 2024 — Jan 2025',
    periodEn: 'Oct 2024 — Jan 2025',
    role: 'Full-Stack Developer',
    company: 'GMaster · PR, Brasil',
    descPt:
      'Desenvolvimento de páginas e sistemas internos corporativos, automações e integrações backend com JavaScript, Java e Python, e suporte a banco de dados PostgreSQL.',
    descEn:
      'Built internal corporate pages and systems, developed backend automations and integrations with JavaScript, Java and Python, and provided PostgreSQL database support.',
  },
  {
    periodPt: 'Jun 2022 — Jul 2024',
    periodEn: 'Jun 2022 — Jul 2024',
    role: 'IT Assistant',
    company: 'Sys Manager · RJ, Brasil',
    descPt:
      'Evolução para função técnica de maior responsabilidade: desenvolvimento e manutenção de sistemas com Java, C# e JavaScript, planejamento com o time técnico, documentação interna e cerimônias ágeis.',
    descEn:
      'Grew into a senior technical role: developed and maintained systems with Java, C# and JavaScript, collaborated on technical planning, produced internal documentation and participated in agile ceremonies.',
  },
  {
    periodPt: 'Dez 2021 — Jun 2022',
    periodEn: 'Dec 2021 — Jun 2022',
    role: 'IT Intern',
    company: 'Sys Manager · RJ, Brasil',
    descPt:
      'Suporte ao desenvolvimento de sistemas internos, estruturação inicial de bancos de dados, manutenção de funcionalidades e treinamentos em desenvolvimento web e plataformas low-code (OutSystems).',
    descEn:
      'Supported internal systems development, assisted with initial database structuring, maintained features and trained in web development and low-code platforms (OutSystems).',
  },
]

export function getExperiences(locale: string): Experience[] {
  return experiences.map((e) => ({
    period: locale === 'pt' ? e.periodPt : e.periodEn,
    role: e.role,
    company: e.company,
    desc: locale === 'pt' ? e.descPt : e.descEn,
  }))
}
