/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice } from '@reduxjs/toolkit';
import * as userRoles from '../users/role';

const initialState = {
  role: userRoles.GUEST,
  login: null,
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
      state.role = userRoles.GUEST;
      state.login = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
