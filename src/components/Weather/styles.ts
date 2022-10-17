import styled from 'styled-components'
import '../../styles/styles'

const CityLocation = styled.div`
	align-items: center;
	justify-content: center;
`;

const TemperatureBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Temperature = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	text-align: center;
	color: #222222;
`;

export {
    CityLocation,
    TemperatureBox,
    Temperature
}
