import React, { useState, useEffect, Fragment } from "react";
import { Grid, Button, } from "@mui/material";
import { useGetCommentQuery, useCreateCommentMutation, useDeleteCommentMutation } from "../../data/comment/commentCreateApi/commentCreateApiService";
import { actionCreateComment, actionUpdateComment, actionDeleteComment } from "../../data/comment/comment.actions";
import { readUserId, readUserToken, readUserName } from "../../data/user/user.selector";

interface MainProps { }

const Main: React.FC<MainProps> = ({ }) => {

  return (

  );
}

export default Main;
