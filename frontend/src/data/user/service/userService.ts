import { createAsyncThunk } from "@reduxjs/toolkit";
import { setNameData, setUserData, setToken, setLoggedIn, setLogInError, setUserProfile, setLogOut, setCheckApiError} from "../user.slice";
import { api } from "../api/userApi";

export const registerUserAsync = createAsyncThunk("user/register", async (data: any) => {

});

export const loginUserAsync = createAsyncThunk("user/login", async (data: any) => {

});

export const getUserProfileAsync = createAsyncThunk("user/getUserProfile", async(data: any) => {

});




