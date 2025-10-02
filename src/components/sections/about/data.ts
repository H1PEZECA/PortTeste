import { Code2, GraduationCap, Target, Users } from "lucide-react";
import { Achievement, DialogAchievements } from "./types";

export const achievements: Achievement[] = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Cursando Ciência da Computação",
  },
  {
    icon: Code2,
    title: "Stack",
    description: "Experiência em projetos web e mobile",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Sempre buscando aprender novas tecnologias",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho bem em equipe e projetos colaborativos",
  },
];

export const dialogAchievements: DialogAchievements = {
  Formação: {
    mode: "Bacharelado",
    course: "Ciência da Computação",
    start: "2024/1",
    end: "2027/2",
    institution: "FAESA",
    currentPeriod: "4º Período",
    status: "Cursando",
  },
  Stack: {
    frontend: {
      language: "JavaScript / TypeScript",
      framework: "Next.js / React",
      styling: "Tailwind CSS / Framer Motion",
      tools: "Vercel / Vite",
    },
    backend: {
      language: "Java / Node.js",
      framework: "Spring Boot / Express",
      database: "PostgreSQL / SQL Developer",
      tools: "Docker / Postman / Git",
      api: "GraphQL / REST",
      infra: "AWS / Railway",
    },
    description:
      "Desenvolvimento de aplicações web fullstack com foco em performance e usabilidade.",
  },
  Foco: {
    description:
      "Sempre buscando aprender novas tecnologias, mantendo-me atualizado com as tendências do mercado e aplicando boas práticas de desenvolvimento.",
  },
  Colaboração: {
    description:
      "Trabalho bem em equipe e projetos colaborativos, utilizando metodologias ágeis e ferramentas de versionamento para garantir entregas de qualidade.",
  },
};
