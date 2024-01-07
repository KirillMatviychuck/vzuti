import { configureStore } from '@reduxjs/toolkit';

import { bootsReducer } from './slices/boots/bootsSlice';

export const store = configureStore({
    reducer: {
        bootsSlice: bootsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;