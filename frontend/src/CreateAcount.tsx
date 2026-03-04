import styles from './styles/CreateAccount.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateAccount() {
  return (
    <>
    <div id={styles.pageContainer}>
      <div id={styles.loginContainer}>
        <h1 className={styles.title}> Create Account </h1>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 2, width: '25rem' } }}
          noValidate
          autoComplete="off"
          id={styles.loginForm}
        >
          <TextField className={styles.inputField} id="email" label="Email" variant="outlined" />
          <TextField className={styles.inputField} id="username" label="Username" variant="outlined" />
          <TextField className={styles.inputField} id="password" label="Password" variant="outlined" type="password" />
          <TextField className={styles.inputField} id="confirmPassword" label="Confirm Password" variant="outlined" type="password" />
          <Button
          variant="contained"
          id={styles.submitButton}
          >Submit</Button>
        </Box>
      </div>
    </div>
    </>
  );
}