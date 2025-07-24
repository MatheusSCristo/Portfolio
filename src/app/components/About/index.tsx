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
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold">Sobre mim</h1>
          <div className="text-xl md:text-2xl break-words xl:w-[900px] flex flex-col gap-4 font-text">
            <p>
              Desde que iniciei minha trajetória no desenvolvimento de software
              em 2023, venho cultivando não só o domínio técnico, mas também
              habilidades essenciais que impulsionam meu crescimento contínuo
              como profissional.
            </p>
            <p>
              Sou uma pessoa curiosa e autodidata, com facilidade para aprender
              rapidamente e me adaptar a novas situações. Encaro desafios como
              oportunidades de evolução e busco sempre entender o problema além
              da solução técnica, prezando pela clareza, organização e propósito
              no que construo. Tenho um forte senso de responsabilidade e
              comprometimento com entregas de qualidade. Gosto de colaborar,
              ouvir diferentes pontos de vista e contribuir ativamente em
              equipes, sempre com foco em agregar valor ao produto e à
              experiência do usuário.
            </p>

            <p>
              Acredito que a comunicação eficaz e o pensamento crítico são tão
              importantes quanto saber programar. Minha trajetória tem sido
              marcada pela perseverança, iniciativa e vontade genuína de crescer
              — características que carrego em cada projeto, seja em ambientes
              acadêmicos, corporativos ou pessoais.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
