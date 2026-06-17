export interface StackCategory {
  labelPt: string
  labelEn: string
  items: string[]
}

export const stack: StackCategory[] = [
  {
    labelPt: 'Linguagens',
    labelEn: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
  },
  {
    labelPt: 'Front-end',
    labelEn: 'Front-end',
    items: ['React', 'Next.js', 'TailwindCSS', 'HTML & CSS'],
  },
  {
    labelPt: 'Back-end',
    labelEn: 'Back-end',
    items: ['Node.js', 'ASP.NET', 'Express', 'REST APIs'],
  },
  {
    labelPt: 'IA & Automação',
    labelEn: 'AI & Automation',
    items: ['OpenAI / LLMs', 'AI Agents', 'LangChain', 'Prompt Engineering', 'n8n'],
  },
  {
    labelPt: 'Banco de Dados',
    labelEn: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    labelPt: 'DevOps',
    labelEn: 'DevOps',
    items: ['Docker', 'Git', 'CI/CD', 'Vercel'],
  },
]
