import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("matheus.sdcp@gmail.com");
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const openGithub = () => {
    window.open("https://github.com/MatheusSCristo", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://linkedin.com/in/matheuscristodev", "_blank");
  };

  return (
    <>
      <footer className="flex flex-col items-center py-10 text-black " id="contact">
        <h1 className="text-5xl font-bold">Contato</h1>
        <div className="flex gap-8 mt-8">
          <button
            onClick={copyEmailToClipboard}
            className="text-5xl hover:text-gray-300 transition-colors cursor-pointer"
            title="Copiar email"
          >
            <MdEmail />
          </button>
          <button
            onClick={openGithub}
            className="text-5xl hover:text-gray-300 transition-colors cursor-pointer"
            title="Visitar GitHub"
          >
            <FaGithub />
          </button>
          <button
            onClick={openLinkedin}
            className="text-5xl hover:text-gray-300 transition-colors cursor-pointer"
            title="Visitar LinkedIn"
          >
            <FaLinkedin />
          </button>
        </div>
      </footer>

      {/* Popup de notificação */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white text-black px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-fade-in">
          <MdEmail className="text-xl" />
          <span className="text-2xl ">Email copiado para a área de transferência!</span>
        </div>
      )}
    </>
  );
};

export default Contact;
