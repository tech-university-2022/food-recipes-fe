import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/auth'
import './style.css'

const DropDown = ({ items, isDropDown }) => {
	const navigate = useNavigate()
	const { removeAuth } = useAuth()

	const handleChooseItem = useCallback((item) => {
		switch (item.type) {
		case 'navigate':
			navigate(item.endpoint)
			break
		case 'signout':
			removeAuth()
			break
		default:
			break
		}
	}, [])

	console.log(isDropDown)
	console.log('items', items)

	return (
		<div className={isDropDown ? 'dropdown' : 'none'}>
			{items?.map(item => (
				<div 
					key={item.name}
					className='item'
					onClick={() => handleChooseItem(item)}
				>
					{item.name}
				</div>
			))}
		</div>
	)
}

export default DropDown