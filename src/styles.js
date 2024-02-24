import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled.div`
  .card {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
  padding: 25px;
`;
const TextWrapper = styled.div`
  font-size: 11pt;
  font-weight: bold;
  line-height: 1.3;
`;
const JustifyDiv = styled.div`
  text-align: left;
  padding: 0 0 10px 0;
`;

const AlertSubHeader = styled.h6`
  color: saddleBrown;
`;

const GridWrapper = styled.span`
  /*
  box-sizing: border-box;
  */
  display: grid;
  grid-template-columns: auto 30% 30%;
  word-wrap: break-word;
  grid-gap: 50px;
  padding: 50px;
  margin: 0 12em 0 12em;
  @media only screen and (max-width: 600px) {
    ul {
      padding: 5px 15px 0 3px;
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

const GridCol3Row1 = styled(Container)`
  box-shadow: white 12px 12px 10px 0;
  color: antiquewhite;
  grid-row: 1;
  grid-column-start: 3;
  grid-column-end: 4;
`;

export {
  AlertSubHeader,
  GridCol1Row1,
  GridCol2Row1,
  GridCol3Row1,
  GridWrapper,
  TextWrapper,
  JustifyDiv,
  StyledContainer
};
