import React from 'react';
import styles from './ProjectsStyles.module.css';
import Yennenga from '../../assets/Yennenga.png';
import HiddenGems from '../../assets/hidden-gems.png';
import HyperFlix from '../../assets/HyperFlix.png';
import NewYorkTimes from '../../assets/NYT-90s.png';
import FlipCard from '../../common/FlipCard';

function Projects() {
  // Assume we have a way to determine the theme
  const theme = 'light'; // Change to 'dark' for dark theme

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <FlipCard
          src={Yennenga}
          link="https://github.com/hyper-island-collaboration-work/yennenga-progress-group-3"
          h3="Yennenga Progress"
          p="Charity Organization"
          theme={theme}
        />
        <FlipCard
          src={HiddenGems}
          link="https://github.com/MoysisPap/Hidden_Gems"
          h3="Hidden Gems"
          p="Travel Guide"
          theme={theme}
        />
        <FlipCard
          src={HyperFlix}
          link="https://github.com/MoysisPap/Hyperflix"
          h3="HyperFlix"
          p="Movie Database"
          theme={theme}
        />
        <FlipCard
          src={NewYorkTimes}
          link="https://github.com/MoysisPap/90-s-project"
          h3="90's NY Times"
          p="Retro Newspaper"
          theme={theme}
        />
      </div>
    </section>
  );
}

export default Projects;