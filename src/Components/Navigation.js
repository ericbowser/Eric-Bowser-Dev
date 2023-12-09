import React, {useEffect, useRef, useState} from "react";

import Frameworks from "../Components/Frameworks";
import Aspirations from "../Components/Aspirations";
import Hobbies from "../Components/Hobbies";
import Tools from "../Components/Tools";
import Experience from "../Components/Experience";
import Education from "../Components/Education";

// images
import github from '../images/github.png';
import email from '../images/email.png';
import linkedIn from '../images/linkedin.png';
import docx from '../files/Eric-Bowser-Resume-2023.docx';
import doc from '../icons/docxIcon.ico';
import eb_50 from "../images/erb_home.png";

function Navigation() {
	const [tabbedKey, setTabbedKey] = useState('None')
		useEffect(() => {
	}, [tabbedKey])
	
	function scrollToSection() {
		console.log('calling scroll')
		
		return window.scrollTo({
			x: 0,
			y: 400
		})
	}
	

	return (
		<React.Fragment>
			<div className={'container m-5'}>
				<div className={'card'}>
						<img src={eb_50} alt={'another head shot'}  />
							<div className={'card-body align-middle align-self-center'}>
								<a className={'card-img m-1'} href={'https://www.linkedin.com/in/eric-bowser-dev/'} >
									<img  src={linkedIn} alt={'LinkedIn'} style={{width: '3em'}}/>
								</a>
								<a className={'card-img m-1'} href={'https://github.com/ericbowser'} >
									<img  src={github} alt={'GitHub'} style={{width: '3em'}}/>
								</a>
								<a className={'card-img m-1'} href={'mailto:ericryanbowser@gmail.com'} >
									<img src={email} alt={'email'} style={{width: '3em'}}/>
								</a>
								<a className={'card-img m-1'} href={docx} >
									<img  src={doc} alt={'document'} style={{width: '3em', margin: '2px'}} />
								</a>
						</div>
					{/*<Card.Header title={'E.R.B'} style={{backgroundColor: 'cyan'}}>*/}
					{/*</Card.Header>*/}
				</div>
			
			<tab
				className={'tab-content'}
				variant={'tabs'}
				id='resume-tabs'
				activeKey={tabbedKey}
				onSelect={key => setTabbedKey(key)}
			>
				<tab eventKey='education' title='Education'>
					<Education/>
				</tab>
				<tab eventKey='experience' title='Experience' onClick={() => scrollToSection()}>
					<Experience />
				</tab>
				<tab eventKey='frameworks' title='Frameworks'>
					<Frameworks/>
				</tab>
				<tab eventKey='tools' title='Tools'>
					<Tools/>
				</tab>
				<tab eventKey='aspirations' title={'Aspirations'}>
					<Aspirations/>
				</tab>
				<tab eventKey='hobbies' title={'Hobbies'}>
					<Hobbies/>
				</tab>
			</tab>
		</div>
		</React.Fragment>
	)
}
export default Navigation;