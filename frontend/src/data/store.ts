import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./user/user.slice";
import commentReducer from "./comment/comment.slice";

export const store = configureStore({
  reducer:{
    data: {
      user: userReducer,
      comment: commentReducer
    }
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

setupListeners(store.dispatch);
