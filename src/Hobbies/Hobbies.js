import Container from "react-bootstrap/Container";
import head from '../icons/pdf.ico';
import {HeaderLine} from "../styles/styles";

function Hobbies() {
	return (
		<Container>
			<HeaderLine title={'Hobbies'}>Hobbies</HeaderLine>
			<ul>
				<li>3D Printing</li>
				<image src={head}>3D Printing</image>
			</ul>
		</Container>
	);
}

export default Hobbies;