export interface StackCategory {
  labelPt: string
  labelEn: string
  items: string[]
}

export const stack: StackCategory[] = [
  {
    labelPt: 'Linguagens',
    labelEn: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL'],
  },
  {
    labelPt: 'Front-end',
    labelEn: 'Front-end',
    items: ['React', 'Next.js', 'Vue.js', 'React Native', 'Redux', 'TailwindCSS'],
  },
  {
    labelPt: 'Back-end',
    labelEn: 'Back-end',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'ASP.NET Core', 'Django', 'Flask'],
  },
  {
    labelPt: 'IA & Automação',
    labelEn: 'AI & Automation',
    items: ['OpenAI / LLMs', 'AI Agents', 'LangChain', 'n8n', 'Prompt Engineering', 'Python Automation'],
  },
  {
    labelPt: 'Banco de Dados',
    labelEn: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Redis'],
  },
  {
    labelPt: 'DevOps & Cloud',
    labelEn: 'DevOps & Cloud',
    items: ['Docker', 'AWS', 'CI/CD', 'Git & GitHub', 'Vercel'],
  },
  {
    labelPt: 'Testes & Qualidade',
    labelEn: 'Tests & Quality',
    items: ['JUnit', 'Selenium', 'TDD', 'BDD', 'Clean Code', 'SOLID'],
  },
  {
    labelPt: 'Integrações',
    labelEn: 'Integrations',
    items: ['REST APIs', 'GraphQL', 'RabbitMQ', 'JWT', 'Swagger', 'WebSockets'],
  },
]
