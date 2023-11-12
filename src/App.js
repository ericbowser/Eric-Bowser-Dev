import React, { useEffect, useState } from 'react'
import {Accordion, Card, Carousel, Container, Navbar, NavLink, Tab, Tabs} from 'react-bootstrap'
import head2 from './images/head2.jpg'
import  kick_flip from './images/kick_flip.jpg'
import ollie from './images/kickflip_2.jpg'
import flip_3 from './images/ollie_2.jpg'
import flip_2 from './images/kickflip_2.jpg'
import ollie2 from './images/ollie.jpg'
import ericDocx from './files/Eric-Bowser-Resume-2023.docx'
import styled from "styled-components";
import {WtwInfo, GoldPointInfo, ProEdgeInfo, TekSystemsInfo} from "./Components/Experience"
import Education from "./Components/Education"
import Tools from "./Components/Tools"
import Frameworks from "./Components/Frameworks";

const NavbarContainer = styled(Container)`
  margin-top: 30px;
  background-color: lightslategray;
  width: 100%;
  border-radius: 2%;
`;

function App () {
  const [tabbedKey, setTabbedKey] = useState('None')
  useEffect(() => {}, [tabbedKey])

  return (
		<>
			<Carousel style={{backgroundColor: 'lightgrey'}}>
				<Carousel.Item>
					<img src={kick_flip}  alt={''}/>
				</Carousel.Item>
				<Carousel.Item>
					<img src={flip_2}  alt={''}/>
				</Carousel.Item>
				<Carousel.Item>
					<img src={flip_3}  alt={''}/>
				</Carousel.Item>
			</Carousel>
	  <Card>
		  <Card.Img src={head2} style={{width: '5%'}}/>
	  </Card>
		<Container>
			<Tabs
				variant={'tabs'}
				id='resume-tabs'
				activeKey={tabbedKey}
				onSelect={key => setTabbedKey(key)}
			>
				<Tab eventKey='education' title='Education'>
					<Education />
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
		
			</>
  )
}

export default App
