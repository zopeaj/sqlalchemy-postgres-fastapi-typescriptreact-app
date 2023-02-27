import React, { useState, useEffect, Fragment } from "react";
import { Grid, Typography, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from "@mui/material";
import { WarningIcon, CloseIcon, CheckIcon } from "@mui/icons-material";
import { useCreateMessageMutation } from "../data/user/api/";

interface NotificationManagerProps {
  openNotification: boolean;
  setOpenNotification: Function,
  message: string;
}


const NotificationManager: React.FC<NotificationManagerProps> = ({openNotification, setOpenNotification, message}) => {
  const onClose = () => {
    setOpenNotification(false);
  }

  return (
    <Fragment>
      <Dialog open={openNotification} onClose={onClose}>
        <DialogTitle>Notification Manager:</DialogTitle>
        <DialogContent>
          {message}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default NotificationManager;
