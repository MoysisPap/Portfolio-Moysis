import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section
      id="skills"
      className={styles.container}
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="sectionTitle">
        Skills
      </h2>
      {/* Skill list section 1 */}
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="HTML"
          alt="Checkmark for HTML skill"
        />
        <SkillList
          src={checkMarkIcon}
          skill="CSS"
          alt="Checkmark for CSS skill"
        />
        <SkillList
          src={checkMarkIcon}
          skill="JavaScript"
          alt="Checkmark for JavaScript skill"
        />
      </div>
      <hr aria-hidden="true" />
      {/* Skill list section 2 */}
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="React"
          alt="Checkmark for React skill"
        />
        <SkillList
          src={checkMarkIcon}
          skill="Tailwind CSS"
          alt="Checkmark for Tailwind CSS skill"
        />
      </div>
      <hr aria-hidden="true" />
      {/* Skill list section 3 */}
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="Accessibility"
          alt="Checkmark for Accessibility skill"
        />
        <SkillList
          src={checkMarkIcon}
          skill="SEO"
          alt="Checkmark for SEO skill"
        />
        <SkillList
          src={checkMarkIcon}
          skill="GitHub"
          alt="Checkmark for GitHub skill"
        />
      </div>
    </section>
  );
}

export default Skills;
