import React, { useEffect, useState, ReactNode } from 'react'
import { CloudSun } from 'phosphor-react'
import getWeatherByPosition from '../../contexts/weather'

import { Text } from '../TextComp/Text';
import { CityLocation, TemperatureBox, Temperature } from './styles';

// export interface RootWeatherProps {
// 	className?: string
// }

export function RootWeather() {
	const Weather = () => {
		const [latitude, setLatitude] = useState(0)
		const [longitude, setLongitude] = useState(0)
		const [cityName, setCityName] = useState(null)
		const [temperature, setTemperature] = useState(null)
		const [forecast, setForecast] = useState(null)
		const [icon, setIcon] = useState(null)

		useEffect(() => {
			getWheater()
		})

		const getWheater = async () => {
			navigator.geolocation.getCurrentPosition((pos) => {
				const { latitude, longitude } = pos.coords
				setLatitude(latitude)
				setLongitude(longitude)
			})

			if (latitude && longitude === 0) return

			const response = await getWeatherByPosition({ latitude, longitude })
			const { data } = response
			const { name, main } = data
			const { temp } = main
			const temperature = Math.round(temp)
			setCityName(name)
			// setTemperature(temperature)
			setForecast(data.weather[0].main)
			setIcon(data.weather[0].icon)
		}
		return (
			<div className="flex flex-col justify-start items-end pt-6 pr-10">
				<CityLocation className="font-normal text-black text-sm">
					{cityName}
				</CityLocation>
				<TemperatureBox className="flex justify-center items-center">
					<CloudSun size={32} weight="thin" />
					<Temperature className="font-normal text-black text-3lg">
						{`${temperature}°`}
					</Temperature>
				</TemperatureBox>
			</div>
		)
	}
}
