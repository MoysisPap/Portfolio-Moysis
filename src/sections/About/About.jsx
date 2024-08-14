import styles from './AboutStyles.module.css';

function About() {
  return (
    <section aria-labelledby="about-heading">
      <div className={styles.about}>
        <h1 id="about-heading">Who Am I?</h1>
        <div className={styles.aboutInfo}>
          <p>
            Hi there! My name is Moysis Papadopoulos, and I&apos;ve been calling
            Stockholm home for a few years now. I&apos;m new to Frontend
            development and currently studying at Hyper Island.
          </p>
          <p>
            I&apos;ve always been curious about coding since I was young, but my
            journey led me down different paths. With a degree in tourism and
            experience as a Store Manager here in Stockholm, I&apos;ve gained
            diverse skills and perspectives.
          </p>
          <p>
            Now, I&apos;ve decided to switch careers and pursue something I
            really enjoy! I am hungry to learn, ambitious to grow, and
            determined to succeed!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
