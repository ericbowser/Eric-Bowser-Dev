import Aspirations from "./Aspirations";
import Education from "./Education";
import Tools from "./Tools";
import {WtwInfo, GoldPointInfo, ProEdgeInfo, TekSystemsInfo} from "./Experience";
import {Container, Tab, Tabs} from "react-bootstrap";
import Frameworks from "./Frameworks";
import EducationDetails from "./Education";
import {useEffect, useState} from "react";

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
				<Tab eventKey='aspirations' title={'Aspirations'}>
					<Aspirations />
				</Tab>
			</Tabs>
			
		</Container>
	/*	<Tabs>
			<Tools />
			<Aspirations />
			<Education />
			<div>
				Experience
				<WtwInfo />
				<GoldPointInfo />
				<ProEdgeInfo />
				<TekSystemsInfo />
			</div>*/
	)
}

export default WebResume;