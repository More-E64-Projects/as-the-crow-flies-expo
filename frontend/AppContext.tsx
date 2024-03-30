import React, { createContext, useState, ReactNode } from 'react';
import { Level, edinburghLandmarks } from './levels';

type StateObject = {
    guessesRemaining: number;
    setGuessesRemaining: (number: number) => void;
    currentLevel: Level;
    setCurrentLevel: (level: Level) => void;
    targetName: string;
    setTargetName: (name: string) => void;
};

export const AppContext = createContext<StateObject | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [guessesRemaining, setGuessesRemaining] = useState(5);
    const [currentLevel, setCurrentLevel] = useState(edinburghLandmarks);
    const [targetName, setTargetName] = useState("");

    const state: StateObject = {
        guessesRemaining,
        setGuessesRemaining,
        currentLevel,
        setCurrentLevel,
        targetName,
        setTargetName
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};
