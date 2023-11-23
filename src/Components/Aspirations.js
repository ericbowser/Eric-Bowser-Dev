import React from "react";
import flip from '../images/flip_3.jpg';
import {HeaderLine, StyledContainer} from '../styles/styled-component-styles'

function Aspirations() {
  return (
    <StyledContainer>
      <img src={flip} style={{width: '25%', float: 'right'}} alt={'kick flip'} />
    <div style={{margin: '1em 1em 1em 1em'}}>
      <div>
        <HeaderLine>Aspirations</HeaderLine>
      </div>
      <ul>
        <li>
          Full stack engineer looking for a new opportunity to take software engineering
          to the next level
        </li>
      </ul>
    </div>
  </StyledContainer>
  )
}

export default Aspirations;