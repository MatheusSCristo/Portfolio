"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stack = [
  "Java",
  "Typescript",
  "Javascript",
  "Spring Boot",
  "NextJs",
  "ReactJs",
  "Tailwind",
  "Bootstrap",
  "PostgreSQL",
  "MySQL",
  "Jest",
];

const About = () => {
  const ref = useRef(null);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <section id="about" className="xl:h-screen w-full p-6 ">
      <motion.div
        ref={ref}
        className="flex flex-col xl:flex-row gap-8 lg:gap-[5%] xl:gap-[10%] items-center max-w-7xl mx-auto"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] relative shrink-0">
          <Image
            src={"/images/profileDesktop.svg"}
            alt="Profile"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col gap-5 items-center text-center xl:text-left xl:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            Sobre mim
          </h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl break-words max-w-4xl xl:max-w-[900px] flex flex-col gap-4 font-text px-4 xl:px-0">
            <p>
              Busco constantemente gerar valor por meio de soluções que impactam
              positivamente produtos, processos e pessoas. Mais do que domínio
              técnico, desenvolvi uma abordagem centrada em entender
              profundamente os problemas, atuando com clareza, organização e
              propósito em cada entrega.
            </p>
            <p>
              Sou movido por desafios e aprendizado contínuo. Tenho facilidade
              para me adaptar a diferentes contextos e colaborar de forma
              construtiva em equipes multidisciplinares. Acredito que escuta
              ativa, comunicação clara e pensamento crítico são fundamentais
              para o sucesso de qualquer projeto.
            </p>

            <p>
              Minha experiência inclui participação em iniciativas que
              resultaram em melhorias reais em sistemas acadêmicos e
              corporativos, desde a reformulação de interfaces até a
              implementação de funcionalidades que otimizam fluxos internos e
              ampliam a eficiência operacional. Em todos os contextos em que
              atuei, contribui com responsabilidade, proatividade e foco em
              qualidade, buscando sempre entregar soluções que façam sentido
              para o usuário final.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
