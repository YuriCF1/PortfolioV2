// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

// Carrega o JSON original
// eslint-disable-next-line @typescript-eslint/no-require-imports
const data = require('./projects.json');

// Mapeamento direto baseado nas URLs do seu JSON
const techMapping = {
  // HTML/CSS
  'html5': 'HTML5',
  'css3': 'CSS3',
  
  // JavaScript/TypeScript
  'javascript': 'JavaScript',
  'typescript': 'TypeScript',
  
  // Frameworks Frontend
  'nextjs': 'Next.js',
  'react': 'React',
  'vuejs': 'Vue.js',
  'angularjs': 'Angular',
  
  // CSS Frameworks
  'tailwindcss': 'Tailwind CSS',
  'bootstrap': 'Bootstrap',
  'bulma': 'Bulma',
  'sass': 'Sass',
  
  // Backend
  'nodejs': 'Node.js',
  'express': 'Express.js',
  'php': 'PHP',
  
  // Bancos de dados
  'mysql': 'MySQL',
  'mongodb': 'MongoDB',
  'firebase': 'Firebase',
  
  // Ferramentas
  'axios': 'Axios',
  'redux': 'Redux',
  'rxjs': 'RxJS',
  'jest': 'Jest',
  'postman': 'Postman',
  
  // Cloud
  'amazonwebservices': 'AWS',
  'googlecloud': 'Google Cloud',
  
  // Design
  'photoshop': 'Photoshop'
};

function getTechName(url) {
  if (!url) return "Tecnologia";
  
  // Extrai o nome da tecnologia da URL
  // Ex: .../icons/css3/... -> css3
  const match = url.match(/devicon\/icons\/([^\/]+)/);
  if (!match) return "Tecnologia";
  
  const rawName = match[1].split('@')[0]; // Remove @latest se existir
  
  // Retorna o nome mapeado ou formata se não estiver no mapeamento
  if (techMapping[rawName]) {
    return techMapping[rawName];
  }
  
  // Formatação genérica
  return rawName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Processa os projetos
data.projects.forEach(project => {
  if (project.techs && Array.isArray(project.techs)) {
    project.techs = project.techs.map(tech => {
      const url = typeof tech === 'string' ? tech : (tech?.img || '');
      const techName = getTechName(url);
      
      return {
        img: url,
        tech_name: techName
      };
    });
  }
});

// Salva em um novo arquivo
fs.writeFileSync('novo-arquivo.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('✅ Arquivo salvo como: novo-arquivo.json');