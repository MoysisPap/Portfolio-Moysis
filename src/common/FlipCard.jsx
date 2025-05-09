import styles from "./FlipCardStyles.module.css";

function FlipCard({ src, liveLink, githubLink, h3, p, theme }) {
  return (
    <div className={styles.flipCard}>
      {/* Container for flip effect */}
      <div className={styles.flipCardInner} data-theme={theme}>
        {/* Front side: Displays project image */}
        <div className={styles.flipCardFront}>
          <img
            className={styles.flipCardImage}
            src={src}
            alt={`${h3} logo`}
            loading="lazy"
          />
        </div>

        {/* Back side: Displays project details and links */}
        <div className={styles.flipCardBack}>
          <h3>{h3}</h3>
          <p className={styles.flipCardParagraph}>{p}</p>
          <div className={styles.flipCardButtons}>
            <a
              href={liveLink}
              className={styles.flipCardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${h3} Live Site`}
              role="button"
            >
              Live
            </a>
            <a
              href={githubLink}
              className={styles.flipCardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${h3} GitHub Repository`}
              role="button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
