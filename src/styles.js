import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  max-width: 900px;
  padding: 20px;
`;
const TextWrapper = styled.div`
  margin: 3px;
  font-size: 12pt;
  font-weight: bold;
  line-height: 1.5;
`;
const JustifyDiv = styled.div`
  text-align: justify;
  padding: 0 0 10px 0;
`;

const AlertSubHeader = styled.h6`
  color: saddleBrown;
`;

const GridWrapper = styled.span`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 50% 50%;
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
