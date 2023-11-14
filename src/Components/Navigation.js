import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import EbHome from '../images/erb_home.png';
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import pi from '../images/rasp_48.png';
import React from "react";
import Container from "react-bootstrap/Container";

function Navigation () {
	return (
		/*<Card>
			<Card.Body>
				<Card.Img src={EbHome} alt={'Me'}  />*/
		<Container>
					<Navbar>
						<Navbar.Brand title={'E.R.B'}></Navbar.Brand>
						<Nav.Item>
							<a href={docx} >
							<img src={doc} alt={'document'} style={{width: '5em'}} />
							</a>
							<a href={'mailto:ericryanbowser@gmail.com'} title={'email'} >
								<img src={email}  alt={'email'}/>
							</a>
							<a href={'https://www.linkedin.com/in/eric-bowser-dev/'} title={'LinkIn'}>
								<img src={linkedIn} alt={'linkedIn'} />
							</a>
							<a href={'https://github.com/ericbowser'} title={'GitHub'} >
								<img src={github}  alt={'GitHub'}/>
							</a>
							<a href={''} title={'GitHub'} >
								<img src={pi}  alt={'ras pi'}/>
							</a>
						</Nav.Item>
							<Nav.Item style={{padding: '1em'}}>
								<NavLink href="/frameworks">Frameworks</NavLink>
							</Nav.Item>
							<Nav.Item style={{padding: '1em'}}>
								<NavLink href={'/tools'} title={'tools'}>Tools</NavLink>
							</Nav.Item>
							<Nav.Item style={{padding: '1em'}}>
								<NavLink href={'/experience'}  title={'experience'}>Experience</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink href={'/education'}  title={'education'}>Education</NavLink>
							</Nav.Item>
							<Nav.Item style={{padding: '1em'}}>
								<NavLink href={'/aspirations'} title={'aspirations'}/>
							</Nav.Item>
							<Nav.Item style={{padding: '1em'}}>
								<NavLink href={"/experience"} title={'experience'}/>
							</Nav.Item>
							<Nav.Item style={{padding: '1em'}} title={'Hobbies'}>
								<NavLink href={'/hobbies'} title={'hobbies'}/>
							</Nav.Item>
					</Navbar>
		</Container>
	)
}

export default Navigation;