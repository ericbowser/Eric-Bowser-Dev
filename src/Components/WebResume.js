import Aspirations from "./Aspirations";
import Tools from "./Tools";
import {WtwInfo, GoldPointInfo, ProEdgeInfo, TekSystemsInfo} from "./Experience";
import {Carousel, Container, Tab, Tabs} from "react-bootstrap";
import Frameworks from "./Frameworks";
import EducationDetails from "./Education";
import React, {useEffect, useState} from "react";

import  kick_flip from '../images/kick_flip.jpg'
import kickflip_2 from '../images/kickflip_2.jpg'
import flip_3 from '../images/flip_3.jpg'
function WebResume() {
	const [tabbedKey, setTabbedKey] = useState('None')
	
	useEffect(() => {}, [tabbedKey])
	return (
		<Container>
		
			<a href={'/'}>Back</a>
		<Tabs
				variant={'tabs'}
				id='resume-tabs'
				activeKey={tabbedKey}
				onSelect={key => setTabbedKey(key)}
			>
				<Tab eventKey='education' title='Education'>
					<EducationDetails />
				</Tab>
				<Tab eventKey='experience' title='Experience'>
					<WtwInfo />
					<TekSystemsInfo />
					<GoldPointInfo />
					<ProEdgeInfo />
			</Tab>
				<Tab eventKey='frameworks' title='Frameworks'>
					<Frameworks />
				</Tab>
				<Tab eventKey='tools' title='tools'>
					<Tools />
				</Tab>
			</Tabs>
		</Container>
	)
}

export default WebResume;