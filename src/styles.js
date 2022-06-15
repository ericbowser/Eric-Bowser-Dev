import styled from "styled-components";

const TextWrapper = styled.div`
  margin: 5px;
  font-size: 11pt;
  border: 2px outset azure;
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
  grid-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 50% 50%;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    ul {
      padding: 5px 15px 10px 10px;
    }
    display: inline;
    lineheight: 1;
    boxsizing: content-box;
  }
  @media only screen and (max-width: 250px) {
    ul {
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
  background-color: azure;
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
};
