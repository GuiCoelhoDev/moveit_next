import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.scss";
export const ExperienceBar = () => {
  const { experienceToNextLevel, currentExperience } =
    useContext(ChallengesContext);

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  console.log(percentToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span
          id="currentExperience"
          className={styles.currentExperience}
          style={{ left: "50%" }}
        >
          {`${currentExperience} XP`}
        </span>
      </div>
      <span id="experienceToNextLevel">{`${experienceToNextLevel} XP`}</span>
    </header>
  );
};

export default ExperienceBar;
