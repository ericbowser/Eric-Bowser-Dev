import ras from '../images/rasp_pi.png';
import React from "react";
import {HeaderLine} from "../styles";

function Hobbies() {
    return (
        <React.Fragment>
            <HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
            <img src={ras}
                 alt={'raspberry pi icon'}
                 style={{margin: '10px'}}
            />
            <ul>
                <li>Rock climbing</li>
                <li>3D Printing</li>
                <li>MTG</li>
                <li>Raspberry Pi Projects and Tinkering</li>
            </ul>
        </React.Fragment>
    );
}

export default Hobbies;