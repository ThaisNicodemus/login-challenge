import styled from 'styled-components'

const WeatherContainer = styled.div`
	justify-content: flex-end;
	flex: 1;
	display: flex;
	margin: 20px;
	user-select: none;
	max-width: 200px;
	@media (max-width: 800px) {
		margin-left: 0px;
	}
`
const ContentCity = styled.div`
	align-items: center;
	justify-content: center;
`

const Paragraph = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	text-align: center;
	color: #222222;
`

const Temperature = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	text-align: center;
	color: #222222;
`

const ImgWeather = styled.img`
	min-width: 40px;
	min-height: 40px;
	margin-right: 2px;
`

const ContentTemperature = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export {
	WeatherContainer,
	Paragraph,
	Temperature,
	ImgWeather,
	ContentTemperature,
	ContentCity,
}
