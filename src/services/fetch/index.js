import { Validator } from '../../utils/validate'
import useAuth from '../../hooks/auth'
import axios from 'axios'

const URL = `${process.env.REACT_APP_BACKEND_DOMAIN}`

function xhr(url, params, method, baseUrl) {
	if (!Validator.isValidUrl(url)) {
		url = url.indexOf('/') === 0 ? `${baseUrl}${url}` : `${baseUrl}/${url}`
	}

	let options = { method: method }
	options['headers'] = {
		'Content-Type': 'application/json',
	}

	const { token } = useAuth()

	if (token) {
		options['headers']['Authorization'] = `Bearer ${token}`
	}

	if (method !== 'GET') {
		options['body'] = JSON.stringify(params)
	} else {
		if (params) {
			url = `${url}?${Object.keys(params)
				.filter((key) => !!params[key])
				.map((key) => `${key}=${params[key]}`)
				.join('&')}`
		}
	}
	
	const retyFunction = axios[method](url, options).then(handleSuccessResponse).catch(handleErrorResponse)
   
	return retyFunction
}

const handleSuccessResponse = async (response) => {
	try {
		const statusCode = response.status

		const resData = await response.json()

		if (statusCode === 401 || statusCode == 400 || statusCode == 500) {
			throw {
				code: statusCode,
				message: resData,
			}
		}

		return [resData, null]
	} catch (err) {
		return [null, err]
	}
}

const handleErrorResponse = (errResponse) => {
	return [
		null,
		{
			code: 500,
			message: errResponse,
		},
	]
}

function get(route, params = {}, baseUrl = URL) {
	return xhr(route, params, 'get', baseUrl)
}

function put(route, params = {}, baseUrl = URL) {
	return xhr(route, params, 'put', baseUrl)
}

function post(route, params = {}, baseUrl = URL) {
	return xhr(route, params, 'post', baseUrl)
}

function remove(route, params = {}, baseUrl = URL) {
	return xhr(route, params, 'delete', baseUrl)
}

const Fetch = {
	get: get, 
	post: post, 
	put: put, 
	delete: remove
}

export default Fetch
