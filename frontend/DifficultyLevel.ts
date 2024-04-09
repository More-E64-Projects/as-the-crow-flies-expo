export type DifficultyLevel = {
    guessesPerLocation: number;
    marginForError: number;
};

export const easy: DifficultyLevel = {
    guessesPerLocation: 10,
    marginForError: 0.3
};

export const medium: DifficultyLevel = {
    guessesPerLocation: 5,
    marginForError: 0.3
};

export const hard: DifficultyLevel = {
    guessesPerLocation: 3,
    marginForError: 0.3
};

