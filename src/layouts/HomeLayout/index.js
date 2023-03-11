import Footer from '../../components/Footer'
import React, { memo } from 'react'

import './style.css'

const HomeLayout = ({ navbar, content }) => {
	return (
		<div id="home-layout">
			<div className='navbar'>
				{navbar}
			</div>
			<div className="content">
				{content}
			</div>
			<Footer/>
		</div>
	)
}

export default memo(HomeLayout)