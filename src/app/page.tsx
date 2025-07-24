'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Techs from "./components/Techs";
import Trajectory from "./components/Trajectory";

const Index = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Para a animação quando estiver a 200px do final da página
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 200;
      setIsNearBottom(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="relative flex flex-col items-center text-white">
        <Home />
        <About />
        <Techs/>
        <Trajectory />
        <Projects />
        <motion.div 
          animate={!isNearBottom ? {
            y: [0, -20, 0],
          } : {
            y: 0
          }}
          transition={{
            duration: 1,
            repeat: !isNearBottom ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="sticky bottom-5 md:bottom-10 cursor-pointer">
          <HiOutlineChevronDown size={50} color="white" />
        </motion.div>
      </div>
      <Contact />
    </>
  );
};

export default Index;
