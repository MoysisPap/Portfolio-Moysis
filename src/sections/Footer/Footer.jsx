import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      {/* Footer content with copyright notice */}
      <p>
        &copy; 2024 Moysis Papadopoulos. <br />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
