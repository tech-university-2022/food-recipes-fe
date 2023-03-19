import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import { HeartFilled } from '@ant-design/icons'
import { Tooltip } from 'antd'

import { RecipeService } from '../../../services'
import { LeftArrow } from '../../../assets'
import MainLayout from '../../../layouts/MainLayout'

import './style.css'
import Introduction from './Introduction'
import Instruction from './Instruction'
import Comments from './Comments'
import { RecipeBox } from '../../../components/Recipe'
import MenuPopup from '../../../components/MenuPopup'

const Action = ({ setOpen }) => {
	const navigate = useNavigate()

	return (
		<div className='action'>
			<button onClick={() => navigate(-1)} >
				<img src={LeftArrow}/>
			</button>
			<Tooltip 
				title="Add to menu"
				placement="bottom"
			>
				<HeartFilled 
					className='icon'
					onClick={() => setOpen(true)}
				/>
			</Tooltip>
		</div>
	)
}

const Recommend = () => {
	const [recipes, setRecipes] = useState([1, 2, 3, 4, 5, 6, 7, 8])

	return (
		<div className='recommend'>
			<div className='title'>You may also like</div>
			<div className='recommend-recipes'>
				{recipes.map((item, idx) => 
					<RecipeBox
						key={idx}
						name='Delicious Fancy Glazed Blueberry Donuts'
						author_name='Nhi Mai'
						time='3 days ago'
						comment_count={100}
					/>
				)}
			</div>
		</div>
	)
}

const Content = () => {
	const { id } = useParams()
	const [recipe, setRecipe] = useState({})
	const [openMenus, setOpenMenus] = useState(false)

	useEffect(() => {
		console.log('recipe detail page', id)
		fetchData(id)
	}, [])

	const fetchData = useCallback(async (id) => {
		const response = await RecipeService.getById(id)
		console.log(response)
		setRecipe({
			'name': 'PHO VIETNAM',
			'author_name': 'Nhi Mai',
			'time': '3 days ago',
			'description': 'One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy! One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!',
			'prepare_time': '45 MIN',
			'cook_time': '10 HOUR',
			'media_url': [],
			'serve_for': 4,
			'comment_count': 100,
			'ingredients':[
				{
					'unit': 'g',
					'quantity': 100,
					'name': 'beef'
				},
				{
					'unit': 'g',
					'quantity': 100,
					'name': 'beef'
				},
				{
					'unit': 'g',
					'quantity': 100,
					'name': 'beef'
				},
				{
					'unit': 'g',
					'quantity': 100,
					'name': 'beef'
				}
			],
			'steps': [
				'This is step 1 This is step 1 This is step 1 This is step 1 This is step 1 This is step 1 This is step 1 This is step 1 This is step 1', 
				'This is step 2',
				'This is step 3', 
				'This is step 4',
				'This is step 5', 
				'This is step 6',
				'This is step 2',
				'This is step 3', 
				'This is step 4',
				'This is step 5', 
				'This is step 6',
			]
		})
	}, [])

	return (
		<div id="recipe-detail">
			<Action
				setOpen={setOpenMenus}
			/>
			<Introduction
				{...recipe}
			/>
			<Instruction
				{...recipe}
			/>
			<Comments 
				recipe_id={id}
				comment_count={recipe.comment_count}
			/>
			<Recommend />

			<MenuPopup
				recipeId={id}
				open={openMenus}
				setOpen={setOpenMenus}
			/>
		</div>
	)
}

const RecipeDetail = () => {
	return (
		<MainLayout content={<Content/>}/>
	)
}

export default RecipeDetail