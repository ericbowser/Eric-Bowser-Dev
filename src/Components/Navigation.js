import React, {useEffect, useRef, useState} from "react";

import Frameworks from "../Components/Frameworks";
import Aspirations from "../Components/Aspirations";
import Hobbies from "../Components/Hobbies";
import Tools from "../Components/Tools";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';

// images
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import eb_50 from "../images/erb_home.png";


function Navigation() {
	const [tabbIndex, setTabIndex] = useState(0)
	
		useEffect(() => {
	}, [tabbIndex])
	
	return (
		// <div className={'container '}>
		// 	<img src={eb_50} alt="E.R.B." />
		// 	<span className={'pb-4 pt-4'}>
		// 			<a className={'p-1'} href={'https://www.linkedin.com/in/eric-bowser-dev/'} >
		// 				<img  src={linkedIn} alt={'LinkedIn'} style={{width: '3em', margin: '3px'}}/>
		// 			</a>
		// 			<a className={'p-1'} href={'https://github.com/ericbowser'} >
		// 				<img  src={github} alt={'GitHub'} style={{width: '3em', margin: '3px'}}/>
		// 			</a>
		// 			<a className={'p-1'} href={'mailto:ericryanbowser@gmail.com'} >
		// 				<img src={email} alt={'email'} style={{width: '3em', margin: '3px'}}/>
		// 			</a>
		// 			<a className={'p-1'} href={docx} >
		// 				<img  src={doc} alt={'document'} style={{width: '3em', margin: '3px'}} />
		// 			</a>
		// 	</span>
		<Tabs selectedIndex={tabbIndex} onSelect={(index) => setTabIndex(index)}>
			<TabList>
				<Tab>Title 1</Tab>
				<Tab>Title 2</Tab>
			</TabList>
			<TabPanel></TabPanel>
			<TabPanel></TabPanel>
		</Tabs>
		// </div>
	)
}
export default Navigation;