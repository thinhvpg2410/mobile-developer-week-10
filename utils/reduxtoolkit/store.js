// store.js
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';

const store = configureStore({
    reducer: {
        jobs: jobReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
