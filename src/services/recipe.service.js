import Fetch from './fetch/index'

export default class RecipeService {
	static getById = async (id) => {
		try {
			const [recipe, errRes] = await Fetch.get(`recipes/${id}`)

			if (errRes) throw errRes

			return recipe
		} catch (e) {
			console.log(e)
		}
	}
}