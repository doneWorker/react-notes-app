import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../models/Note';
import { v4 as uuidv4 } from 'uuid';

export interface NotesState {
    all: Array<Note>;
    selectedId: string | null;
    searchString: string;
}

const initialState: NotesState = {
    all: [],
    selectedId: null,
    searchString: '',
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

            if (target && action.payload.title !== undefined)
                target.title = action.payload.title;
        },

        updateDesc: (state, action: PayloadAction<UpdateNotePayload>) => {
            const target = state.all.find(
                (note) => note.id === action.payload.id
            );

            if (target && action.payload.desc !== undefined)
                target.desc = action.payload.desc;
        },

        deleteNote: (state, action: PayloadAction<string>) => {
            state.all = state.all.filter((note) => note.id !== action.payload);
        },

        setNeedle: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        },

        addToFavorites: (state, action: PayloadAction<string>) => {
            let toBeFavorite = state.all.find(
                (note) => note.id === action.payload
            );

            toBeFavorite && (toBeFavorite.favorite = true);
        },
    },
});

export const { create, setNeedle, focus, updateDesc, updateTitle, deleteNote } =
    notesSlice.actions;

export default notesSlice.reducer;
