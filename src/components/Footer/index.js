import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { footerCategories } from '../../constants'

import './style.css'

const Footer = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState(null)

	return (
		<div id="footer" className='center-item'>
			<div>
				<div className="title">Deliciousness to your inbox</div>
				<div className='text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
				<div className="input">
					<input 
						type="email" 
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='send-btn'>Send</button>
				</div>

				<div className="category">
					{footerCategories?.map(item => 
						<div 
							key={item.endpoint} 
							className='link' 
							to={() => navigate(item.endpoint)}
						>
							{item.name}
						</div>	
					)}
				</div>

				<div className='text'>@copyright by Recipes-master-2023</div>
			</div>
		</div>
	)
}

export default memo(Footer)