"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
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
const technologies = [
  { icon: <DiJavascript1 />, name: "JS", color: "text-[#f7df1e]" },
  { icon: <SiVuedotjs />, name: "Vue", color: "text-[#4fc08d]" },
  { icon: <DiReact />, name: "React", color: "text-[#61dafb]" },
  { icon: <DiNodejsSmall />, name: "Node.JS", color: "text-[#339933]" },
  { icon: <SiExpress />, name: "Express", color: "text-white" },
  { icon: <DiMysql />, name: "MySQL", color: "text-[#4479a1]" },
  { icon: <DiJava />, name: "Java", color: "text-[#ED8B00]" },
  { icon: <SiSpring />, name: "Spring", color: "text-[#6DB33F]" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiDocker />, name: "Docker", color: "text-[#2496ED]" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-[#336791]" },
  { icon: <SiPrisma />, name: "Prisma", color: "text-[#FFF]" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-[#3178c6]" },
];

const Techs = () => {
  const ref = useRef(null);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <section id="about" className="xl:h-fit w-full p-6 xl:mb-16 ">
      <motion.div
        ref={ref}
        className="flex flex-col gap-[10%] items-center justify-center"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold ">
          Tecnologias
        </h1>
        <section className="text-white py-16 px-4 font-sans flex justify-center">
          <div className="flex w-[70%] flex-wrap justify-center gap-8 ">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <div className={`text-8xl mb-2 ${tech.color}`}>{tech.icon}</div>
                <p className="text-3xl">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default Techs;
