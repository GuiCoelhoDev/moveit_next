import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import styles from "./styles.module.scss";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;
