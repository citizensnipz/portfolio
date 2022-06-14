import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import sideNavReducer from '../features/sideNav/sideNavSlice';
import heroReducer from '../features/hero/heroSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sideNav: sideNavReducer,
    hero: heroReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
