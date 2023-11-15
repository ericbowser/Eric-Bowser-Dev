import React, {useEffect, useState} from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";

import Frameworks from "../Components/Frameworks";
import Aspirations from "../Hobbies/Aspirations";
import Hobbies from "../Hobbies/Hobbies";
import Tools from "../Components/Tools";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import head from '../images/head_2023.jpg';

// images
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import EbHome from '../images/erb_home.png';
import {HeaderLine} from "../styles/styles";

function Navigation() {
	const [tabbedKey, setTabbedKey] = useState('None')
	
	useEffect(() => {
	}, [tabbedKey])
	return (
		<Container style={{margin: '25px'}}>
			<Card>
			{/*	<CardHeader title={'Eric Ryan Bowser'}>
					Eric Bowser : Full Stack Software Engineer
				</CardHeader>*/}
				<span >
					<Card.Img src={head} alt={'head shot'} style={{width: '25%'}} />
					<Card.Img src={EbHome} alt={'azcii art'} style={{width: '30%'}}/>
				</span>
				<Navbar>
					<Navbar.Brand title={'E.R.B'}  ></Navbar.Brand>
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
				</Navbar>
				<Card.Body>
					<Tabs
						variant={'tabs'}
						id='resume-tabs'
						activeKey={tabbedKey}
						onSelect={key => setTabbedKey(key)}
					>
						<Tab eventKey='education' title='Education'>
							<Education/>
						</Tab>
						<Tab eventKey='experience' title='Experience'>
							<Experience/>
						</Tab>
						<Tab eventKey='frameworks' title='Frameworks'>
							<Frameworks/>
						</Tab>
						<Tab eventKey='tools' title='tools'>
							<Tools/>
						</Tab>
						<Tab eventKey='aspirations' title={'Aspirations'}>
							<Aspirations/>
						</Tab>
						<Tab eventKey='hobbies' title={'Hobbies'}>
							<Hobbies/>
						</Tab>
					</Tabs>
				</Card.Body>
			</Card>
		</Container>
	);
}
export default Navigation;