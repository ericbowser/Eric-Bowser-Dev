import ras from '../images/rasp_pi.png';
import React from "react";

function Hobbies() {
	return (
		<div className={'m-5'}>
			<img src={ras} alt={'raspberry pi icon'}  className={'p-4'} />
			<span className={'h5'} title={'Hobbies'}>Hobbies</span>
			<ul>
				<li>
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