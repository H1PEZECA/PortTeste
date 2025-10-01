# 🚀 Portfólio Pessoal - Estudante de Ciência da Computação

Um portfólio moderno e responsivo desenvolvido com Next.js, Shadcn/UI e React Bits, com animações suaves e design clean e tech.

## ✨ Características

- **Design Modern**: Interface clean com tema dark e animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações Avançadas**: Utilizando Framer Motion e React Bits
- **Background Animado**: Efeito Beams customizado para um visual tech
- **Componentes Reutilizáveis**: Arquitetura modular com Shadcn/UI
- **Performance Otimizada**: Built com Next.js 15 e TypeScript

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes UI
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 🚀 Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em desenvolvimento**:
```bash
npm run dev
```

3. **Abrir no navegador**:
Acesse [http://localhost:3000](http://localhost:3000)

## 🎨 Como Personalizar

### 1. Informações Pessoais

**Header** (`src/components/header.tsx`):
- Altere os links para suas redes sociais (GitHub, LinkedIn, Email)
- Modifique o texto do logo/nome

**Seção Hero** (`src/components/sections/hero-section.tsx`):
- Edite o nome e descrição principal
- Altere o link do CV no botão "Download CV"
- Modifique as animações de texto conforme preferir

### 2. Seção Sobre

**About Section** (`src/components/sections/about-section.tsx`):
- Atualize o texto sobre você
- Modifique as estatísticas (anos de estudo, projetos, etc.)
- Personalize os cards de conquistas

### 3. Habilidades

**Skills Section** (`src/components/sections/skills-section.tsx`):
- Adicione/remova tecnologias do array `skills`
- Ajuste os níveis de proficiência (1-100)
- Modifique as categorias conforme suas especialidades
- Atualize as tecnologias que está aprendendo

### 4. Projetos

**Projects Section** (`src/components/sections/projects-section.tsx`):

Para adicionar seus projetos, edite o array `projects`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição detalhada do projeto",
    image: "/caminho-para-imagem.jpg", // Coloque as imagens em public/
    demoUrl: "https://link-para-demo.com",
    githubUrl: "https://github.com/seu-usuario/repo", // Opcional
    technologies: ["React", "Next.js", "TypeScript"],
  },
  // Adicione mais projetos...
];
```

**Para adicionar imagens dos projetos**:
1. Coloque suas imagens na pasta `public/`
2. Referencie como `/nome-da-imagem.jpg` no campo `image`
3. As imagens serão automaticamente otimizadas pelo Next.js

### 5. Cores e Tema

O tema pode ser personalizado alterando as classes Tailwind nos componentes:
- **Cor primária**: `blue-500/600/700` (pode alterar para outras cores)
- **Background**: `slate-900/950` 
- **Texto**: `slate-300/400` para textos secundários, `white` para títulos

### 6. Animações

As animações podem ser personalizadas nos componentes:
- **SplitText**: Ajuste `delay` e `duration` para velocidades diferentes
- **Framer Motion**: Modifique as variantes de animação
- **Beams**: Customize no arquivo `src/components/ui/beams.tsx`

## 📱 Layout das Seções

O portfólio está estruturado da seguinte forma:
1. **Header** - Navegação fixa no topo
2. **Hero** - Seção principal com apresentação
3. **About** - Sobre você e suas conquistas
4. **Skills** - Suas habilidades técnicas
5. **Projects** - Galeria de projetos (acima do rodapé)
6. **Footer** - Informações de rodapé

## 🔧 Scripts Disponíveis

- `npm run dev` - Execução em desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Executa a versão de produção
- `npm run lint` - Verifica código com ESLint

## 📦 Deploy

Recomendado fazer deploy na Vercel:

1. Suba o código para o GitHub
2. Conecte seu repositório na Vercel
3. A Vercel detectará automaticamente que é um projeto Next.js
4. Seu site estará online!

## 🎯 Próximos Passos

1. **Substitua as informações de exemplo pelas suas**
2. **Adicione suas imagens de projetos**
3. **Personalize as cores conforme sua preferência**
4. **Ajuste as animações ao seu gosto**
5. **Faça o deploy e compartilhe!**

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para usar como base para seu próprio portfólio!

---

**Dica**: Lembre-se de atualizar regularmente com novos projetos e habilidades conforme sua jornada em Ciência da Computação evolui! 🚀
