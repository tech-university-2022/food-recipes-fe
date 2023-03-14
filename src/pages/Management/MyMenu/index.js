import React from 'react'
import { AccountTab } from '../../../components/Tab'
import SideLayout from '../../../layouts/SideLayout'

import './style.css'

const Content = () => {
	return (
		<div className='my-profile'>
            
		</div>
	)
}

const MyMenu = () => {
	return (
		<SideLayout content={<Content/>} sidebar={<AccountTab/>}/>
	)
}

export default MyMenu