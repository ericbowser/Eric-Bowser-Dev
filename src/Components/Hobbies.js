import ras from '../images/rasp_pi.png';
import React from "react";

function Hobbies() {
	return (
		<div className={'container'}>
			<span className={'h5'} title={'Hobbies'}>Hobbies</span>
			<ul>
				<li>
					<img src={ras} alt={'raspberry pi icon'}  />
					Raspberry Pi tinkering
				</li>
				<span>
					<li>
						3D Printing
					</li>
				</span>
			</ul>
		</div>
	);
}

export default Hobbies;