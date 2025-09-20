import { IconType } from "react-icons";
import {
  FaJava,
  FaJs,
  FaReact,
  FaSass
} from "react-icons/fa";
import {
  SiFirebase,
  SiJunit5,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs
} from "react-icons/si";

const getTechIcons = (techs: string[]) => {
    type techsIconsType = {
      [tech: string]: { icon: IconType, title: string };
    };
  
    const techsIcons: techsIconsType = {
      React: { icon: FaReact, title: "React" },
      Java: { icon: FaJava, title: "Java" },
      Node: { icon: SiNodedotjs, title: "Node.js" },
      mySQL: { icon: SiMysql, title: "MySQL" },
      Javascript: { icon: FaJs, title: "JavaScript" },
      Next: { icon: SiNextdotjs, title: "Next" },
      PostgreSQL: { icon: SiPostgresql, title: "PostgreSQL" },
      Sass: { icon: FaSass, title: "Sass" },
      SpringBoot: { icon: SiSpringboot, title: "Spring Boot" },
      Tailwind: { icon: SiTailwindcss, title: "TailwindCSS" },
      Typescript: { icon: SiTypescript, title: "Typescript" },
      Firebase: { icon: SiFirebase, title: "Firebase" },
      Prisma: { icon: SiPrisma, title: "Prisma" },
      JUnit: { icon: SiJunit5, title: "JUnit" },
      SpringSecurity: { icon: SiSpringsecurity, title: "Spring Security" },
      Vue:{icon:SiVuedotjs,title:"Vue.js"},
    };
    return techs.map((tech) => {
      return techsIcons[tech];
    });
  };

export default getTechIcons;