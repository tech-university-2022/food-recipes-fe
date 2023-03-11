import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { Logo } from '../../assets' 
import { navbarAccount, navbarCategories } from '../../constants'
import DropDown from '../Dropdown'

import './style.css'

const Navbar = () => {
	const navigate = useNavigate()

	const [isAccount, setIsAccount] = useState(false)

	return (
		<div 
			id="navbar"
		>
			<div>
				<img 
					src={Logo}
					alt="Logo"
					onClick={() => navigate('/')}
				/>
			</div>
			{navbarCategories?.map(item => (
				<div 
					className="navbar-title"
					onClick={() => navigate(item.endpoint)}
					key={item.name}
				>
					{item.name}
				</div>
			))}
			<div 
				className='account'
				onClick={() => setIsAccount(!isAccount)}
			>
				<img
					className='avatar' 
				/>
				<DropDown items={navbarAccount} isDropDown={isAccount}/>
			</div>
		</div>
	)
}

export default memo(Navbar)