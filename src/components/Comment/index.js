import React from 'react'

import './style.css'

const Comment = ({ account, time, content }) => {
	return (
		<div className='comment'>
			<div className='left'>
				<img src={account.avatar}/>
			</div>
			<div className='right'>
				<div className='name'>
					{account?.name}
				</div>
				<div className='time'>
					{time}
				</div>
				<div className='content'>
					{content}
				</div>
			</div>
		</div>
	)
}

export default Comment