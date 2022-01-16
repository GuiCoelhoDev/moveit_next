import { useState } from "react";
import styles from "./styles.module.scss";

export default function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] =
    useState(true);

  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.hasActiveChallenge}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="halter" />
            <h1>Exercite-se</h1>
            <p>
              É agora diegão, bora lá. Caminhe por 3 minutos
              e faça 10 push-ups
            </p>
          </main>

          <footer>
            <button
              type="button"
              id="Falhei"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              id="Completei"
              className={styles.challengeSucceddedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.hasNotActiveChallenge}>
          <strong>
            Finalize um ciclo para receber um desafio
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="level-up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
