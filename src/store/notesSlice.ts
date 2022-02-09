import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../models/Note';
import { v4 as uuidv4 } from 'uuid';

export interface NotesState {
    all: Array<Note>;
    selectedId: string | null;
}

const initialState: NotesState = {
    all: [],
    selectedId: null,
};

interface UpdateNotePayload {
    id: string;
    title?: string;
    desc?: string;
}

export const createEmptyNote = (): Note => ({
    id: uuidv4(),
    title: '',
    desc: '',
    date: Date.now(),
});

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        create: (state) => {
            const emptyNote = createEmptyNote();
            state.all.push(emptyNote);
        },

        focus: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        },

        updateTitle: (state, action: PayloadAction<UpdateNotePayload>) => {
            const target = state.all.find(
                (note) => note.id === action.payload.id
            );

            target &&
                action.payload.title !== undefined &&
                (target.title = action.payload.title);
        },

        updateDesc: (state, action: PayloadAction<UpdateNotePayload>) => {
            const target = state.all.find(
                (note) => note.id === action.payload.id
            );

            target &&
                action.payload.desc !== undefined &&
                (target.desc = action.payload.desc);
        },

        deleteNote: (state, { payload }: PayloadAction<string>) => {
            state.all = state.all.filter((note) => note.id !== payload);
        },

        toggleFavorites: (state, action: PayloadAction<string>) => {
            const toBeFavorite = state.all.find(
                (note) => note.id === action.payload
            );

            toBeFavorite && (toBeFavorite.favorite = !toBeFavorite.favorite);
        },
    },
});

export const {
    create,
    focus,
    updateDesc,
    updateTitle,
    deleteNote,
    toggleFavorites,
} = notesSlice.actions;

export default notesSlice.reducer;
