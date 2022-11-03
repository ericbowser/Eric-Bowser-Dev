import styled from 'styled-components';
import {Alert} from 'react-bootstrap';

const AlertHeader = styled(Alert)`
  font-size: 14pt;
  color: ${props => props?.color ?? 'black'};
`
const AlertSubHeader = styled(Alert)`
  font-size: 12pt;
  color: ${props => props.color || 'black'};
`
const Desc = styled.div`
    color: black;
    font-size: 10pt;
`;
const MarginDiv = styled.div`
    margin: 15px 0 15px 0;
`;
export {AlertHeader, AlertSubHeader, Desc, MarginDiv};