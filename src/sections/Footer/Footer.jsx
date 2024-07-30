import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Moysis Papadopoulos. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;