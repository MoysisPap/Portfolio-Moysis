import styles from './FlipCardStyles.module.css';

function FlipCard({ src, liveLink, githubLink, h4, p, theme }) {
  return (
    <div className={styles.flipCard}>
      {/* Container for flip effect */}
      <div className={styles.flipCardInner} data-theme={theme}>
        {/* Front side: Displays project image */}
        <div className={styles.flipCardFront}>
          <img className={styles.flipCardImage} src={src} alt={`${h4} logo`} />
        </div>

        {/* Back side: Displays project details and links */}
        <div className={styles.flipCardBack}>
          <h4>{h4}</h4>
          <p className={styles.flipCardParagraph}>{p}</p>
          <div className={styles.flipCardButtons}>
            <a
              href={liveLink}
              className={styles.flipCardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${h4} Live Site`}
            >
              Live
            </a>
            <a
              href={githubLink}
              className={styles.flipCardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${h4} GitHub Repository`}
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
