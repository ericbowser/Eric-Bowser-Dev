import ras from '../images/rasp_pi.png';
import EbHome from "../images/erb_home.png";
import React from "react";
import {HeaderLine, StyledContainer} from "../styles/styled-component-styles";

function Hobbies() {
	return (
		<StyledContainer>
			<HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
			<img src={ras} alt={'raspberry pi icon'} style={{margin: '10px'}}/>
			<ul>
				<li>
					3D Printing
				</li>
				<li>
					Raspberry Pi
				</li>
				<li>
					AI for Assisted Research
				</li>
			</ul>
		</StyledContainer>
	);
}

export default Hobbies;