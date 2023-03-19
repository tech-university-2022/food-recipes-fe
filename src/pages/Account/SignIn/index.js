import React, { memo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Validator } from '../../../utils/validate'
import useAxios from '../../../hooks/use-axios'
import { HttpMethod } from '../../../utils/http-method'


import { SignPic } from '../../../assets'
import '../../../styles/sign.css'
import useAuth from '../../../hooks/auth'
// import useAuth from '../../../hooks/auth'


const SignIn = () => {
	// const { setAuth } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(true)

	const { data, error, loading, operation } = useAxios()
	const { setAuth } = useAuth()
	const navigate = useNavigate()



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

		operation('/account/login', HttpMethod.POST, data)
	}, [])

	useEffect(() => {
		if (data) {
			const { token, account } = data
			setAuth(token, account)
			navigate('/me/menu')
		}
		if (error) {
			console.log(error)
		}
	}, [data, error, loading])

	return (
		<div className='background'>
			<div id='sign-in' className='sign'>
				<div className='left'>
					<img src={SignPic} />
				</div>
				<div className='right'>
					<div className='title'>Get  Started!</div>
					<div className='ask'>No account? <Link className='link' to='/signup'>Sign Up</Link></div>
					<form>
						<div className='field'>
							<div className='label'>Email</div>
							<input type='email' value={email} onChange={handleChangeEmail} />
							{!isEmailValid && <div className='error'>* Email invalid</div>}
						</div>
						<div className='field'>
							<div className='label'>Password</div>
							<input type='password' value={password} onChange={handleChangePassword} />
						</div>
					</form>
					<button
						className='btn sign-btn'
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