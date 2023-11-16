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
import {Image} from "../styles/styles";



function Navigation() {
	const [tabbedKey, setTabbedKey] = useState('None')
	
	useEffect(() => {
	}, [tabbedKey])
	return (
		<Container style={{padding: '2em'}}>
			<Card style={{padding: '2em'}}>
				<Navbar.Brand title={'Eric Ryan Bowser - Software Engineer'} style={{padding: '0em 0em 1em 0em'}}>Eric Ryan Bowser - Software Engineer</Navbar.Brand>
				<span >
					<Card.Img src={head} alt={'head shot'} style={{width: '15%'}} />
				</span>
				<Navbar >
					<Nav.Item>
						<a href={docx} title={'resume document'}>
							<Image src={doc} alt={'document'} style={{width: '2em'}}/>
						</a>
						<a href={'mailto:ericryanbowser@gmail.com'} title={'email'} >
							<Image src={email} alt={'email'} style={{width: '2em', margin:'2px'}}/>
						</a>
						<a href={'https://www.linkedin.com/in/eric-bowser-dev/'} title={'LinkIn'}>
							<Image src={linkedIn} alt={'linkedIn'} style={{width: '2em'}}/>
						</a>
						<a href={'https://github.com/ericbowser'} title={'GitHub'} >
							<img src={github} alt={'GitHub'} style={{width: '2em'}}/>
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