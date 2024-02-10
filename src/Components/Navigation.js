import React, {useEffect, useState, lazy} from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Frameworks from "../Components/Frameworks";
import Aspirations from "../Components/Aspirations";
import Hobbies from "../Components/Hobbies";
import Tools from "../Components/Tools";
import Education from "../Components/Education";
import head from '../images/head.jpg';

// images
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/E.R.B-Resume.docx';
import doc from '../icons/docxIcon.ico';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import {Figure} from "react-bootstrap";

const Experience = lazy(() => import('../Components/Experience'));


export const Grid = styled.div`
    margin: 1em;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 250px auto;
    grid-template-rows: auto auto;
    @media (max-width: 530px) {
        display: block;
        .responsive.image {
            width: 35%; /* Reduces the size to 75% of the parent element, effectively reducing the image size by 25% */
        }
    }
`;

export const GridCol1 = styled.div`
  padding: 15px;
  text-align: center;
  grid-column: 1;
  grid-row: -1;
`;

export const GridCol2 = styled.div`
  grid-column: 2;
  grid-row: -1;
`;

export const StyledContainer = styled(Container)`
  box-shadow: black 13px 13px 20px;
  margin: 1em;
`;

function Navigation() {
    const [tabbedKey, setTabbedKey] = useState('None');
    useEffect(() => {
    }, [tabbedKey])

    return (
        <StyledContainer>
            <Grid>
                <GridCol1>
                    <Figure>
                        <Figure.Image
                            src={head}
                            style={{
                                width: '100%',
                                marginBottom: '15px',
                                boxShadow: 'black 0 7px 15px 0',
                                borderRadius: '8px'
                            }}
                        />
                        <Figure.Caption>
                            <div style={{margin: '15px'}}>
                                <a href={'https://www.linkedin.com/in/eric-bowser-dev/'} title={'LinkIn'}>
                                    <img src={linkedIn} alt={'linkedIn'} style={{width: '3em'}}/>
                                </a>
                                <a href={'https://github.com/ericbowser'} title={'GitHub'}>
                                    <img src={github} alt={'GitHub'} style={{width: '3em'}}/>
                                </a>
                                <a href={'mailto:ericryanbowser@gmail.com'} title={'email'}>
                                    <img src={email} alt={'email'} style={{width: '3em', margin: '2px'}}/>
                                </a>
                                <a href={docx} title={'resume document'}>
                                    <img src={doc} alt={'document'} style={{width: '3em', margin: '2px'}}/>
                                </a>
                            </div>
                        </Figure.Caption>
                    </Figure>
                </GridCol1>
                <GridCol2>
                    <Tabs
                        style={{margin: '5px'}}
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
                </GridCol2>
            </Grid>
        </StyledContainer>
    )
}

export default Navigation;