import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section aria-labelledby="about-heading">
      <div className={styles.about}>
        <h2 id="about-heading">Who Am I?</h2>
        <div className={styles.aboutInfo}>
          <p>
            Hi there! My name is Moysis Papadopoulos, and I&apos;ve been calling
            Stockholm home for a few years now.
          </p>
          <p>
            {" "}
            I enjoy building user-friendly web applications. My focus is on
            clean, efficient code using JavaScript and React, with emphasis on
            accessibility. I&apos;ve learned that strong teamwork is essential
            for a company&apos;s success, and I enjoy contributing to that
            collaborative environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
