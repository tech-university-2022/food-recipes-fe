import React, { memo, useState } from 'react'
import Pagination from '../../../components/Pagination'
import { RecipeItem } from '../../../components/Recipe'
import SearchBar from '../../../components/SearchBar'
// import useAuth from '../../../hooks/auth'
import MainLayout from '../../../layouts/MainLayout'

import './style.css'

const Content = () => {
	// const { user } = useAuth()
	// const currentUser = JSON.parse(user)
	const currentUser = {
		name: 'Nhi Mai',
		id: 1
	}

	const [page, setPage] = useState(1)

	return (
		<div className='my-recipes'>
			<div className='title'>List of recipes by <div className='user-name'>{currentUser.name}</div></div>
			<SearchBar/>
			<button className='create-btn btn'>Create new recipe</button>
			<RecipeItem
				name='Delicious Fancy Glazed Blueberry Donuts'
				time='1 month ago'
				description='This is a bla bla hong biet ghi gi vo'
				url='day la url S3'
			/>
			<RecipeItem
				name='Delicious Fancy Glazed Blueberry Donuts'
				time='1 month ago'
				description='This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo. This is a bla bla hong biet ghi gi vo'
				url='day la url S3'
			/>
            
			<Pagination
				numPages={10}
				maxItem={3}
				page={page}
				setPage={(page) => {
					setPage(page)
					console.log(page)
				}}
			/>
		</div>
	)
}

const MyRecipes = () => {
	return (
		<MainLayout content={<Content/>}/>
	)
}

export default memo(MyRecipes)