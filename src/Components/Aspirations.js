import React from "react";
import flip from '../images/flip_3.jpg';

function Aspirations() {
  return (
    <div className={'container m-5'}>
      <img src={flip} style={{width: '25%', float: 'right'}} alt={'kick flip'} />
    <div style={{margin: '1em 1em 1em 1em'}}>
      <div>
        <span className={'h5'}>Aspirations</span>
      </div>
      <ul>
        <li>
          Full stack engineer looking for a new opportunity to take software engineering
          to the next level
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Aspirations;