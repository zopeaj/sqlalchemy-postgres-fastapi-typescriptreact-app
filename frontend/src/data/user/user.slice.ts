import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user.state";
import { RootState } from "../store";
import { registerUserAsync, loginUserAsync, getUserProfileAsync } from "./service/userService";

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNameData: (state: RootState, action: PayloadAction) => {
      state.data.user.username = action.payload.name
    },
    setUserData: (state: RootState, action: PayloadAction) => {
       state = { ...state, user: action.payload }
    },
    setToken: (state: RootState, action: PayloadAction) => {
      state.data.user.token = action.payload.token;
    },
    setLoggedIn: (state: RootState, action: PayloadAction) => {
      state.data.user.isLoggedIn = action.payload.isLoggedIn;
    },
    setLogInError: (state: RootState, action: PayloadAction) => {
      state.data.user.error.logInError = action.payload.logInError;
    },
    setRegistrationError: (state: RootState, action: PayloadAction) => {
      state.data.user.error.registrationError = action.payload.registrationError
    }
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(registerUserAsync.pening, (state, action) => {

      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {

      })
      .addCase(registerUserAsync.rejected, (state, action) => {

      })

    builder
      .addCase(loginUserAsync.pending, (state, action) => {

      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {

      })
      .addCase(loginUserAsync.rejected, (state, action) => {

      })

    builder
      .addCase(getUserProfileAsync.pending, (state, action) => {

      })
      .addCase(getUserProfileAsync.fulfilled, (state, action) => {

      })
      .addCase(getUserProfileAsync.rejected, (state, action) => {

      })
  }
})

export const { setNameData, setUserData, setToken, setLoggedIn, setLogInError, setCheckApiError, setUserProfile, setLogOut } = userSlice.actions;
export default userSlice.reducer;

