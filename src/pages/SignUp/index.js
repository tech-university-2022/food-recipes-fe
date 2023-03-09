import React, { memo, useState } from "react"
import { Link } from "react-router-dom";
import { Validator } from "../../utils/validate";
import { AuthService } from "../../services"
import { message } from 'antd';

import "../../styles/sign.css";
import { SignPic } from '../../assets';

const Content = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(true);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        let tmpEmail = event.target.value
        setEmail(event.target.value)
        setEmailError(Validator.isValidEmail(tmpEmail))
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
        }
        console.log(data)
        try {
            const response = await AuthService.create(data);
            console.log(response)
        }
        catch (e) {
            console.log("error", e)
            message.error("Wrong input")
        }
    }
    console.log(email)
    console.log(emailError)

    return (
        <div className='background'>
            <div id='sign'>
                <div className='left'>
                    <img src={SignPic} />
                </div>
                <div className='right'>
                    <div className='title'>Get  Started!</div>
                    <div className='ask'>Already has account? <Link className='link' to='/signin'>Sign In</Link></div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="field">
                            <div className="label"> Name </div>
                            <input type="text" value={name} onChange={handleNameChange} />
                        </div>
                        <div className="field">
                            <div className="label"> Email </div>
                            <input type="text" value={email} onChange={handleEmailChange} />
                            {!emailError && <div className='error'>* Email invalid</div>}
                        </div>
                        <div className="field">
                            <div className="label"> Password </div>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <button className='submit-btn sign-btn'>
                            SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const SignUp = () => {
    return (
        <Content />
    )
}

export default memo(SignUp)