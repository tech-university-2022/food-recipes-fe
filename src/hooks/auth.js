import Cookies from 'js-cookie'

const useAuth = () => {
	const token = Cookies.get('token')
	const user = Cookies.get('user')

	const setAuth = (token, user, expires = 8) => {
		Cookies.set('token', token, { expires: expires })
		Cookies.set('user', JSON.stringify(user), { expires: expires })
	}

	const removeToken = () => {
		Cookies.remove('token')
		Cookies.remove('user')
		window.location.reload()
	}

	return {
		token: token,
		user: user && '{}',
		setAuth: setAuth,
		removeAuth: removeToken
	}
}

export default useAuth