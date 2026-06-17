import type { Experience, BilingualExperience } from '@/types/experience'

export const experiences: BilingualExperience[] = [
  {
    period: '2024 — Presente',
    role: 'Full-Stack & AI Automation Developer',
    company: 'Yogi Baby',
    descPt:
      'Desenvolvimento de agentes de IA e automações que integram sistemas e eliminam trabalho manual entre plataformas.',
    descEn:
      'Building AI agents and automations that integrate systems and remove manual work across platforms.',
  },
  {
    period: '2022 — 2024',
    role: 'Full-Stack Developer',
    company: 'Narwal Sistemas',
    descPt:
      'Aplicações web ponta a ponta — do front-end React ao back-end e modelagem de dados.',
    descEn:
      'End-to-end web applications — from the React front-end to the back-end and data modeling.',
  },
  {
    period: '2021 — 2022',
    role: 'Developer',
    company: 'CreativeCode',
    descPt: 'Construção de interfaces e funcionalidades web sob medida para clientes diversos.',
    descEn: 'Building custom web interfaces and features for a range of clients.',
  },
]

export function getExperiences(locale: string): Experience[] {
  return experiences.map((e) => ({
    period: e.period,
    role: e.role,
    company: e.company,
    desc: locale === 'pt' ? e.descPt : e.descEn,
  }))
}
