import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.scss";
export function Profile() {
  let { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/GuiCoelhoDev.png"
        alt="Guilherme Minervino"
      />
      <div>
        <strong>Guilherme Coelho</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
