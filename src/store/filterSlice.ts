import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = 'ALL' | 'FAVORITE';

export interface FilterState {
    type: FilterType;
    searchString: string;
}
const initialState: FilterState = {
    type: 'ALL',
    searchString: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        showFavorites: (state) => {
            state.type = 'FAVORITE';
        },

        showAll: (state) => {
            state.type = 'ALL';
        },

        setSearchString: (state, { payload }: PayloadAction<string>) => {
            state.searchString = payload;
        },
    },
});

export const { showAll, showFavorites, setSearchString } = filterSlice.actions;

export default filterSlice.reducer;
