import styled from 'styled-components';
import {Alert} from 'react-bootstrap';

export const Heading = styled.span`
  border: 5px outset blue;
  margin: 5px;
  padding: 5px;
`;

const MainWrapper = styled.div`
	background-color: black;
`;

const AlertHeader = styled(Alert)`
  font-size: 18pt;
  color: ${props => props?.color ?? 'black'};
`
const AlertSubHeader = styled(Alert)`
  font-size: 16pt;
  color: ${props => props.color || 'black'};
`
const Desc = styled.div`
    color: black;
    font-size: 14pt;
`;
const MarginDiv = styled.div`
    margin: 15px;
`;
export {AlertHeader, AlertSubHeader, Desc, MarginDiv, MainWrapper};