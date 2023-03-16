import Fetch from './fetch/index'

const getById = async (id) => {
	try {
		const [recipe, errRes] = await Fetch.get(`recipes/${id}`)

		if (errRes) throw errRes

		return recipe
	} catch (e) {
		console.log(e)
	}
}

export default  {
	getById
}