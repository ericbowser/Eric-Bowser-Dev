import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/*
import NavLink from "react-bootstrap/NavLink";
import EbHome from '../images/erb_home.png';
*/
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import React from "react";
import Frameworks from "../Components/Frameworks";
import Aspirations from "../Hobbies/Aspirations";
import Hobbies from "../Hobbies/Hobbies";
import Tools from "../Components/Tools";
import Experience from "../Components/Experience";
import Container from "react-bootstrap/Container";

function Navigation() {
	return (
		<Container>
			<Navbar>
				<Navbar.Brand title={'E.R.B'}></Navbar.Brand>
				<Nav.Item>
					<a href={docx}>
						<img src={doc} alt={'document'} style={{width: '5em'}}/>
					</a>
					<a href={'mailto:ericryanbowser@gmail.com'} title={'email'}>
						<img src={email} alt={'email'}/>
					</a>
					<a href={'https://www.linkedin.com/in/eric-bowser-dev/'} title={'LinkIn'}>
						<img src={linkedIn} alt={'linkedIn'}/>
					</a>
					<a href={'https://github.com/ericbowser'} title={'GitHub'}>
						<img src={github} alt={'GitHub'}/>
					</a>
				</Nav.Item>
				<div>
					<Frameworks/>
					<Aspirations/>
					<Hobbies/>
					<Experience/>
					<Tools/>
				
				</div>
			</Navbar>
		</Container>
	);
}
export default Navigation;