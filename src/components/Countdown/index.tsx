import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
export function Countdown() {
  // time é uma variável importante
  const [time, setTime] = useState(0.05 * 60); // 0.05 minutos em seg
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondLeft, secondRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  let timeout: NodeJS.Timeout;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(timeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }
  /* // O timer está demorando 1 segundo para parar. Quando eu clico em abandonar ciclo, o resetCountdown 
  é chamado. O reset countdown desativa o ative. Dai chama o useEffect que vai ver que o isActive ta falso apesar do
  time ser positivo ainda. Então ele vai parar de executar o timeout. Porém, o timeout vai ser executado uma última vez
  existe uma variavel que cancela o timeout e ele deixa de ser executado, o clearTimeout*/
  useEffect(() => {
    if (isActive && time > 0) {
      //ciclo em andamento
      timeout = setTimeout(() => {
        //demora 1 seg x vai executar dps de 1seg. quando chega nessa linha ele já executou
        setTime(time - 1);
      }, 1000);
    }

    if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
    }
  }, [isActive, time]);

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
