import Cookies from "js-cookie";
import React, {
  Children,
  createContext,
  useEffect,
  useState,
} from "react";
import challenges from "../../challenges.json";

type ChallengesProviderProps = {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  challengesComplted: number;
};

type Challenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};

type ChallengesContextData = {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
};

export const ChallengesContext = createContext(
  {} as ChallengesContextData
);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesComplted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
    console.log("level", level);
  }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    if (activeChallenge != null) {
      new Audio("/notification.mp3").play();

      if (Notification.permission == "granted") {
        new Notification("Ciclo finalizado, bora se exercitar 💪🏼", {
          body: `Valendo ${activeChallenge.amount} XP!`,
        });
      }
    }
  }, [activeChallenge]);

  function levelUp() {
    setLevel(level + 1);
  }

  function challengesCompletedUp() {
    setChallengesCompleted(challengesCompleted + 1);
  }

  function startNewChallenge() {
    console.log("Novo desafio começou");
    const challengeIndex = Math.floor(Math.random() * challenges.length);
    setActiveChallenge(challenges[challengeIndex]);
    // const challenge = activeChallenge;
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    setActiveChallenge(null);
    challengesCompletedUp();

    let { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
