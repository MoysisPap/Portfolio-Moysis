import styles from './ProjectsStyles.module.css';
import Yennenga from '../../assets/Yennenga.png';
import HiddenGems from '../../assets/hidden-gems.png';
import HyperFlix from '../../assets/HyperFlix.png';
import NewYorkTimes from '../../assets/NYT-90s.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Yennenga}
          link="https://github.com/hyper-island-collaboration-work/yennenga-progress-group-3"
          h3="Yannenga Progress"
          p="Charity Organization"
        />
        <ProjectCard
          src={HiddenGems}
          link="https://github.com/MoysisPap/Hidden_Gems"
          h3="Hidden Gems"
          p="Travel Guide"
        />
        <ProjectCard
          src={HyperFlix}
          link="https://github.com/MoysisPap/Hyperflix"
          h3="HyperFlix"
          p="Movie Database"
        />
        <ProjectCard
          src={NewYorkTimes}
          link="https://github.com/MoysisPap/90-s-project"
          h3="90's NY Times"
          p="Retro Newspaper"
        />
      </div>
    </section>
  );
}

export default Projects;