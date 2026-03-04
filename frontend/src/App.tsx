import { Link, Route, Routes } from 'react-router-dom';
import styles from './styles/Header.module.css';
import Login from './Login.tsx';
import Home from './Home.tsx';
import Timers from './Timers.tsx';
import CreateAccount from './CreateAcount.tsx';
import StudyTips from './StudyTips.tsx';
import ForgotPassword from './ForgotPassword.tsx';

function App() {
  return (
    <div id={styles.pageContainer}>
      <nav id={styles.header}>
        <Link id={styles.websiteLogo} to='/'> study heights </Link>
        <nav id={styles.pageLinks}>
          <Link className={styles.navButton} to='/timers'> timers </Link>
          <Link className={styles.navButton} to="/login">login</Link>
          <Link className={styles.navButton} to='/create'> create account </Link>
          <Link className={styles.navButton} to="/tips"> study tips </Link>
        </nav>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateAccount/>}/>
        <Route path="/timers" element={<Timers/>}/>
        <Route path="/tips" element={<StudyTips/>}/>
        <Route path="login/forgot" element={<ForgotPassword/>}/>
      </Routes>
    </div>
    
  )
}

export default App
