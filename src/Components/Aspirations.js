import React from "react";
import flip from '../images/flip_3.jpg';
import {HeaderLine} from "../styles/styles";

function Aspirations() {
  return (
    <>
    <div style={{margin: '1em 1em 1em 1em'}}>
      <img src={flip} style={{width: '10em'}} alt={'kick flip'} />
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
  </>
  )
}

export default Aspirations;