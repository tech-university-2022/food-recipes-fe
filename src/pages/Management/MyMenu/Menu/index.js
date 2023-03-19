import React, { useState } from 'react'
import { memo } from 'react'
import ArrowDown from '../../../../assets/arrow-down.svg'
import ArrowUp from '../../../../assets/arrow-up.svg'

import './style.css'
import { RecipeItem } from '../../../../components/Recipe'


const Menu = ({ name }) => {
	const [isShow, setIsShow] = useState(false)

	const onShowRecipesClicked = () => {
		setIsShow(!isShow)
	}

	const recipes = Array(5).fill({
		id: new Date().getTime(),
		name: 'Delicious Fancy Glazed Blueberry Donuts',
		time: '1 month ago',
		description: 'This is a bla bla hong biet ghi gi vo',
		url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
	})

	return (
		<div>
			<div className='menu-container' onClick={onShowRecipesClicked}>
				<p>{name}</p>
				<img src={isShow ? ArrowDown : ArrowUp} />
			</div>

			{isShow && recipes.map(recipe =>
				<RecipeItem
					key={new Date().getTime()}
					id={recipe.id}
					name={recipe.name}
					description={recipe.description}
					time={recipe.time}
					url={recipe.url}
				/>)
			}
		</div>
	)
}

export default memo(Menu)