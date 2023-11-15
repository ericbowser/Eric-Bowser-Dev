import Alert from "react-bootstrap/Alert";
import pi from '../images/rasp_48.png'
import Container from "react-bootstrap/Container";
import head from '../icons/pdf.ico';

function Hobbies() {
	return (
		<Container>
			<Alert title={'Hobbies'}>Hobbies</Alert>
			<ul>
				<li>3D Printing</li>
				<image src={head}>3D Printing</image>
			</ul>
		</Container>
	);
}

export default Hobbies;