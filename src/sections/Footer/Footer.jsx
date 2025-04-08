import styles from "./FooterStyles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className={styles.container}
      aria-label="Website footer"
    >
      <p>Designed & Built by Moysis Papadopoulos © {currentYear}</p>
    </footer>
  );
}

export default Footer;
