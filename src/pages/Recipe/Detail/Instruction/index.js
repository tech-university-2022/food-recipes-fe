import React, { useState } from 'react'
import './style.css'

const Instruction = ({ ingredients = [], steps = [] }) => {
	const [chosenItems, setChosenItems] = useState({})
	console.log('ingredients', ingredients)
	console.log('steps', steps)

	const handleCheck = (idx) => {
		let items = {...chosenItems}
		items[idx] = !chosenItems[idx]
		setChosenItems(items)
	}
    
	return (
		<div className='instruction'>
			<div className='ingredients'>
				<div className='title'>Ingredients</div>
				<div className='content'>
					{ingredients?.map((item, idx) => 
						<div 
							key={idx}
							className='item'
						>
							<div className='container' onClick={() => handleCheck(idx)}>
								<input type='checkbox' checked={chosenItems[idx]} />
								<span className='checkbox'></span>
							</div>
							<div className='text'>
								{`${item.quantity} ${item.unit} ${item.name}`}
							</div>
						</div>
					)}
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
