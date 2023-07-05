import { configureStore } from '@reduxjs/toolkit';
import magicSetReducer from './magicSetSlice';

export const store = configureStore({
    reducer: magicSetReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;