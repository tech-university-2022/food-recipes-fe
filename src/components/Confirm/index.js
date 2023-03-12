import React from 'react'
import { Modal } from 'antd'

import './style.css'

const Confirm = ({ title, content, open, setOpen = () => {}, handleOk = () => {} }) => {

	return (
		<Modal
			title={title}
			open={open}
			onOk={handleOk}
			onCancel={() => setOpen(false)}
			footer={null}
		>
			{content}
			<div className='buttons'>
				<button className='cancel-btn' onClick={() => setOpen(false)}>Cancel</button>
				<button className='ok-btn' onClick={handleOk}>OK</button>
			</div>
		</Modal>
	)
}

export default Confirm