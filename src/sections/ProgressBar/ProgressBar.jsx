import { useEffect } from 'react';
import styles from './ProgressBarStyles.module.css';

const ProgressBar = () => {
  useEffect(() => {
    const progressBar = document.getElementById('progressbar');

    // Update the progress bar height based on scroll position
    function updateProgressBar() {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progressHeight =
        totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      progressBar.style.height = `${progressHeight}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Initialize progress bar on component mount

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <>
      {/* Progress bar element */}
      <div
        id="progressbar"
        className={styles.progressbar}
        role="progressbar"
        aria-label="Scroll progress"
      ></div>
      {/* Scroll path for visual effect */}
      <div className={styles.scrollPath} aria-hidden="true"></div>
    </>
  );
};

export default ProgressBar;
