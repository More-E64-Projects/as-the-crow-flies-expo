export type DifficultyLevel = {
    name: string;
    guessesPerLocation: number;
    marginForError: number;
};

export const easy: DifficultyLevel = {
    name: 'easy',
    guessesPerLocation: 10,
    marginForError: 0.3
};

export const medium: DifficultyLevel = {
    name: 'medium',
    guessesPerLocation: 5,
    marginForError: 0.1
};

export const hard: DifficultyLevel = {
    name: 'hard',
    guessesPerLocation: 3,
    marginForError: 0.05
};

