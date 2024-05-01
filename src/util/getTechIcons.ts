export default (techs: string[]) => {
    type techsIconsType = {
      [tech: string]: string;
    };
  
    const techsIcons: techsIconsType = {
      React: "reactIcon",
      Java: "javaIcon",
      Javascript: "javascriptIcon",
      Next: "nextIcon",
      PostgreSQL: "postgreIcon",
      Sass: "sassIcon",
      SpringBoot: "springBootIcon",
      Tailwind: "tailwindIcon",
      Typescript: "typescriptIcon",
      Firebase:"firebaseIcon",
      Prisma:"prismaIcon"
    };
    return techs.map((tech) => {
      return techsIcons[tech];
    });
  };