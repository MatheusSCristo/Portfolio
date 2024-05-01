import { HiOutlineChevronDown } from "react-icons/hi";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

const Index = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <Home />
        <About />
        <Projects />
        <div className="sticky bottom-5 md:bottom-10  ">
          <HiOutlineChevronDown size={50} color="white" />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Index;
