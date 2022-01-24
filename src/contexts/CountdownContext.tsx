import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Countdown from "../components/Countdown";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
  isActive: boolean;
}

interface CountdownProviderProps {
  children: React.ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData);
export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60); // 0.05 minutos em seg
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let timeout: NodeJS.Timeout;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(timeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
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
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        resetCountdown,
        startCountdown,
        isActive,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
