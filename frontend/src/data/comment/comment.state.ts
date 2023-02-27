import { createEntityAdapter } from "@reduxjs/toolkit";

export interface CommentState {
  userId: number;
  content: string;
  date: string;
}

export const initialState: CommentState = createEntityAdapter.getInitialState({
  userId: 0,
  content: '',
  date: ''
});

