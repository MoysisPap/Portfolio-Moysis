import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutStyles.module.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading with fade-up + scale
      gsap.fromTo(
        ".aboutTitle",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".aboutTitle",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Animate first paragraph
      gsap.fromTo(
        ".aboutText1",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".aboutText1",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Animate second paragraph
      gsap.fromTo(
        ".aboutText2",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".aboutText2",
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
    <section aria-labelledby="about-heading" ref={sectionRef}>
      <div className={styles.about}>
        <h2 id="about-heading" className="aboutTitle">
          Who Am I?
        </h2>
        <div className={styles.aboutInfo}>
          <p className="aboutText1">
            Hi there! My name is Moysis Papadopoulos, and I&apos;ve been calling
            Stockholm home for a few years now.
          </p>
          <p className="aboutText2">
            I enjoy building user-friendly web applications. My focus is on
            clean, efficient code using JavaScript and React, with an emphasis
            on accessibility. I&apos;ve learned that strong teamwork is
            essential for a company&apos;s success, and I enjoy contributing to
            that collaborative environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
