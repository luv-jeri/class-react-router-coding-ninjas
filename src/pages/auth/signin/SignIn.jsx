import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { useAuth } from '../../../context/UserContext';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const { user, login, register } = useAuth();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(true);

  if (user) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Hello Samurai</h1>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              console.log('hell');
              login(email, password);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              console.log('hell');
              register(email, password);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
