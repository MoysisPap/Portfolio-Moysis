import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className="sectionTitle">Skills</h2>
      {/* Skill list section 1 */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr aria-hidden="true" /> {/* Decorative horizontal rule */}
      {/* Skill list section 2 */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr aria-hidden="true" /> {/* Decorative horizontal rule */}
      {/* Skill list section 3 */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Accessibility" />
        <SkillList src={checkMarkIcon} skill="SEO" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
      </div>
    </section>
  );
}

export default Skills;