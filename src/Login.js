import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        //sign in
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result)
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img className="flogo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
                <img className="facebook" src="https://cdn.worldvectorlogo.com/logos/facebook-7.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
