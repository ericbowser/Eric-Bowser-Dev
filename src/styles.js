import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  max-width: 900px;
  padding: 20px;
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
  grid-template-columns: 40% 60%;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    ul {
      padding: 5px 15px 0px 3px;
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

export {
  AlertSubHeader,
  GridCol1Row1,
  GridCol2Row1,
  GridWrapper,
  TextWrapper,
  JustifyDiv,
  StyledContainer,
};
