import axios from 'axios'
import { useState } from 'react'



export default function useAxios() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	const operation = async (path, method, body = null) => {

		try {

			setLoading(true)
			const response = await axios.request({
				baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
				url: path,
				method: method,
				data: body
			})

			const rawBody = response.data
			if(rawBody.data){
				setData(rawBody.data)
			}else{
				setData(rawBody)
			}

		} catch (e) {
			if (e.response.data) {
				setError(e.response.data.message)
			} else {
				setError(e)
			}
		} finally {
			setLoading(false)
		}


	}

	return { data, error, loading, operation }
}