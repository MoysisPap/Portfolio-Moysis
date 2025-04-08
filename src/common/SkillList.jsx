// SkillList component displays an icon and a skill name

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt={`${skill} icon`} loading="lazy" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
