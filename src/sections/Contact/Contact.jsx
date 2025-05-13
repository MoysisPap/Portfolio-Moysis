import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className="sectionTitle">Contact</h2>
      <form action="https://formspree.io/f/xeojgawz" method="POST">
        <div className="formGroup">
          <label htmlFor="name" className={styles.visuallyHidden}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" className={styles.visuallyHidden}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" className={styles.visuallyHidden}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
