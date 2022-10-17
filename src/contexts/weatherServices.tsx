import axios from 'axios'
import { PRIVATE_API_KEY, BASE_URL } from './weather'

const getWeatherByPosition = async (latitude: Number, longitude: Number) => {
	const url = `weather?lat=${latitude}&lon=${longitude}&appid=${PRIVATE_API_KEY}&units=metric`
	const response = await axios.get(`${BASE_URL}/${url}`)
	return response
}

export default getWeatherByPosition
