"use client"
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center flex-col h-screen ">
      <Link href="#contact" className="uppercase text-xl md:text-2xl absolute top-5 right-5 cursor-pointer font-bold">
        FALE COMIGO
      </Link>
      <h1 className="text-5xl md:text-8xl font-bold">Matheus Senas</h1>
      <h2><ReactTyped strings={["Desenvolvedor Full Stack","Javascript | Java"]} typeSpeed={100} loop className="text-2xl md:text-3xl font-bold"/></h2>
      <div className="flex gap-2 mt-2">
        <Link href="https://github.com/MatheusSCristo" target="_blank" className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] relative">
          <Image
            src={"/icons/githubIcon.svg"}
            fill
            className="object-cover"
            alt="Github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/matheuscristodev/"  target="_blank" className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] relative">
          <Image
            src={"/icons/linkedinIcon.svg"}
            fill
            className="object-cover"
            alt="Linkedin"
          />
        </Link>
      </div>
     
    </section>
  );
};

export default Home;
