/**
 * Mapa de capas dos projetos.
 * Chave: nome exato do repositório no GitHub (r.name da API).
 * Valor: caminho relativo à pasta public/.
 *
 * Exemplo:
 *   'meu-projeto': '/images/projects/meu-projeto.png',
 */
export const projectCovers: Record<string, string> = {
  'portfolio_2026': '/images/projects/portfolio_2026.png',
  'weather_web': '/images/projects/weather_web.png',
  'frontend_TaskManager': '/images/projects/frontend_TaskManager.png',
  'buscador_cep': '/images/projects/buscador_cep.png',
}