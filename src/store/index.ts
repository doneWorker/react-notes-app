import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import filterReducer from './filterSlice';
import { loadFromLS, saveToLS } from '../utils/storage-utils';

const STATE_KEY = 'state';

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        filter: filterReducer,
    },
    preloadedState: loadFromLS(STATE_KEY),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(() => {
    saveToLS(STATE_KEY, store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
