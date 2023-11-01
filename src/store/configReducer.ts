import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer/appReducer';

const rootReducer = combineReducers({
  appReducer,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
