import React, { useEffect, useState } from 'react'
import { 
    WeatherContainer, 
    Paragraph, 
    Temperature, 
    ImgWeather, 
    ContentTemperature,
    ContentCity 
} from './styles'
import getWeatherByPosition from '../../contexts/weatherServices'

const Weather = () => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [cityName, setCityName] = useState('')
    const [temperature, setTemperature] = useState('')
    const [forecast, setForecast] = useState('')
    const [icon, setIcon] = useState('')
   

    useEffect(() => {
        getWheater()
    })

    const getWheater = async () => {

        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords
            setLatitude(latitude)
            setLongitude(longitude)
        })

        if(latitude && longitude === 0) return

        const response = await getWeatherByPosition(latitude, longitude)
        const { data } = response
        const { name, main } = data
        const { temp } = main
        const temperature = Math.round(temp),
        setCityName(name),
        setTemperature(temperature),
        setForecast(data.weather[0].main),
        setIcon(data.weather[0].icon)
    }
    
    // console.log('render cicle', { latitude, longitude, cityName, forecast, temperature })

    const iconurl = "https://www.weatherapi.com/docs/conditions.json" + icon + ".png";

    return (
        <WeatherContainer>
            <div>
                <ContentCity>
                    <Paragraph>{cityName}</Paragraph>
                </ContentCity>
                <ContentTemperature>                    
                    <ImgWeather id="wicon" src={iconurl} alt="Weather icon"/>                 
                    <Temperature>{`${temperature}°`}</Temperature>
                </ContentTemperature>
            </div>
        </WeatherContainer>
    )
}

export default Weather;