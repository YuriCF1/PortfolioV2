// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

// Carrega o JSON original
// eslint-disable-next-line @typescript-eslint/no-require-imports
const data = require('./projects_en.json');

// Carrega as traduções em inglês
// eslint-disable-next-line @typescript-eslint/no-require-imports
const englishTranslations = require('./trad.json');

// Verifica se os projetos têm o mesmo número
if (data.projects.length !== englishTranslations.projects.length) {
  console.error('❌ Erro: O número de projetos não coincide!');
  console.log(`Original: ${data.projects.length} projetos`);
  console.log(`Traduções: ${englishTranslations.projects.length} projetos`);
  process.exit(1);
}

// Substitui as chaves title, description e altImg
data.projects.forEach((project, index) => {
  const englishProject = englishTranslations.projects[index];
  
  if (englishProject) {
    project.title = englishProject.title;
    project.description = englishProject.description;
    project.altImg = englishProject.altImg;
  } else {
    console.warn(`⚠️  Aviso: Não há tradução para o projeto ${index + 1}: ${project.title}`);
  }
});

// Salva em um novo arquivo
fs.writeFileSync(
  'projects-english.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

console.log('✅ Arquivo salvo como: projects-english.json');
console.log(`✅ ${data.projects.length} projetos traduzidos com sucesso!`);