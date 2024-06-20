import { configureStore } from '@reduxjs/toolkit';
import radniReducer from '../features/radni/radniSlice';

export const store = configureStore({
  reducer: {
    radni: radniReducer,
  },
});