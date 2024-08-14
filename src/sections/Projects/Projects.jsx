import styles from './ProjectsStyles.module.css';
import Yennenga from '../../assets/Yennenga.png';
import HiddenGems from '../../assets/hidden-gems.png';
import HyperFlix from '../../assets/HyperFlix.png';
import NewYorkTimes from '../../assets/NYT-90s.png';
import TaskZilla from '../../assets/TaskZilla.png';
import DoomQuiz from '../../assets/DoomQuiz.png';
import PAOK from '../../assets/PAOK.png';
import FlipCard from '../../common/FlipCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme } = useTheme(); // Access theme from context

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <FlipCard
          src={Yennenga}
          liveLink="https://yennengaprogress.netlify.app/"
          githubLink="https://github.com/hyper-island-collaboration-work/yennenga-progress-group-3"
          h3="Yennenga Progress"
          p="Real case project for a charity organization. Group project with UX designers made in React and Tailwind."
          theme={theme}
          aria-label="Yennenga Progress project card"
        />
        <FlipCard
          src={HiddenGems}
          liveLink="https://hidden-gems-swe.netlify.app/"
          githubLink="https://github.com/MoysisPap/Hidden_Gems"
          h3="Hidden Gems"
          p="Explore hidden destinations in Sweden. Group project focusing on SEO, performance, and accessibility."
          theme={theme}
          aria-label="Hidden Gems project card"
        />
        <FlipCard
          src={HyperFlix}
          liveLink="https://hyperflix-site.netlify.app/"
          githubLink="https://github.com/MoysisPap/Hyperflix"
          h3="HyperFlix"
          p="Movie database with React. Contributed to ideation, layout, and component creation."
          theme={theme}
          aria-label="HyperFlix project card"
        />
        <FlipCard
          src={NewYorkTimes}
          liveLink="https://90s-newspaper.netlify.app/"
          githubLink="https://github.com/MoysisPap/90-s-project"
          h3="90's NY Times"
          p="Retro newspaper about the biggest events of the 90's. Personal project using HTML and CSS."
          theme={theme}
          aria-label="90's NY Times project card"
        />
        <FlipCard
          src={TaskZilla}
          liveLink="https://to-do-app-pern.netlify.app/"
          githubLink="https://github.com/PoppyRed91/to-do-app-pern"
          h3="TaskZilla"
          p="To Do App using the PERN stack. Focused on backend and databases."
          theme={theme}
          aria-label="TaskZilla project card"
        />
        <FlipCard
          src={DoomQuiz}
          liveLink="https://moysispap.github.io/Doom_Quiz/"
          githubLink="https://github.com/MoysisPap/Doom_Quiz"
          h3="Doom Quiz"
          p="Quiz about Greek Mythology. Team project to practice JS and API integration."
          theme={theme}
          aria-label="Doom Quiz project card"
        />
        <FlipCard
          src={PAOK}
          liveLink="https://paok-news.netlify.app/"
          githubLink="https://github.com/MoysisPap/PAOK_news"
          h3="PAOK News"
          p="First coding project. Reflects early coding efforts and progress over time."
          theme={theme}
          aria-label="PAOK News project card"
        />
      </div>
    </section>
  );
}

export default Projects;
