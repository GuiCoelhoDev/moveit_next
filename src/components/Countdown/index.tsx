import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
export function Countdown() {
  const [time, setTime] = useState(25 * 60); // 25 minutos em seg
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <button
        onClick={startCountdown}
        type="button"
        className={styles.countdownButton}
      >
        Iniciar um Ciclo
      </button>
    </div>
  );
}

export default Countdown;
