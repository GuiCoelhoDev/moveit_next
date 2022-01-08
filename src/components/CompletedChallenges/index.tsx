import styles from "./styles.module.scss";

export function CompletedChallenges() {
  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;
