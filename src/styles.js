import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  max-width: 1600px;
  padding: 20px;
`;
const TextWrapper = styled.div`
  margin: 3px;
  font-weight: bold;
  line-height: 1.5;
`;
const JustifyDiv = styled.div`
  text-align: justify;
  padding: 0 0 10px 0;
`;

const AlertSubHeader = styled.h1`
  padding: 10px 0px 0px 2px;
  font-size: ${props => props?.fontSize ?? '18pt'};
  color: ${props => props?.color ?? 'black'};
`;

const GridWrapper = styled.span`
  font-size: 14pt;
  color: black;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 30% 60% 10%;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    ul {
      padding: 0px;
    }
    display: inline;
  }
`;
const GridCol1Row1 = styled.div`
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 2;
`;
const GridCol2Row1 = styled.div`
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 3;
`;
const GridCol3Row1 = styled.div`
  grid-row: 1;
  grid-column-start: 3;
  grid-column-end: -1;
`;

export {
  AlertSubHeader,
  GridCol1Row1,
  GridCol2Row1,
  GridCol3Row1,
  GridWrapper,
  TextWrapper,
  JustifyDiv,
  StyledContainer,
};
