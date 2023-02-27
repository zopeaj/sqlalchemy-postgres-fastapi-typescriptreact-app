import { createEntityAdapter } from "@reduxjs/toolkit";
import { Comment, UserError } from "../../interfaces/index";

export interface UserState {
  userId: number;
  username: string;
  isLoggedIn: null;
  token: string;
  userProfile: null;
  comment: Comment[];
  error: UserError
}

export const initialState: UserState = createEntityAdapter.getInitialState({
  userId: 0,
  username: '',
  isLoggedIn: false,
  token: '',
  userProfile: null,
  comment: [],
  userError: null
});

