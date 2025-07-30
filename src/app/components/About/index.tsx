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
        className="flex flex-col xl:flex-row gap-[10%] items-center"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] relative">
          <Image
            src={"/images/profileDesktop.svg"}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold">
            Sobre mim
          </h1>
          <div className="text-xl md:text-2xl break-words xl:w-[900px] flex flex-col gap-4 font-text ">
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
