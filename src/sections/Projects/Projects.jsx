import React from 'react';
import styles from './ProjectsStyles.module.css';
import Yennenga from '../../assets/Yennenga.png';
import HiddenGems from '../../assets/hidden-gems.png';
import HyperFlix from '../../assets/HyperFlix.png';
import NewYorkTimes from '../../assets/NYT-90s.png';
import TaskZilla from '../../assets/TaskZilla.png'
import DoomQuiz from '../../assets/DoomQuiz.png'
import PAOK from '../../assets/PAOK.png'
import FlipCard from '../../common/FlipCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme } = useTheme(); // Use theme from context

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <FlipCard
          src={Yennenga}
          liveLink="https://yennengaprogress.netlify.app/"
          githubLink="https://github.com/hyper-island-collaboration-work/yennenga-progress-group-3"
          h3="Yennenga Progress"
          p="Real case project for a Charity Organization.Group project with UX designers made in React and Tailwind."
          theme={theme}
        />
        <FlipCard
          src={HiddenGems}
          liveLink="https://hidden-gems-swe.netlify.app/"  
          githubLink="https://github.com/MoysisPap/Hidden_Gems"
          h3="Hidden Gems"
          p="A website to explore hidden destinations in Sweden. A group project, mostly to practice SEO, performance and accessability."
          theme={theme}
        />
        <FlipCard
          src={HyperFlix}
          liveLink="https://hyperflix-site.netlify.app/"
          githubLink="https://github.com/MoysisPap/Hyperflix"
          h3="HyperFlix"
          p="Movie database with React.Group project, I personally contributed to ideation, layout and component creation."
          theme={theme}
        />
        <FlipCard
          src={NewYorkTimes}
          liveLink="https://90s-newspaper.netlify.app/"
          githubLink="https://github.com/MoysisPap/90-s-project"
          h3="90's NY Times"
          p="Retro newspaper about the biggest events of the 90's.Personal Project made with HTML and CSS."
          theme={theme}
        />
        <FlipCard
          src={TaskZilla}
          liveLink="https://to-do-app-pern.netlify.app/"
          githubLink="https://github.com/PoppyRed91/to-do-app-pern"
          h3="TaskZilla"
          p="A To Do App made with PERN stack, to practice backend and databases.Personal contribution throughout the project."
          theme={theme}
        />
        <FlipCard
          src={DoomQuiz}
          liveLink="https://moysispap.github.io/Doom_Quiz/"
          githubLink="https://github.com/MoysisPap/Doom_Quiz"
          h3="Doom Quiz"
          p="Quiz about Greek Mythology. Team project,to practice JS and API. Personal contribution throughout the project."
          theme={theme}
        />
        <FlipCard
          src={PAOK}
          liveLink="https://paok-news.netlify.app/"
          githubLink="https://github.com/MoysisPap/PAOK_news"
          h3="PAOK News"
          p="My first attempt at coding. It's good to remember where I started and see my progress over time."
          theme={theme}
        />
      </div>
      
    </section>
  );
}

export default Projects;

