"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Trajectory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(
    scrollYProgress,
    [0, 0.95],
    ["0%", "100%"]
  );

  // Calcular quando cada card está "ativo" baseado no progresso do scroll
  const card1Progress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const card2Progress = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const card3Progress = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  const cardVariants = {
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, y: 50, scale: 0.9 },
  };

  return (
    <section
      id="trajectory"
      className="w-full p-6 xl:min-h-screen flex items-center my-16"
    >
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto w-full"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-2xl md:text-5xl xl:text-7xl font-bold text-center text-black">
            Minha jornada
          </h1>
        </div>
        <div className="relative">
          {/* Linha de fundo fixa */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-100"></div>
          {/* Linha animada que cresce com o scroll */}
          <motion.div
            className="absolute left-1/2 w-0.5 bg-emerald-300 origin-top z-10"
            style={{ height: timelineHeight }}
          ></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg shadow-green-500/30 border border-green-200 relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                style={{
                  backgroundColor: useTransform(
                    card1Progress,
                    [0, 1],
                    ["rgb(156, 163, 175)", "rgb(16, 185, 129)"]
                  ),
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: useTransform(
                      card1Progress,
                      [0, 1],
                      ["rgb(156, 163, 175)", "rgb(16, 185, 129)"]
                    ),
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.7)",
                      "0 0 0 10px rgba(16, 185, 129, 0)",
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-4xl font-semibold text-gray-900">
                    Desenvolvedor Júnior
                  </h2>
                  <p className="text-lg font-text text-gray-500">
                    Solução Tributos • Presencial • Natal, RN
                  </p>
                  <p className="text-lg font-text text-gray-500">
                    Jun. 2025 - Presente
                  </p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-xl font-semibold px-3 py-1 rounded-full">
                  Atual
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-xl font-text list-disc list-inside">
                <li>
                  Responsável pela criação e evolução de funcionalidades em
                  sistema de gestão de impostos municipais
                </li>
                <li>
                  Desenvolvimento de soluções robustas e escaláveis para gestão
                  tributária
                </li>
                <li>
                  Aplicação de boas práticas de desenvolvimento para garantir
                  código limpo
                </li>
                <li>
                  Foco em performance e manutenibilidade no ambiente de produção
                </li>
                <li>Trabalho em equipe utilizando metodologias ágeis</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-md font-text  font-medium px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-100 text-gray-700 text-md font-text font-medium px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="bg-gray-100 text-gray-700 text-md font-text font-medium px-3 py-1 rounded-full">
                  Node.js
                </span>
                <span className="bg-gray-100 text-gray-700 text-md font-text font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-100 text-gray-700 text-md font-text font-medium px-3 py-1 rounded-full">
                  Git
                </span>
              </div>
            </motion.div>
            <div></div>
            <div></div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <motion.div
                className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                style={{
                  backgroundColor: useTransform(
                    card2Progress,
                    [0, 1],
                    ["rgb(156, 163, 175)", "rgb(16, 185, 129)"]
                  ),
                }}
              ></motion.div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-4xl font-semibold text-gray-900">
                    Estagiário Desenvolvimento
                  </h2>
                  <p className="text-xl font-text text-gray-500">
                    Solução Tributos
                  </p>
                  <p className="text-xl font-text text-gray-500">
                    Dez. 2024 - Maio. 2025 • Natal, RN
                  </p>
                </div>
                <span className="bg-gray-100 text-gray-700 text-xl font-semibold px-3 py-1 rounded-full">
                  Concluído
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-xl font-text list-disc list-inside">
                <li>
                  Participei da migração de sistemas legados desenvolvidos em
                  Delphi para uma arquitetura moderna baseada em React e
                  Node.js.
                </li>
                <li>
                  Migração de sistemas legados Delphi para React e Node.js
                </li>
                <li>
                  Reconstrução da interface e fluxos da funcionalidades
                  existentes
                </li>
                <li>
                  Contribuição para modernização de sistema de consulta de
                  impostos municipais
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 text-md font-text">
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  Node.js
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  Git
                </span>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg shadow-green-500/30 border border-green-200 relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
                style={{
                  backgroundColor: useTransform(
                    card3Progress,
                    [0, 1],
                    ["rgb(156, 163, 175)", "rgb(16, 185, 129)"]
                  ),
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: useTransform(
                      card3Progress,
                      [0, 1],
                      ["rgb(156, 163, 175)", "rgb(16, 185, 129)"]
                    ),
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.7)",
                      "0 0 0 10px rgba(16, 185, 129, 0)",
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-4xl font-semibold text-gray-900">
                    Bolsista em Projeto de Pesquisa
                  </h2>
                  <p className="text-xl font-text text-gray-500">
                    Instituto Metrópole Digital - UFRN
                  </p>
                  <p className="text-xl font-text text-gray-500">
                    Nov. 2024 - Remoto • Natal, RN
                  </p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-xl font-semibold px-3 py-1 rounded-full">
                  Atual
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-xl font-text list-disc list-inside">
                <li>
                  Desenvolvimento de um sistema institucional voltado ao
                  gerenciamento de turmas do curso de Tecnologia da Informação
                  da UFRN.
                </li>
                <li>
                  Planejamento e desenvolvimento de sistema institucional
                  integrado ao SIGAA
                </li>
                <li>
                  Construção de solução visual responsiva em Vue.js para o
                  gerenciamento eficiente de turmas de alunos.
                </li>
                <li>Trabalho com banco de dados PostgreSQL e backend Java</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 text-md font-text">
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  Vue
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  PostgreSQL
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  Java
                </span>
                <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full">
                  Spring
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Trajectory;
