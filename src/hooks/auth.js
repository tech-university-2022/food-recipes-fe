import Cookies from 'js-cookie'

const useAuth = () => {
	const user = Cookies.get('token')
     
	const setAuth = (token, expires = 8) => {
		Cookies.set('token', token, { expires: expires })
	}

	const removeToken = () => {
		Cookies.remove('token')
		window.location.reload()
	}

	return {
		auth: user,
		setAuth: setAuth,
		removeAuth: removeToken 
	}
}

export default useAuth