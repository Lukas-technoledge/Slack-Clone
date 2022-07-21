import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            alert(error.message);
        })
    }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7" alt="img" />
        <h2>Sign in to Slack-clone</h2>
        <p>Slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
