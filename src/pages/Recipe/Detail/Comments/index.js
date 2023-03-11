import React, { useEffect, useState, useCallback } from 'react'
import Comment from '../../../../components/Comment'
import { CommentService } from '../../../../services'
import { COMMENT_LIMIT } from '../../../../constants'

import './style.css'

const Comments = ({ recipe_id, comment_count }) => {
	const [skip, setSkip] = useState(0)
	const [isEnd, setIsEnd] = useState(false)
	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([
		{
			'account': {
				'name': 'Nhi Mai',
				'avatar': 'url S3'
			},
			'time': '45 minutes ago',
			'content': 'This recipe is really good. I like it!'
		},
		{
			'account': {
				'name': 'Nhi Mai',
				'avatar': 'url S3'
			},
			'time': '45 minutes ago',
			'content': 'This recipe is really good. I like it!'
		}
	])


	useEffect(() => {
		fetchData(recipe_id, skip)
	}, [recipe_id])
    
	const fetchData = useCallback(async (recipe_id, skip) => {
		const response = await CommentService.getByRecipeId(recipe_id, {
			skip: skip,
			limit: COMMENT_LIMIT
		})
		console.log(response)
		setSkip(skip + COMMENT_LIMIT)
		// setComments((prevState) => prevState.push(...response))
		// if (!response || response?.length === 0) {
		// 	setIsEnd(true)
		// }
	}, [])

	return (
		<div className='comments'>
			<div className='title'>{`Comments (${comment_count})`}</div>
			{comments?.map((comment, idx) => <Comment key={idx} {...comment}/>)}
			<button 
				className='load-btn'
				onClick={() => fetchData(recipe_id, skip)}
				disabled={isEnd}
			> 
                See more
			</button>

			<div className='title'>Already make it?</div>
			<textarea
				placeholder='Share your little throughts and attractive image of the dishes here!'
				className='input-comment'
				onChange={(e) => setComment(e.target.value)}
				value={comment}
				rows={6}
			/>
			<div className='center-item'>
				<button className='submit-btn btn'>Submit</button>
			</div>
		</div>
	)
}

export default Comments