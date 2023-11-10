import React, { useEffect, useState } from 'react'
import {Accordion, Carousel, Container, Navbar, NavLink, Tab, Tabs} from 'react-bootstrap'
import head2 from './images/head2.jpg'
import  kick_flip from './images/kick_flip.jpg'
import ollie from './images/kickflip_2.jpg'
import flip_3 from './images/ollie.jpg'
import ericDocx from './files/Eric-Bowser-Resume-2023.docx'
import styled from "styled-components";

const NavbarContainer = styled(Container)`
  margin-top: 30px;
  background-color: lightslategray;
  width: 100%;
  border-radius: 2%;
`;

function App () {

  return (
    <NavbarContainer >
      <Navbar >
        <Navbar.Brand>
          <img src={head2} alt={'Me'} style={{width:'auto', height:'170px'}}/>
        </Navbar.Brand>
        <div>
          <NavLink href={ericDocx} style={{ color: 'white' }} download>
            Resume
          </NavLink>
          <NavLink style={{ color: 'white' }} href={'mailto:ericryanbowser@gmail.com'}>
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
      
    <Carousel style={{height: '300px', width: '900px', padding:'125px'}}>
      <Carousel.Item>
        <img src={ollie}  alt={''}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ollie}  alt={''}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={flip_3}  alt={''}/>
      </Carousel.Item>
        </Carousel>
      </NavbarContainer>
  )
}

export default App
