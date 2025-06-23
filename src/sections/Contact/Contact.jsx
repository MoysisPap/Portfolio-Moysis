import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactStyles.module.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sectionTitle",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sectionTitle",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className={styles.container} ref={sectionRef}>
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
