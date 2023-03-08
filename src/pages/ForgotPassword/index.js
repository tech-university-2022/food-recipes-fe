import React, { memo, useState } from "react"
import { Link } from "react-router-dom";
import { Validator } from "../../utils/validate";
import { AuthService } from "../../services"
import { message } from 'antd';

import "../../styles/sign.css";
import Img from '../../assets/sign-pic.svg';

const Content = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);

    const handleEmailChange = (event) => {
        let tmpEmail = event.target.value
        setEmail(event.target.value)
        setEmailError(Validator.isValidEmail(tmpEmail))
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const data = {
            email: email,
        }
        console.log(data)
        try {
            //const response = await AuthService.create(data);
            //console.log(response)
            message.info("Your password is reset. Please check your email for the new password")
        }
        catch (e) {
            console.log("error", e)
            message.error("Something is wrong. Please try again later")
        }
    }

    return (
        <div className="background">
            <div id="sign">
                <div className="left">
                    <img src={Img} />
                </div>
                <div className="right">
                    <div className='title'>Reset your password</div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="field">
                            <div className="label"> Email </div>
                            <input type="text" value={email} onChange={handleEmailChange} />
                            {!emailError && <div className='error'>* Email invalid</div>}
                        </div>
                        <button className='submit-btn sign-btn'>
                            Submit
                        </button>
                        <div className='ask'> Get back to <Link className='link' to='/signin'>Sign in</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const ForgotPassword = () => {
    return (
        <Content />
    )
}

export default memo(ForgotPassword)