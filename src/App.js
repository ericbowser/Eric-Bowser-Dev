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
import styled from "styled-components";

const NavbarContainer = styled(Container)`
  color: white;
  margin: 1%;
`;

function App () {

  return (
    <NavbarContainer style={{backgroundColor: 'azure', border: 'solid 1px blue', borderRadius:'1%', width: 'auto'}}>
      <Navbar variant={'dark'}>
        <Navbar.Brand>
          <img
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
          <NavLink
            style={{ color: 'white' }}
            href='/webresume'
          >
            Experience
          </NavLink>
          
        </div>
      </Navbar>
    </NavbarContainer>
  )
}

export default App
