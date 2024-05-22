"use client";
import getTechIcons from "@/util/getTechIcons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type propsType = {
  project: {
    title: string;
    description: string;
    techs: string[];
    deploy: string;
    github: string;
    image: string;
  };
  index: number;
};

const Card = ({ project, index }: propsType) => {
  const ref = useRef(null);
  
  return (
    <div ref={ref} className="overflow-x-hidden">
      <motion.div
        className={`gap-5 ${
          index % 2 != 0 && "flex-row-reverse "
        } flex p-5 rounded-lg `}
        initial={{ opacity: 0,x: index % 2?-500:500 }}
        whileInView={{ opacity: 1,x:0 }}
        viewport={{margin:"-150px 0px -400px 0px"}}
        transition={{duration:1.2,ease:"easeInOut"}}
        
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="w-[600px] h-[350px] relative rounded-3xl hover:scale-110 duration-500">
            <Image
              src={project.image}
              alt="Project image"
              fill
              className="object-contain rounded-3xl"
              priority
            />
          </div>

          <div className="flex gap-2">
            <Link
              href={project.github}
              target="_blank"
              className="gap-2 font-bold text-2xl px-4 py-1 border border-gray-400 flex items-center justify-center rounded-lg"
            >
              GitHub
              <FaGithub />
            </Link>
            <Link
              href={project.deploy}
              target="_blank"
              className="gap-2 font-bold text-2xl px-4 py-1 border border-gray-400 flex items-center justify-center rounded-lg"
            >
              Deploy
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-[600px] gap-5">
          <div className="gap-2 flex items-center flex-col">
            <h1 className="text-4xl font-bold ">{project.title}</h1>
            <p className="text-xl font-text">{project.description}</p>
          </div>
          <div className="flex gap-2">
            {getTechIcons(project.techs).map((tech) => (
              <div
                className="w-[50px] h-[50px] relative"
                key={project.title + tech.title}
                title={tech.title}
              >
                <Image
                  src={`/icons/${tech.icon}.svg`}
                  alt="Tech icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
