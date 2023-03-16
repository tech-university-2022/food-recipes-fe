import React from 'react'
import { AccountTab } from '../../../components/Tab'
import SideLayout from '../../../layouts/SideLayout'
import SearchBar from '../../../components/SearchBar'

import './style.css'
import Menu from './Menu'

const Content = () => {

	const currentUser = {
		name: 'Jamie',
		id: 1
	}

	return (
		<div className='my-menus'>
			<div
				className='title'>
				List of menus by
				<span
					className='user-name'>
					{currentUser.name}
				</span>
			</div>

			<div className='my-menus-search-container'>
				<SearchBar />
				<button className='create-btn' >
					Create
				</button>
			</div>

			<Menu name='Healthy food' />
			<Menu name='Menu Party' />
		</div>
	)
}

const MyMenu = () => {
	return (
		<SideLayout
			content={<Content />}
			sidebar={<AccountTab />} />
	)
}

export default MyMenu