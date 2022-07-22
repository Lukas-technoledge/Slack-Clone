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
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6ILVb0QGwc5VF-6..v_1569479844.jpg" alt="img" />
                <h2>Sign in to Slack-clone</h2>
                <p>Slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
