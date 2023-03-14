import Footer from '../../components/Footer'
import React, { memo } from 'react'

import './style.css'

const MainLayout = ({ sidebar, content }) => {
	return (
		<div id="side-layout">
			<div className="body">
				<div>
					{sidebar}
				</div>
				<div className='content'>
					{content}
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default memo(MainLayout)