import Fetch from './fetch/index'

const getByRecipeId = async (recipe_id, { ...params }) => {
	try {
		const [recipe, errRes] = await Fetch.get(`comments/recipe/${recipe_id}`, { ...params })

		if (errRes) throw errRes

		return recipe
	} catch (e) {
		console.log(e)
	}
}
export default {
	getByRecipeId
}