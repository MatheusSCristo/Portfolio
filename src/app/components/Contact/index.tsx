const Contact = () => {
  return (
    <footer className="flex flex-col items-center py-10 " id="contact">
      <h1 className="text-5xl font-bold">Contato</h1>
      <div className="bg-black w-[250px] h-[2px]" />
      <div className="gap-3 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl">Me mande um email</h2>
          <h3 className="text-2xl">cristo.matheus@outlook.com</h3>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl">Você pode me encontrar aqui</h2>
          <h3 className="text-2xl ">github.com/MatheusSCristo</h3>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl">Ou aqui</h2>
          <h3 className="text-2xl ">linkedin.com/in/matheuscristodev</h3>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
