import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  max-width: 1600px;
`;

const TextWrapper = styled.div`
  margin: 5px;
  font-size: 11pt;
`;
const JustifyDiv = styled.div`
  text-align: justify;
  padding: 0 0 10px 0;
`;

const AlertSubHeader = styled.h6`
  margin-top: 10px;
  color: saddleBrown;
`;

const GridWrapper = styled.span`
  box-sizing: border-box;
  display: grid;
  row-gap: 20px;
  grid-template-columns: 50% 50%;
  word-wrap: break-word;
  header {
    margin: 10px 0 100px 0px;
  }
  @media only screen and (max-width: 600px) {
    ul {
      padding: 5px 15px 10px 10px;
    }
    header {
      margin: 0;
      padding: 0;
    }
    display: inline;
    lineheight: 1;
    boxsizing: content-box;
  }
  @media only screen and (max-width: 250px) {
    ul {
      padding: 0;
    }
    header {
      margin: 0;
      padding: 0;
    }
    display: inline;
    lineheight: 1;
  }
`;
const GridCol1Row1 = styled.div`
  padding-top: 50px;
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
