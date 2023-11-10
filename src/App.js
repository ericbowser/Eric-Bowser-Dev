import React, { useEffect, useState } from 'react'
import {Accordion, Container, Navbar, NavLink, Tab, Tabs} from 'react-bootstrap'
import head2 from './images/head2.jpg'
import ericDocx from './files/Eric-Bowser-Resume-2023.docx'
import styled from "styled-components";

const NavbarContainer = styled(Container)`
  color: black;
  margin: 1%;
`;

function App () {

  return (
    <NavbarContainer style={{backgroundColor: '#65FF', border: 'solid 2px pink', borderRadius:'2%', width: 'auto'}}>
      <Navbar variant={'dark'}>
        <Navbar.Brand>
          <img
            width={'200px'}
            src={head2}
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
