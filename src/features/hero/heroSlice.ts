import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface HeroState {
  title: string;
  description: string;
  current: null | string;
  contact: string;
}

const initialState: HeroState = {
  title: "",
  description: "",
  current: "",
  contact: "",
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
      setCurrent: (state: { current: string | null; }, action: { payload: string; }) => {
          state.current = action.payload;
      },
      setContact: (state: { contact: string; }, action: { payload: string; }) => {
          state.contact = action.payload;
      }
    },
  });

  export const { setTitle, setDescription, setCurrent, setContact } = heroSlice.actions;

  export const selectHeroTitle = (state: RootState) => state.hero.title;
  export const selectHeroDescription = (state: RootState) => state.hero.description;
  export const selectHeroCurrent = (state: RootState) => state.hero.current;
  export const selectHeroContact = (state: RootState) => state.hero.contact;

  export default heroSlice.reducer;