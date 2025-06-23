import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.fromTo(
        ".skillsTitle",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skillsTitle",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Animate each skill row sliding from left or right
      const rows = gsap.utils.toArray(".skillRow");

      rows.forEach((row, index) => {
        const direction = index % 2 === 0 ? -100 : 100;

        gsap.fromTo(
          row,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className={styles.container}
      aria-labelledby="skills-heading"
      ref={sectionRef}
    >
      <h2 id="skills-heading" className="sectionTitle skillsTitle">
        Skills
      </h2>

      {/* Skill list row 1 */}
      <div className={`${styles.skillList} skillRow`}>
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

      {/* Skill list row 2 */}
      <div className={`${styles.skillList} skillRow`}>
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

      {/* Skill list row 3 */}
      <div className={`${styles.skillList} skillRow`}>
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
