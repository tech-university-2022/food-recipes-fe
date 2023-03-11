import React from 'react'

import './style.css'

const Instruction = ({ ingredients = {}, steps = [] }) => {
	
	console.log('ingredients', ingredients)
	console.log('steps', steps)
    
	return (
		<div className='instruction'>
			<div className='ingredients'>
				<div className='title'>Ingredients</div>
				<div className='content'>
                    
				</div>
			</div>

			<div className='steps'>
				<div className='title'>Instructions</div>
				<div className='content'>
					{steps?.map((text, idx) => 
						<div 
							key={idx}
							className='item'
						>
							<div className='number'>
								{idx + 1}
							</div>
							<div className='text'>
								{text}
							</div>
						</div>
					)}
				</div>

			</div>
		</div>
	)
}

export default Instruction
