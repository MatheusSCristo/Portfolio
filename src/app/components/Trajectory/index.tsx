"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Trajectory = () => {
  const ref = useRef(null);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <section
      id="trajectory"
      className="w-full p-6 xl:h-screen flex items-center my-16"
    >
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto w-full"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold text-center mb-16 text-white">
          Minha jornada
        </h1>

        <div className="relative">
          {/* Bloco Principal da Empresa com Ramificação */}
          <div className="timeline-item relative pl-6 md:pl-10 pb-16">
            {/* Ponto e linha principal (cargo atual) */}
            <div className="timeline-dot absolute left-0.5 md:left-1 top-2 w-4 h-4 rounded-full bg-green-500 z-10 border-2 border-green-400 shadow-lg shadow-green-500/20"></div>
            <div className="timeline-line absolute left-2 md:left-2.5 top-6 w-0.5 h-full bg-zinc-600"></div>

            {/* CARD 1: Cargo Atual (Desenvolvedor Júnior) */}
            <div className="bg-gradient-to-br from-green-900/30 to-zinc-800/50 backdrop-blur-sm p-6 md:p-8 
            rounded-xl border border-green-500/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-green-400">
                  Desenvolvedor Júnior
                </h2>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-green-500/20 text-green-500 border border-green-500/30 self-start sm:self-auto">
                  <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                  Atual
                </span>
              </div>
              <h3 className="text-lg md:text-xl text-green-300 mb-4">
                Solução Tributos - Natal, RN | Jul, 2025 - Presente
              </h3>
              <p className="text-zinc-300 mb-6 text-base md:text-xl">
                Responsável pela criação e evolução de funcionalidades em um
                sistema de gestão tributária municipal. Desenvolvo soluções
                robustas e escaláveis, aplicando boas práticas de
                desenvolvimento para garantir qualidade, performance e
                manutenibilidade no ambiente de produção..
              </p>
              {/* TECNOLOGIAS GERAIS DA EMPRESA */}
              <div className="flex flex-wrap gap-3 text-xl">
                <span className="badge-green">React</span>
                <span className="badge-green">TypeScript</span>
                <span className="badge-green">Node.js</span>
                <span className="badge-green">JavaScript</span>
                <span className="badge-green">Git</span>
              </div>
            </div>

            <div className="relative pl-6 md:pl-10 mt-8">
              <div className="absolute left-[-13px] md:left-[-17px] top-4 w-4 md:w-5 h-8 border-l-2 border-b-2 border-zinc-600 rounded-bl-lg"></div>

              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 ">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-300">
                    Estagiário Desenvolvimento
                  </h2>
                  <span className="text-lg font-bold bg-zinc-700 text-gray-400 px-3 py-1 rounded-full self-start sm:self-auto">
                    Concluído
                  </span>
                </div>
                <h3 className="text-lg md:text-xl text-zinc-400 mb-4">
                  Dez, 2024 - Jul, 2025
                </h3>
                <p className="text-zinc-300 text-base md:text-xl">
                  Participei da migração de sistemas legados desenvolvidos em
                  Delphi para uma arquitetura moderna baseada em React e
                  Node.js. Atuei na reconstrução de interfaces e fluxos de
                  funcionalidades existentes, contribuindo diretamente para a
                  modernização de um sistema de consultoria tributária voltado
                  para prefeituras.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item relative pl-6 md:pl-10 pb-16">
            <div className="timeline-dot absolute left-0.5 md:left-1 top-2 w-4 h-4 rounded-full bg-blue-500 z-10 border-2 border-blue-400 shadow-lg shadow-blue-500/20"></div>
            <div className="timeline-line absolute left-2 md:left-2.5 top-6 w-0.5 h-full bg-zinc-600"></div>
            <div className="relative pl-4 md:pl-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-zinc-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 ">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-400">
                    Bolsista em Projeto de Pesquisa
                  </h2>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-blue-500/20 text-blue-500 border border-blue-500/30 self-start sm:self-auto">
                    <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Atual
                  </span>
                </div>
                <h3 className="text-base md:text-lg text-blue-300 mb-4">
                  Instituto Metrópole Digital - UFRN | Dez, 2024 - Presente
                </h3>
                <p className="text-zinc-300 mb-4 text-base md:text-xl">
                  Atuo no desenvolvimento de um sistema institucional voltado ao
                  planejamento de disciplinas do curso de Bacharelado em
                  Tecnologia da Informação da UFRN, visando otimizar a alocação
                  de turmas e horários.
                </p>
                <div className="flex flex-wrap gap-3 text-xl">
                  <span className="badge-green">Vue</span>
                  <span className="badge-green">JavaScript</span>
                  <span className="badge-green">PostgreSQL</span>
                  <span className="badge-green">Java</span>
                  <span className="badge-green">Spring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Trajectory;
