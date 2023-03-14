import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Time, Delete, Edit } from '../../../assets' 
import Confirm from '../../Confirm'
import './style.css'

const RecipeItem = ({ id, url, name, time, description }) => {
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	const handleOk = () => {
		// Call api delete recipe by id --> await
		setOpen(false)
	}

	return (
		<div className='recipe-item'>
			<div className='image'>
				<img src={url}/>
			</div>
			<div className='content'>
				<div className='name my-1'>{name}</div>
				<div className='text'>{description}</div>
				<div className='flex-center-y my-1'>
					<img src={Time}/>
					<div className='text'>{time}</div>
				</div>
			</div>
			<div className='action'>
				<img 
					className='action-btn'
					src={Delete}
					onClick={() => setOpen(true)}
				/>
				<img 
					className='action-btn'
					src={Edit}
					onClick={() => navigate(`recipe/edit/${id}`)}
				/>
			</div>
			<Confirm
				title={'DELETE RECIPE'}
				content={`Do you want to delete recipe: ${name}?`}
				open={open}
				setOpen={setOpen}
				handleOk={handleOk}
			/>
		</div>
	)
}

export default RecipeItem