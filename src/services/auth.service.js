import Fetch from './fetch/index'

const create = async ({ ...params }) => {
	try {
		const [user, errRes] = await Fetch.post('users/create', { ...params })

		if (errRes) throw errRes
		console.log(errRes)

		return user
	} catch (e) {
		console.log(e)
	}
}

const login = async ({ ...params }) => {
	try {
		console.log('params', params)
		const [user, errRes] = await Fetch.post('users/login', { ...params })

		if (errRes) throw errRes

		return user
	} catch (e) {
		console.log(e)
	}
}

const change_password = async ({ ...params }) => {
	try {
		const [user, errRes] = await Fetch.post('users/change-password', { ...params })

		if (errRes) throw errRes
		console.log(errRes)

		return user
	} catch (e) {
		console.log(e)
	}
}

export default {
	create,
	login, 
	change_password
}