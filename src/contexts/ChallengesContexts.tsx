import React, { Children, createContext, useState } from "react";
import challenges from "../../challenges.json";

type ChallengesProviderProps = {
  children: React.ReactNode;
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
};

export const ChallengesContext = createContext(
  {} as ChallengesContextData
);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(10);
  const [challengesCompleted, setChallengesCompleted] = useState(2);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("Novo desafio começou");
    const challengeIndex = Math.floor(Math.random() * challenges.length);

    setActiveChallenge(challenges[challengeIndex]);
  }

  function resetChallenge() {
    setActiveChallenge(null);
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
