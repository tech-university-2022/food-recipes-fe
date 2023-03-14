import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const RecipeNewBox = ({ id = 1 }) => {
	const navigate = useNavigate()

	return (
		<div 
			className='recipe-new-box box'
			onClick={() => navigate(`/recipe/${id}`)}
		>
		</div>
	)
}

export default RecipeNewBox