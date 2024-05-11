export default (techs: string[]) => {
    type techsIconsType = {
      [tech: string]:{icon: string, title: string};
    };
  
    const techsIcons: techsIconsType = {
      React: {icon:"reactIcon", title:"React"},
      Java: {icon:"javaIcon", title:"Java"},
      Javascript: {icon:"javascriptIcon", title:"JavaScript"},
      Next: {icon:"nextIcon", title:"Next"},
      PostgreSQL: {icon:"postgreIcon", title:"PostgreSQL"},
      Sass: {icon:"sassIcon", title:"Sass"},
      SpringBoot: {icon:"springBootIcon", title:"Spring Boot"},
      Tailwind: {icon:"tailwindIcon", title:"TailwindCSS"},
      Typescript: {icon:"typescriptIcon", title:"Typescript"},
      Firebase: {icon:"firebaseIcon", title:"Firebase"},
      Prisma: {icon:"prismaIcon", title:"Prisma"},
      JUnit: {icon:"junitIcon", title:"JUnit"},
      SpringSecurity:{icon:"springSecurityIcon",title:"Spring Security"}
    };
    return techs.map((tech) => {
      return techsIcons[tech];
    });
  };