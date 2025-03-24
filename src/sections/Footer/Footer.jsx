import styles from "./FooterStyles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.container}>
      <p>
        &copy; {currentYear} Moysis Papadopoulos. <br />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
