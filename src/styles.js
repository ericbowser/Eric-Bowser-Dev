import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  padding: 20px;
`;

const CalendarStyle = styled.button`
  color: blue;
`;

const JustifyDiv = styled.div`
  text-align: justify;
  padding: 0 0 10px 0;
`;

const AlertHeader = styled.h1`
  font-size: 12pt;
  color: ${props => props?.color ?? 'black'};
`;
const AlertSubHeader = styled.h1`
  font-size: 11pt;
  color: ${props => props?.color ?? 'black'};
`;

const GridWrapper = styled.span`
  font-size: 12pt;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 40% 60%;
  word-wrap: break-word;
  ul {
    color: black;
  }
  @media only screen and (max-width: 600px) {
    ul {
      padding: 0px;
    }
    font-size: 9pt;
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

export {
  AlertSubHeader,
  GridCol1Row1,
  GridCol2Row1,
  GridWrapper,
  AlertHeader,
  JustifyDiv,
  StyledContainer,
  CalendarStyle
};
