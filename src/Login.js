import React, { useEffect } from 'react'
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
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
