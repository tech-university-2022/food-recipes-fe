import React, { memo, useCallback, useState } from 'react'
import { Link } from "react-router-dom";
import { Validator } from "../../utils/validate";
import { AuthService } from "../../services"
import { message } from 'antd';

import Img from '../../assets/sign-pic.svg'
import '../../styles/sign.css'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleChangeEmail = useCallback((event) => {
        let email = event.target.value
        setEmail(email)
        setIsEmailValid(Validator.isValidEmail(email))
    }, [])

    const handleChangePassword = useCallback((event) => {
        let password = event.target.value
        setPassword(password)
    }, [])

    const handleSignIn = useCallback(async (email, password) => {
        const data = {
            email, 
            password
        }
        console.log(data)
        try {
            const response = await AuthService.login(data);
            console.log(response)
        }
        catch (e) {
            console.log("error", e)
            message.error("Incorrect email or password! Please try again!!!")
        }
    }, [])

    return (
        <div className='background'>
            <div id='sign'>
                <div className='left'>
                    <img src={Img}/>
                </div>
                <div className='right'>
                    <div className='title'>Get  Started!</div>
                    <div className='ask'>No account? <Link className='link' to='/signup'>Sign Up</Link></div>
                    <form>
                        <div className='field'>
                            <div className='label'>Email</div>
                            <input type='email' value={email} onChange={handleChangeEmail}/>
                            {!isEmailValid && <div className='error'>* Email invalid</div>}
                        </div>
                        <div className='field'>
                            <div className='label'>Password</div>
                            <input type='password' value={password} onChange={handleChangePassword}/>
                        </div>
                    </form>
                    <button 
                        className='sign-btn'
                        onClick={() => handleSignIn(email, password)}
                    >
                        SIGN IN
                    </button>
                    <div className='ask bottom'>Forgot password? <Link className='link' to='/reset-password'>Reset</Link></div>
                </div>
            </div>
        </div>
    )
}

export default memo(SignIn)