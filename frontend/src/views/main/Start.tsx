import React, { useState, useEffect, Fragment } from "react";
import { Grid, Typography, Button, Dialog, CircularProgress, Container, AppBar, Toolbar, DialogContent, DialogActions, DialogContentText, DialogTitle, Snackbar, TextField } from "@mui/icons-material";
import { WarningIcon, CheckIcon } from "@mui/icons-material";
import { useRegisterMutation, useLoginQuery } from "../../data/rootApi";

import { useHistory } from "react-router-dom";
import { Register, Login } from "./interfaces";


interface StartProps { }

const Start: React.FC<StartProps> = ({ }) => {

  const RegisterDialog = ({ open, setOpen}) => {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');


    const [successRegisterMessage, setSuccessRegisterMessage] = useState(false);
    const [errorRegisterMessage, setErrorRegisterMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState('');
    const [loading, setLoading] = useState(false);
    const { register, } = useRegisterMutation();

    const onClose = () => {
      setOpen(false);
    }

    const defaultData = () => {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setAge('')
      setConfirmPassword('')
    }

    const onRegister = async () => {
      const data: Register =  {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        password: password
      };
      try {
        setLoading(true);
        setTimeout(
          await register(data).unwrap(),
        500);
        setSnackbarOpen(true)
        setSuccessRegisterMessage("User Register Successfully");
        defaultData()
      }catch(error) {
        setLoading(false);
        setLoading(true);
        setErrorRegisterMessage(error);
        defaultData()
      }
    }

    const onFirstNameChange = (e: React.ChangeEvent<any>) => setFirstName(e.target.value);
    const onLastNameChange = (e: React.ChangeEvent<any>) => setLastName(e.target.value);
    const onEmailChange = (e: React.ChangeEvent<any>) => setEmail(e.target.value);
    const onAgeChange = (e: React.ChangeEvent<any>) => setAge(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<any>) => setPassword(e.target.value);
    const onConfirmPasswordChange = (e: React.ChangeEvent<any>) => setConfirmPassword(e.target.value);

    return (
      <Fragment>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Register:: </DialogTitle>
          <DialogContent>
              <TextField autoFocus margin="normal" label="First Name" onChange={onFirstNameChange} InputProps={{ name: 'FirstName' }}/>
              <TextField margin="normal" label="Last Name" InputProps={{ name: 'LastName' }} onChange={onLastNameChange} />
              <TextField margin="normal" label="Email Address" type="email" onChange={onEmailChange} InputProps={{ name: 'Email' }}  />
              <TextField margin="normal" label="Age" type="number" onChange={onAgeChange} InputProps={{name: 'age'}} />
              <TextField margin="normal" label="Password" type="password" onChange={onPasswordChange} InputProps={{
                  name: 'Password'
                }} />
              <TextField margin="normal" label="ConfirmPassword" type="password" onChange={onConfirmPasswordChange} InputProps={{ name: 'confirmPassword' }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancle
            </Button>
            <Button onClick={onRegister} color="secondary">
              Create
            </Button>
            {loading ? <CircularProgress fontSize="small" /> + ' Registering...' : 'Registered'}
          </DialogActions>
        </Dialog>
        <Snackbar
          open={snackbarOpen}
          message={errorRegisterMessage}
          autoHideDuration={5000}
        />
        <Snackbar
          open={snackbarOpen}
          message={successRegisterMessage}
          autoHideDuration={5000}
        />
      </Fragment>
    );
  }

  const LoginDailog = ({ open, setOpen} ) => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [errorLoginMessage, setErrorLoginMessage] = useState('');
    const [successLoginMessage, setSuccessLoginMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, } = useLoginQuery();

    const onUsernameChange = (e: React.ChangeEvent<any>) => setUsername(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<any>) => setPassword(e.target.value);


    const onClose = () => {
      setOpen(false);
    }

    const defaultData = () => {
      setUsername('');
      setPassword('')
    }

    const onLogin = async () => {
      const data: Login = {
        username: username,
        password: password
      };

      try {
        setLoading(true);
        setTimeout(
          await login(data).unwrap(),
        500);
        history.push("/main");
        setSuccessLoginMessage("User logged Successfully");
        defaultData()
      }catch(error) {
        onClose();
        setErrorLoginMessage(error);
        defaultData();
      }
    }

    return (
       <Fragment>
         <Dialog open={open} onClose={onClose}>
           <DialogTitle>Login:: </DialogTitle>
           <DialogContent>
             <TextField autoFocus margin="normal" label="username" onChange={onUsernameChange} InputProps={{ name: "username" }} />
             <TextField password margin="normal" label="password" onChange={onPasswordChange} InputProps={{ name: "password" }} />
           </DialogContent>
           <DialogActions>
             <Button onClick={onClose} color="primary">Cancel</Button>
             <Button onClick={onLogin} color="secondary">Login</Button>
             { loading ? <CircularProgress fontSize="small" /> + ' ' : null }
           </DialogActions>
         </Dialog>
         <Snackbar
           message={errorLoginMessage}
           autoHideDuration={5000}
         />
         <Snackbar
           message={successLoginMessage}
           autoHideDuration={5000}
         />
       </Fragment>
    );
  }

  const [openLoginDailog, setOpenLoginDailog] = useState(false);
  const [openRegisterDailog, setOpenRegisterDialog] = useState(false);


  const onRegisterDialog = () => {
    setOpenRegisterDialog(true);
  }

  const onLoginDailogOpen = () => {
    setOpenLoginDailog(true);
  }

  return (
     <Fragment>
       <RegisterDialog
         open={openRegisterDailog}
         onClose={setOpenRegisterDialog}
       />
       <LoginDailog
         open={openLoginDailog}
         onClose={setOpenLoginDailog}
       />
       <Container maxWidth="sm">
         <AppBar>
           <Toolbar>
             <div>
               App Logo
             </div>
             <div>
               <Button onClick={onRegisterDialog} color="secondary">Register</Button>
               <Button onClick={onLoginDailogOpen} color="primary">Login</Button>
             </div>
           </Toolbar>
         </AppBar>
       </Container>
     </Fragment>
  );
}

export default Start
