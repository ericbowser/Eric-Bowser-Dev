import {Card, Container, Navbar, NavLink} from "react-bootstrap";
import ascii from "../images/erb_home.png";
import head from '../images/erb_home.png';
import github from '../icons/github.png';
import gmail from '../icons/email.png';
import React from "react";

function Navigation () {
	return (
		<Container>
		
		<Card>
			<Card.Body>
				<Card.Img src={head} alt={'Me'}  />
				<a href={'https://github.com/ericbowser'}>
					<img src={github} alt={'github'}/>
				</a>
				<a href={'mailto:ericryanbowser@gmail.com'}>
					<img src={gmail} alt={'email'}/>
				</a>
				{/*			<a href={''}>
						<img src={gmail} alt={'email'}/>
					</a>*/}
		<Navbar>
		
			<Navbar.Brand title={'E.R.B'}></Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
		{/*		<Navbar.Text>
					<img src={ascii} alt={'E.R.B'} style={{border: '10px solid grey', padding: '5px'}}/>
				</Navbar.Text>*/}
				<NavLink href="/frameworks">Frameworks</NavLink>
				<NavLink href="/tools">Tools</NavLink>
				<NavLink href="/experience">Experience</NavLink>
				<NavLink href="/education">Education</NavLink>
				<NavLink href="/aspirations">Aspirations</NavLink>
			</Navbar.Collapse>
		
		</Navbar>
			</Card.Body>
		</Card>
		</Container>
	)
}

export default Navigation;