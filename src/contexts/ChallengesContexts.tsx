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
};

export const ChallengesContext = createContext(
  {} as ChallengesContextData
);

export function ChallengesProvider({
  children,
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(4);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("Novo desafio começou");
    const challengeIndex = Math.floor(
      Math.random() * challenges.length
    );

    setActiveChallenge(challenges[challengeIndex]);
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
