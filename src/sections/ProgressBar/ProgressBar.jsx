import { useEffect } from 'react';
import styles from './ProgressBarStyles.module.css';

const ProgressBar = () => {
  useEffect(() => {
    let progress = document.getElementById('progressbar');

    function updateProgressBar() {
      let totalHeight = document.body.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        let progressHeight = (window.scrollY / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
      } else {
        progress.style.height = "0%";
      }
    }

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Call it once when the component mounts

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <>
      <div id="progressbar" className={styles.progressbar}></div>
      <div className={styles.scrollPath}></div>
    </>
  );
};

export default ProgressBar;

