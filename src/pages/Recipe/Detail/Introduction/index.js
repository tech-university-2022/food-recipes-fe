import React from 'react'
import { Carousel } from 'antd'

import { Mess, Time } from '../../../../assets'
import './style.css'

const Introduction = ({ name, author_name, time, comment_count, description, media_url, prepare_time, cook_time, serve_for }) => {
	return (
		<div className='introduction'>
			<div className='name'>{name}</div>

			<div className='created'>
				<div className='item'>
					<div className='icon overflow-hidden'>
						<img/>
					</div>
					<div className='text'>
						{author_name}
					</div>
				</div>

				<div className='item'>
					<div className='icon'>
						<img src={Time}/>
					</div>
					<div className='text'>
						{time}
					</div>
				</div>

				<div className='item'>
					<div className='icon'>
						<img src={Mess}/>
					</div>
					<div className='text'>
						{comment_count}
					</div>
				</div>
			</div>

			<div className='description'>{description}</div>

			<Carousel className='carousel' autoplay>
				{
					media_url?.map((url, i) => 
						<div key={i}>
							<img src={url}/>
						</div>
					)
				}
			</Carousel>

			<div className='cook'>
				<div className='item'>
					<div className='label'>PREP TIME</div>
					<div>{prepare_time}</div>
				</div>
				<div className='item border-x'>
					<div className='label'>COOK TIME</div>
					<div>{cook_time}</div>
				</div>
				<div className='item'>
					<div className='label'>SERVINGS</div>
					<div>{serve_for} PEOPLE</div>
				</div>
			</div>
		</div>
	)
}

export default Introduction