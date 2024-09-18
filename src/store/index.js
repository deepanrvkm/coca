import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './slice/sessionSlice';

const store = configureStore({
  reducer: {
    user: sessionReducer,
  },
});

export default store;
