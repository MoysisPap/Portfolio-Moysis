import styles from './ProjectsStyles.module.css';
import Yennenga from '../../assets/Yennenga.png';
import HiddenGems from '../../assets/hidden-gems.png';
import HyperFlix from '../../assets/HyperFlix.png';
import NewYorkTimes from '../../assets/NYT-90s.png';
import TaskZilla from '../../assets/TaskZilla.png';
import DoomQuiz from '../../assets/DoomQuiz.png';
import PAOKnews from '../../assets/PAOKnews.png';
import PAOKHub from '../../assets/PAOK-Hub.png';
import FlipCard from '../../common/FlipCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme } = useTheme(); // Access theme from context

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <FlipCard
          src={PAOKHub}
          liveLink="https://paok-hub.netlify.app/"
          githubLink="https://github.com/MoysisPap/PAOK-Hub"
          h4="PAOK-Hub"
          p="PAOK project vol.2 Built in React and Tailwind. Statistics, Gallery, Merchandise."
          theme={theme}
          aria-label="PAOK-Hub project card"
        />
        <FlipCard
          src={Yennenga}
          liveLink="https://yennengaprogress.netlify.app/"
          githubLink="https://github.com/hyper-island-collaboration-work/yennenga-progress-group-3"
          h4="Yennenga Progress"
          p="Project for a charity organization.Built with a UX team using React and Tailwind (Desktop version)."
          theme={theme}
          aria-label="Yennenga Progress project card"
        />
        <FlipCard
          src={HiddenGems}
          liveLink="https://hidden-gems-swe.netlify.app/"
          githubLink="https://github.com/MoysisPap/Hidden_Gems"
          h4="Hidden Gems"
          p="Explore hidden destinations in Sweden. Group project focused on SEO, performance, and accessibility."
          theme={theme}
          aria-label="Hidden Gems project card"
        />
        <FlipCard
          src={HyperFlix}
          liveLink="https://hyperflix-site.netlify.app/"
          githubLink="https://github.com/MoysisPap/Hyperflix"
          h4="HyperFlix"
          p="Movie database built with React. Group project, contribution to ideation and component creation."
          theme={theme}
          aria-label="HyperFlix project card"
        />
        <FlipCard
          src={NewYorkTimes}
          liveLink="https://90s-newspaper.netlify.app/"
          githubLink="https://github.com/MoysisPap/90-s-project"
          h4="90's NY Times"
          p="Retro newspaper showcasing major events of the 90s.Personal project built using HTML and CSS."
          theme={theme}
          aria-label="90's NY Times project card"
        />
        <FlipCard
          src={TaskZilla}
          liveLink="https://to-do-app-pern.netlify.app/"
          githubLink="https://github.com/PoppyRed91/to-do-app-pern"
          h4="TaskZilla"
          p="To-Do App built with the PERN stack. Group project, focused on backend development and database management."
          theme={theme}
          aria-label="TaskZilla project card"
        />
        <FlipCard
          src={DoomQuiz}
          liveLink="https://moysispap.github.io/Doom_Quiz/"
          githubLink="https://github.com/MoysisPap/Doom_Quiz"
          h4="Doom Quiz"
          p="Quiz game about Greek Mythology. Team project focused on practicing JavaScript and API integration."
          theme={theme}
          aria-label="Doom Quiz project card"
        />
        <FlipCard
          src={PAOKnews}
          liveLink="https://paok-news.netlify.app/"
          githubLink="https://github.com/MoysisPap/PAOK_news"
          h4="PAOK News"
          p="PAOK project vol.1 A website about football news. My first ever attempt to code, this is where everything started."
          theme={theme}
          aria-label="PAOK News project card"
        />
      </div>
    </section>
  );
}

export default Projects;
