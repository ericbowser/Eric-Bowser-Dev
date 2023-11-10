import React, { useEffect, useState } from 'react'
import {Accordion, Container, Navbar, NavLink, Tab, Tabs} from 'react-bootstrap'
import Frameworks from './Components/Frameworks'
import Tools from './Components/Tools'
import EducationDetails from './Components/Education'
import {
  GoldPointInfo,
  ProEdgeInfo,
  TekSystemsInfo,
  WtwInfo
} from './Components/Experience'
import Aspirations from './Components/Aspirations'
import head from './images/head.jpg'
import ericDocx from './files/Eric-Bowser-Resume-2023.docx'

function App () {
  const [tabbedKey, setTabbedKey] = useState('None')

  useEffect(() => {}, [tabbedKey])

  return (
    <Container style={{marginTop: '25px'}}>
      <Navbar bg='dark'>
        <Navbar.Brand>
          <img
            src={head}
            width='175'
            height='215'
            className='d-inline-block align-top'
            alt='my head shot'
            title={'Eric R Bowser'}
          />
        </Navbar.Brand>
        <div>
          <NavLink href={ericDocx} style={{ color: 'white' }} download>
            Resume
          </NavLink>
          <NavLink style={{ color: 'white' }} href={'mailto:eric@erb-tech.com'}>
            Email Eric
          </NavLink>
          <NavLink
            style={{ color: 'white' }}
            href={'https://github.com/ericbowser'}
          >
            Github
          </NavLink>
        </div>
      </Navbar>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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
  )
}

export default App
