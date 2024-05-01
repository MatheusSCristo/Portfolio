import Image from "next/image";

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
  "Jest"
];

const About = () => {
  return (
    <section
      id="about"
      className="xl:h-screen flex-col xl:flex-row  items-center flex gap-[10%] w-full p-6 "
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
        <h1 className="text-3xl md:text-5xl font-bold">Sobre mim</h1>
        <div className="text-xl md:text-2xl break-words xl:w-[700px] flex flex-col gap-4 font-text">
          <p>
            Embarcando no mundo do desenvolvimento de software em 2023, descobri
            uma paixão pela tecnologia e desde então tenho me dedicado
            incansavelmente para aprimorar meus conhecimentos diariamente.
          </p>
          <p>
            Considero-me ágil e perseverante ao aprender novas linguagens e
            tecnologias, sempre buscando desafios que me permitam colocar em
            prática minhas habilidades de desenvolvedor.
          </p>
          <p className="text-center">Minha stack é</p>
          <div className="flex 2xl:w-[700px] flex-wrap gap-1 2xl:gap-5 ">
            {stack.map((item) => (
              <div
                key={item}
                className="bg-[#8d8d8d] text-white 2xl:min-w-[100px] max-w-fit rounded-lg text-center px-2 py-1"
              > 
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
