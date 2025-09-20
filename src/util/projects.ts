const projects = [
  {
    title: "MatriculaAi",
    description:
      "Projeto em desenvolvimento para otimizar o planejamento acadêmico de estudantes universitários. A aplicação possibilita que os usuários cadastrem disciplinas obrigatórias e eletivas, oferecendo uma experiência intuitiva e eficiente para apoiar decisões acadêmicas de forma mais informada.\n\nO sistema está integrado à API do SIGAA, garantindo a segurança dos dados dos alunos da UFRN e assegurando alta performance mesmo ao lidar com milhares de informações. Além disso, conta com integração ao Power BI, permitindo a visualização estratégica de dados acadêmicos e facilitando a criação de turmas para os próximos semestres.\n\nO projeto está sendo desenvolvido com Spring Boot no backend e Vue.js no frontend, tecnologias modernas que asseguram escalabilidade, desempenho e uma interface intuitiva.",
    techs: ["SpringBoot", "Vue", "PostgreSQL"],
    deploy: "https://matriculaai.imd.ufrn.br/",
    github: "https://github.com/bora-things",
    image: "/images/MatriculaAi.png",
  },
  {
    title: "Sigest Online",
    description:
      "O SIGEST é uma plataforma desenvolvida para gerenciar, controlar e auditar as transferências constitucionais da União e dos Estados, com foco em confiabilidade e escalabilidade. A solução é construída com Node.js no backend e React no frontend, adotando uma arquitetura moderna capaz de lidar com milhões de registros fiscais de contribuintes em mais de 20 municípios.\n\nPara garantir segurança e integridade dos dados, o sistema implementa boas práticas de autenticação, controle de acesso e armazenamento seguro. Sua arquitetura foi projetada para ser altamente performática, assegurando eficiência no processamento de grandes volumes de informações fiscais e suporte à expansão para novos municípios.",
    techs: ["Node", "React", "mySQL"],
    deploy: "https://sigest.online",
    github: "",
    image: "/images/sigest.png",
  },
  {
    title: "53w53",
    description:
      "Recriação fiel do design do site 53w53.com desenvolvida como projeto de estudos para aprofundar meus conhecimentos em Next.js. O foco principal foi explorar as funcionalidades de renderização do lado do servidor (SSR) e entender na prática como o framework otimiza performance e SEO.\n\nUtilizei Tailwind CSS para dominar sua metodologia utility-first, criando layouts complexos e totalmente responsivos de forma eficiente. O projeto também me permitiu experimentar com animações fluidas e transições modernas para criar uma experiência de usuário mais envolvente.",
    techs: ["Next", "Tailwind", "Typescript"],
    deploy: "https://53w53.vercel.app/",
    github: "https://github.com/MatheusSCristo/53w53",
    image: "/images/53w53.png",
  },
  {
    title: "Solar Panels",
    description:
      "Landing page interativa para uma empresa fictícia de painéis solares, desenvolvida como laboratório de aprendizado para dominar animações web modernas. O projeto me permitiu explorar profundamente o Framer Motion, criando transições fluidas e micro-interações que melhoram significativamente a experiência do usuário.\n\nImplementei TypeScript em conjunto com React para praticar tipagem estática e entender suas vantagens no desenvolvimento de aplicações mais robustas. Utilizei Sass como pré-processador CSS para criar estilos organizados e modulares, além do react-scroll para implementar navegação suave entre seções.",
    techs: ["Sass", "React", "Typescript"],
    deploy: "https://animation-solar-panels.vercel.app/",
    github: "https://github.com/MatheusSCristo/animation-solar-panels",
    image: "/images/SolarPanels.png",
  },
];

export default projects;
