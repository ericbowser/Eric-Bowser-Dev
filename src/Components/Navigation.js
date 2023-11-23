import React, {useEffect, useState} from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Frameworks from "../Components/Frameworks";
import Aspirations from "../Components/Aspirations";
import Hobbies from "../Components/Hobbies";
import Tools from "../Components/Tools";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import head from '../images/head2_2023.jpg';

// images
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import EbHome from "../images/erb_home.png";
import {StyledContainer} from "../styles/styled-component-styles";

function Navigation() {
	const [tabbedKey, setTabbedKey] = useState('None')
		useEffect(() => {
	}, [tabbedKey])
	
	return (
		<StyledContainer>
			<Card style={{padding: '1em'}}>
				<span style={{margin: '1em'}}>
					<Card.Img src={EbHome} alt={'Ascii Art'} style={{width: '45%', color: '#f0f8ff', border: '3px double black', padding: '1em'}} />
					<Card.Img src={head} alt={'head shot'} style={{width: '35%', float: 'right', border: '3px double black', borderRadius: '1em', boxShadow: 'solid'}} />
				</span>
				<Card.Header title={'E.R.B'} style={{backgroundColor: '#f0f8ff'}}>
					<div >
						<a href={'https://www.linkedin.com/in/eric-bowser-dev/'} title={'LinkIn'}>
							<img src={linkedIn} alt={'linkedIn'} style={{width: '3em'}}/>
						</a>
						<a href={'https://github.com/ericbowser'} title={'GitHub'} >
							<img src={github} alt={'GitHub'} style={{width: '3em'}}/>
						</a>
						<a href={'mailto:ericryanbowser@gmail.com'} title={'email'} >
							<img src={email} alt={'email'} style={{width: '3em', margin:'2px'}}/>
						</a>
						<a href={docx} title={'resume document'}>
							<img src={doc} alt={'document'} style={{width: '3em', margin:'2px'}}/>
						</a>
					</div>
				</Card.Header>
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
						<Tab eventKey='tools' title='Tools'>
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
		</StyledContainer>
	);
}
export default Navigation;