import Container from "react-bootstrap/Container";
import ras from '../images/rasp_pi.png';
import {HeaderLine} from "../styles/styles";
import EbHome from "../images/erb_home.png";
import React from "react";

function Hobbies() {
	return (
		<Container>
			<HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
			<ul>
				<li>
					Raspberry Pi tinkering
					<img src={ras} alt={'raspberry pi icon'} style={{padding: '1em'}} />
				</li>
				<span>
					<li>
						3D Printing
					</li>
					<img src={EbHome} alt={'azcii art'} style={{width: '10em'}}/>
				</span>
			</ul>
		</Container>
	);
}

export default Hobbies;