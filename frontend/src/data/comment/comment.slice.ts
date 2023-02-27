import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./comment.state";
import { createCommentAsync, updateCommentAsync, deleteCommentAsync } from "./service/commentService";
import { createResponse, updateResponse, deleteResponse } from "./";
import { RootState } from "../store";

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {

  },
  extraReducer: (builder: any) => {
    builder
      .addCase(createCommentAsync.pending, (state: RootState, payload:PayloadAction<createResponse>) => {

      })
      .addCase(createCommentAsync.fulfilled, (state: RootState, payload:PayloadAction<createResponse>) => {

      })
      .addCase(createCommentAsync.rejected, (state: RootState, payload: PayloadAction<createResponse>) => {

      });

    builder
      .addCase(updateCommentAsync.pending, (state: RootState, payload:PayloadAction<updateResponse>) => {

      })
      .addCase(updateCommentAsync.fulfilled, (state: RootState, payload: PayloadAction<updateResponse>) => {

      })
      .addCase(updateCommentAsync.rejected, (state: RootState, payload: PayloadAction<updateResponse>) => {

      })

    builder
      .addCase(deleteResponse.pending, (state: RootState, payload: PayloadAction<deleteResponse>) => {

      })
      .addCase(deleteResponse.pending, (state: RootState, payload: PayloadAction<deleteResponse>) => {

      })
      .addCase(deleteResponse.rejected, (state: RootState, payload: PayloadAction<deleteResponse>) => {

      })
  }
});

export default commentSlice.reducer;
