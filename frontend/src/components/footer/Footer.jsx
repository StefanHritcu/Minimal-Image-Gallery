import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Sito realizzato con passione da <strong>Stefan Hritcu</strong>.
      </p>
      <p>© {currentYear} Stefan Hritcu. Tutti i diritti riservati.</p>
    </footer>
  );
};

export default Footer;
