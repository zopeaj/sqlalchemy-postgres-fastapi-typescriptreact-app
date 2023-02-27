import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICommentCreate, ICommentUpdate, ICommentDelete } from "../../../interfaces/index";
import { api } from "../api/commentApi";
import { getLocalToken } from "../../../utils/tokenUtils";

export const createCommentAsync = createAsyncThunk("comment/create", async (data: ICommentCreate) => {
  const response = await api.createComment(getLocalToken(), data);
  return response;
});

export const updateCommentAsync = createAsyncThunk("comment/update", async (data: ICommentUpdate) => {
  const response = await api.updateComment(getLocalToken(), data.userId, data);
  return response;
});

export const deleteCommentAsync = createAsyncThunk("comment/delete", async(data: ICommentDelete) => {
  const response = await api.deleteComment(getLocalToken(), data.commentId);
  return response;
});

