import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from '.';
import { Login } from '../../pages';

const initialState: IAuth = {
 loading: false,
  error: null,
}

const failure = (state: IAuth, action: PayloadAction<string>) => {
  state.loading = false
  state.error = action.payload
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Registration
    signUp(state, action) {
      state.loading = true
    },
    signUpSuccess(state, { payload }) {
      console.log("[Sign Up Success] : ", payload)
      state.loading = false
    },
    signUpFailure: failure,

    // Login
    login(state, action) {
      state.loading = true
    },
    loginSuccess(state, { payload }) {
      console.log("[Login Success] : ", payload)
      state.loading = false
    },
    loginFailure: failure,
  },
});

export default authSlice.reducer;
