import styles from "./styles.module.scss";
import { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
export function Countdown() {
  // time é uma variável importante

  const {
    minutes,
    seconds,
    hasFinished,
    resetCountdown,
    startCountdown,
    isActive,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondLeft, secondRight] = String(seconds)
    .padStart(2, "0")
    .split("");
  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          onClick={resetCountdown}
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            //o contador esta diminuindo ou em 00 pois ele continua ativo mesmo em 00
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              // o contaodor está em 25 (não foi iniciado)
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar um Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Countdown;
