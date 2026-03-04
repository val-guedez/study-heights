import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './styles/Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div id={styles.pageContainer}>
      <div id={styles.loginContainer}>
        <h1 className={styles.title}> Login </h1>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 2, width: '25rem' } }}
          noValidate
          autoComplete="off"
          id={styles.loginForm}
        >
          <TextField className={styles.inputField} id="username" label="Username" variant="outlined" />
          <TextField className={styles.inputField} id="password" label="Password" variant="outlined" />
          <Link className={styles.navButton} to='/login/forgot'> Forgot password? </Link>
          <Button variant="contained" id={styles.submitButton}>Submit</Button>
        </Box>
      </div>
    </div>
    </>
  );
}