import React, { createContext, useState, ReactNode } from 'react';
import { Level, edinburghLandmarks } from './levels';
import { DifficultyLevel, easy, hard, medium } from './DifficultyLevel';


//1 - whenever a piece of state is added, add a property for both the state and the set function here, following the same structure as seen below
type StateObject = {
    guessesRemaining: number;
    setGuessesRemaining: (number: number) => void;
    currentLevel: Level;
    setCurrentLevel: (level: Level) => void;
    targetName: string;
    setTargetName: (name: string) => void;
    userName: string; // Player's name -  userName
    setUserName: (name: string) => void;
    difficultyLevel: DifficultyLevel;
    setDifficultyLevel: (difficultyLevel: DifficultyLevel) => void;
    score: number;
    setScore: (number: number) => void;
};

export const AppContext = createContext<StateObject | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    //2 - then add the state as normal
    const [currentLevel, setCurrentLevel] = useState(edinburghLandmarks);
    const [targetName, setTargetName] = useState("");
    const [userName, setUserName] = useState("");
    const [difficultyLevel, setDifficultyLevel] = useState(medium);
    const [guessesRemaining, setGuessesRemaining] = useState(difficultyLevel.guessesPerLocation);
    const [score, setScore] = useState(0)
    // console.log("AppContext  - ", userName)

    const state: StateObject = {
        //3 - then also put it here, so that can be accessed from any screen in the stack
        guessesRemaining,
        setGuessesRemaining,
        currentLevel,
        setCurrentLevel,
        targetName,
        setTargetName,
        userName,
        setUserName,
        difficultyLevel,
        setDifficultyLevel,
        score,
        setScore
    };

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};
