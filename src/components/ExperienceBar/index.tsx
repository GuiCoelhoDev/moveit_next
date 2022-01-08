import { Bar } from "./styles";

export const ExperienceBar = () => {
  return (
    <header>
      <Bar>
        <span className="left_xp">0 xp</span>
        <div>
          <div className="div_div" style={{ width: "50%" }}></div>
          <span className="current_experience">600 XP</span>
        </div>
        <span className="right_xp">1250 xp</span>
      </Bar>
    </header>
  );
};

export default ExperienceBar;
