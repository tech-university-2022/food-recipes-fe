import React, { useEffect, useState } from 'react'
import { Modal, Radio, Row } from 'antd'
import useAuth from '../../hooks/auth'
import { MenuService } from '../../services'

import './style.css'

const MenuPopup = ({ recipeId, open, setOpen = () => {} }) => {
	const { user } = useAuth()
	const [menus, setMenus] = useState([])
	const [chosenMenu, setChosenMenu] = useState()

	useEffect(() => {
		loadMenus()
	}, [])

	const loadMenus = async () => {
		// const res = await MenuService.getByAccount(user.id)
		// setMenus(res)
		setMenus([
			{
				id: 1,
				name: 'menu 1'
			},
			{
				id: 2,
				name: 'menu 2'
			}
		])
	}

	const handleOk = () => {
		setOpen(false)
	}

	return (
		<div className='menu-popup'>
			<Modal
				title='Please choose menu'
				open={open}
				onOk={handleOk}
				onCancel={() => setOpen(false)}
				footer={null}
			>
				<Radio.Group onChange={(e) => setChosenMenu(e.target.value)} value={chosenMenu} className='menus'>
					{menus?.map((item) => 
						<Row key={item.id}>
							<Radio value={item.id}>
								{item.name}
							</Radio>
						</Row>
					)}
				</Radio.Group>
    
				<div className='buttons'>
					<button className='cancel-btn' onClick={() => setOpen(false)}>Cancel</button>
					<button className='ok-btn' onClick={handleOk}>OK</button>
				</div>
			</Modal>
		</div>

	)
}

export default MenuPopup