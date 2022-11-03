import React, {useEffect, useState} from 'react';
import {Container, Navbar, NavLink, Tab, Tabs} from 'react-bootstrap';
import Frameworks from "./Components/Frameworks";
import Tools from "./Components/Tools";
import EducationDetails from "./Components/Education";
import {GoldPointInfo, ProEdgeInfo, TekSystemsInfo, WtwInfo} from "./Components/Experience";
import Aspirations from "./Components/Aspirations";
import head from './images/head.jpg'
import ericDocx from './files/Eric-Bowser-Resume.docx';

function App() {
    const [tabbedKey, setTabbedKey] = useState('None')

    useEffect(() => {
    }, [tabbedKey])

    return (
        <Container>
            <Navbar bg="dark">
                <Navbar.Brand>
                    <img
                        src={head}
                        width="75"
                        height="100"
                        className="d-inline-block align-top"
                        alt="my head shot"
                        title={'Eric R Bowser'}
                    />
                </Navbar.Brand>
                <div>
                    <NavLink href={ericDocx} style={{color: 'white'}} download>Resume</NavLink>
                    <NavLink style={{color: 'white'}} href={'mailto:eric@erb-tech.com'}>Email Eric</NavLink>
                    <NavLink style={{color: 'white'}} href={'https://github.com/ericbowser'}>Github</NavLink>
                </div>
            </Navbar>
            <Tabs
                variant={'tabs'}
                id='resume-tabs'
                activeKey={tabbedKey}
                onSelect={key => setTabbedKey(key)}
            >
                <Tab eventKey='education' title='Education'>
                    <EducationDetails/>
                </Tab>
                <Tab eventKey='experience' title='Experience'>
                    <WtwInfo/>
                    <TekSystemsInfo/>
                    <GoldPointInfo/>
                    <ProEdgeInfo/>
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
            </Tabs>
        </Container>
    )
}

export default App
