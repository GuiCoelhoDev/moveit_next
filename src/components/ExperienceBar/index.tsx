export const ExperienceBar = () => {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }}></div>
        <span className="current-experience" style={{ left: "50%" }}>
          600 XP
        </span>
      </div>
      <span>1250 xp</span>
    </header>
  );
};

export default ExperienceBar;
