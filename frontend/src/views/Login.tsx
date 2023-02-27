import React, { useState, useHistory } from "react";
import { RootState } from "../data/store";
import { Grid, Typography, Snackbar, CircularProgress } from "@mui/material";
import { useLoginQuery } from "../data/rootApi";
import { actionLogin } from "../data/user/user.actions";
import { Login } from "../interfaces/index";


interface LoginProps { }

const Login:React.FC<LoginProps> = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const { login, } = useLoginQuery();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  }

  const onLogin = async () => {
    const data: Login = {
      username: username,
      password: password,
    }
    try {
      setLoading(true);
      setTimeout(
        await login(data).unwrap(),
      500);
    }catch(error) {
      setLoginErrorMessage(error);
      setOpen(true);
    }
  }

  return (
   <div>
     <form onSubmit={handleLogin}>
       <Grid container>
         <Grid item>
           <label>Username: </label>
           <br />
           <input type="text" placeholder="Username" />
         </Grid>
         <Grid item>
           <label>Password: </label>
           <br />
           <input type="password" placeholder="Password" />
         </Grid>
         <Grid item>
           <Button type="submit" color="primary">Login</Button>
         </Grid>
       </Grid>
     </form>
     <Snackbar
       open={open}
       message={loginErrorMessage}
       authoHideDuration={5000}
      />
      {loading ? <CircularProgress fontSize="small" /> : null}
   </div>
  );
}
