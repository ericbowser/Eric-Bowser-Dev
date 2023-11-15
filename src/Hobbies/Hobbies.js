import Container from "react-bootstrap/Container";
import head from '../icons/pdf.ico';
import ras from '../Hobbies/rasp_pi.png';
import {HeaderLine} from "../styles/styles";

function Hobbies() {
	return (
		<Container>
			<HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
			<ul>
				<li>3D Printing</li>
				<img src={ras} alt={'raspberry pi icon'} />
			</ul>
		</Container>
	);
}

export default Hobbies;