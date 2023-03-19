import Fetch from './fetch/index'

const getByAccount = async (accountId) => {
	try {
		const [menus, errRes] = await Fetch.get(`/menu/account/${accountId}`, { })

		if (errRes) throw errRes

		return menus
	} catch (e) {
		console.log(e)
	}
}

export default {
	getByAccount
}