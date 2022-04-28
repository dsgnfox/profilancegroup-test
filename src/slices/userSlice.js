import { createSlice } from '@reduxjs/toolkit';
import * as role from '../users/role';

const initialState = {
  role: role.GUEST,
  login: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { role, login } = action.payload;
      state.role = role;
      state.login = login;
    },
    logOut: (state) => {
      state.role = role.GUEST;
      state.login = null;
    }
  }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;