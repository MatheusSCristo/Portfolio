"use client";
import { motion } from "framer-motion";
import { memo, ReactElement, useMemo } from "react";
import {
  DiJava,
  DiJavascript1,
  DiMysql,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSpring,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

interface TechItemProps {
  icon: ReactElement;
  name: string;
  color: string;
  variants: any;
}

// Componente memoizado para cada item de tecnologia
const TechItem = memo(({ icon, name, color, variants }: TechItemProps) => (
  <motion.div
    variants={variants}
    className="flex flex-col items-center justify-center cursor-pointer"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.15 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className={`text-8xl mb-2 ${color}`}>
      {icon}
    </div>
    <p className="text-4xl">{name}</p>
  </motion.div>
));

TechItem.displayName = 'TechItem';

const Techs = memo(() => {
  // Memoizar o array de tecnologias para evitar re-criação desnecessária
  const technologies = useMemo(() => [
    { icon: <DiJavascript1 />, name: "JS", color: "text-[#f7df1e]" },
    { icon: <SiVuedotjs />, name: "Vue", color: "text-[#4fc08d]" },
    { icon: <DiReact />, name: "React", color: "text-[#61dafb]" },
    { icon: <DiNodejsSmall />, name: "Node.JS", color: "text-[#339933]" },
    { icon: <SiExpress />, name: "Express", color: "text-black" },
    { icon: <DiMysql />, name: "MySQL", color: "text-[#4479a1]" },
    { icon: <DiJava />, name: "Java", color: "text-[#ED8B00]" },
    { icon: <SiSpring />, name: "Spring", color: "text-[#6DB33F]" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-black" },
    { icon: <SiDocker />, name: "Docker", color: "text-[#2496ED]" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-[#336791]" },
    { icon: <SiPrisma />, name: "Prisma", color: "text-black" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-[#3178c6]" },
  ], []);

  // Otimizar animações para melhor performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Reduzido de 0.6
        staggerChildren: 0.05, // Reduzido de 0.1
        delayChildren: 0.1, // Reduzido de 0.2
      },
    },
  }), []);

  const titleVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -20 }, // Reduzido de -30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduzido de 0.6
        ease: "easeOut",
      },
    },
  }), []);

  const techVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.9 }, // Simplificado, removido y
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Reduzido de 0.5
        ease: "easeOut",
      },
    },
  }), []);

  return (
    <section id="about" className="xl:h-fit w-full p-6 xl:mb-16">
      <motion.div
        className="flex flex-col gap-[10%] items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.h1 
          className="text-3xl md:text-5xl xl:text-7xl font-bold"
          variants={titleVariants}
        >
          Tecnologias
        </motion.h1>
        
        <motion.section 
          className="text-black py-16 px-4 font-sans flex justify-center"
          variants={containerVariants}
        >
          <div className="flex w-[70%] flex-wrap justify-center gap-8">
            {technologies.map((tech) => (
              <TechItem
                key={tech.name}
                icon={tech.icon}
                name={tech.name}
                color={tech.color}
                variants={techVariants}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
});

Techs.displayName = 'Techs';

export default Techs;
