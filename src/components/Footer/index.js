import React, { memo, useState } from 'react'

import './style.css'

const Footer = () => {
	const [email, setEmail] = useState(null)
	const [question, setQuestion] = useState(null)

	return (
		<div id="footer">
			<div className="form">
				<div className="title">ANY QUESTIONS?</div>
				<div className="input">
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input">
					<label htmlFor="question">Question</label>
					<input 
						type="text" 
						id="question"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</div>
			</div>

			<div className="contact">
				<p>Email: admin@company.com</p>
				<p>Phone: +84123456789</p>
				<p>Address: 35 Nguyen Hue, Ben Nghe ward, district 1, Ho Chi Minh city, Viet Nam</p>
			</div>
		</div>
	)
}

export default memo(Footer)