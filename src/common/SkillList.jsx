// SkillList component displays an icon and a skill name

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
