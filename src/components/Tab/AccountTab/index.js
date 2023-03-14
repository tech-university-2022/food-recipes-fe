import React, { memo } from 'react'
import { accountTab } from '../../../constants'

import { useNavigate, useLocation } from 'react-router-dom'

import './style.css'

const AccountTab = () => {
	const navigate = useNavigate()
	const pathname = useLocation().pathname
	console.log(pathname)

	return (
		<div id='account-tab'>
			{accountTab?.map(item => 
				<div 
					key={item.endpoint}
					className={pathname === item.endpoint ? 'chosen-item' : 'item' }
					onClick={() => navigate(item.endpoint)}
				>
					{item.name}
				</div>
			)}
		</div>
	)
}

export default memo(AccountTab)