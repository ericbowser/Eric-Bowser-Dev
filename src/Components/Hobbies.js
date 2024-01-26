import ras from '../images/rasp_pi.png';
import EbHome from "../images/erb_home.png";
import React from "react";
import {HeaderLine, StyledContainer} from "../styles/styled-component-styles";

function Hobbies() {
	return (
		<StyledContainer>
			<HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
				<img src={ras} alt={'raspberry pi icon'} />
				<span style={{boxShadow: 'red 2px 2px 1px'}}>
						3D Printing
					<img src={EbHome} alt={'azcii art'} />
				</span>
		</StyledContainer>
	);
}

export default Hobbies;