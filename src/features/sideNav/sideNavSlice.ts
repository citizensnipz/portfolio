import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface SideNavState {
  menu: [""];
}

const initialState: SideNavState = {
  menu: [""],
};



export const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState,
    reducers: {
      setMenu: (state: { menu: string[]; }, action: { payload: string[]; }) => {
        state.menu = action.payload;
      },
    },
  });

  export const { setMenu } = sideNavSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectSideNav = (state: RootState) => state.sideNav.menu;
  
  // We can also write thunks by hand, which may contain both sync and async logic.
  // Here's an example of conditionally dispatching actions based on current state.
  
  
  export default sideNavSlice.reducer;