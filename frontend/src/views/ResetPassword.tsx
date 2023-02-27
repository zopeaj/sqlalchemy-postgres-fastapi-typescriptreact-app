import React, { useState, useEffect, Fragment } from "react";
import { usePasswordResetMutation } from '../data/rootApi';
import { actionResetPassword } from '../data/user/user.actions';
import { IResetPassword } from '../interfaces/index';

interface ResetPasswordProps { }

const ResetPassword: React.FC<ResetPasswordProps> = ({ }) => {
  return (
     <Fragment>

     </Fragment>
  );
}

export default ResetPassword;
