import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface HeroState {
  title: "";
  description: "";
  current: "";
}

const initialState: HeroState = {
  title: "",
  description: "",
  current: "",
};

export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
      setTitle: (state: { title: string; }, action: { payload: string; }) => {
        state.title = action.payload;
      },
      setDescription: (state: { description: string; }, action: { payload: string; }) => {
          state.description = action.payload;
      },
      setCurrent: (state: { current: string; }, action: { payload: string; }) => {
          state.current = action.payload;
      },
    },
  });

  export const { setTitle, setDescription, setCurrent } = heroSlice.actions;

  export const selectHeroTitle = (state: RootState) => state.hero.title;
  export const selectHeroDescription = (state: RootState) => state.hero.description;
  export const selectHeroCurrent = (state: RootState) => state.hero.current;

  export default heroSlice.reducer;