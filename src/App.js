import React, {useEffect, useMemo, useState} from 'react'
import Container from "react-bootstrap/Container";
import Navigation from './Components/Navigation';


function App () {
  const windowHeight = window.innerHeight;
  const initialWidth = window.innerWidth;
  console.log('inner height:', windowHeight);
  console.log('inner width:', initialWidth);
  
  const winwidth = initialWidth <= 500 ? '100%' : '50%';
  
  
  return (
    <Container style={{width: winwidth}}>
      <Navigation />
    </Container>
  )
}

export default App
