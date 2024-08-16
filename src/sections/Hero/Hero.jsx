import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import downloadIcon from '../../assets/downloadIcon.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  // Determine the icon sources based on the current theme
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {/* Profile picture with alt text */}
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Moysis Papadopoulos"
        />
        {/* Icon to toggle between light and dark themes */}
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode toggle icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Moysis
          <br />
          Papadopoulos
        </h1>
        <h3>Frontend Developer</h3>
        <span>
          {/* Link to GitHub profile */}
          <a
            href="https://github.com/MoysisPap"
            target="_blank"
            rel="noopener noreferrer" // Security enhancement for external links
            aria-label="Visit GitHub profile"
          >
            <img
              className={styles.socialMediaIcon}
              src={githubIcon}
              alt="GitHub icon"
            />
          </a>
          {/* Link to LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/moysis-papadopoulos/"
            target="_blank"
            rel="noopener noreferrer" // Security enhancement for external links
            aria-label="Visit LinkedIn profile"
          >
            <img
              className={styles.socialMediaIcon}
              src={linkedinIcon}
              alt="LinkedIn icon"
            />
          </a>
        </span>
        {/* Link to download resume */}
        <a href={CV} download>
          <button className="hover">
            Resume <img src={downloadIcon} alt="Download" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
