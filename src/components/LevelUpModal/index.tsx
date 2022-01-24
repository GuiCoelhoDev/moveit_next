import styles from "./styles.module.scss";

import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export default function LevelUpModal() {
  const { level, setIsLevelUpModalOpen } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={() => setIsLevelUpModalOpen(false)} type="button">
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
