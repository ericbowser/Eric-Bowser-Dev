import styled from "styled-components";

const ImgWrapper = styled.span`
  padding: 0px 20px 20px 20px;
`;
const TextWrapper = styled.div`
  margin: 5px 0 0 5px;
  font-size: 12pt;
`;
const JustifyDiv = styled.div`
  text-align: justify;
`;

const GridWrapper = styled.span`
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 50% 50%;
  word-wrap: multi-line;
  @media only screen and (max-width: 500px) {
    ul {
      padding: 5px 15px 10px 10px;
    }
    display: inline;
    line-height: 1;
    box-sizing: content-box;
  }
`;
const GridCol1Row1 = styled.span`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
`;
const GridCol2Row1 = styled.span`
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 3;
  @media only screen and (max-width: 500px) {
    ul {
      padding: 0;
    }
    display: inline;
    line-height: 1;
  }
`;

export {
  GridCol1Row1,
  GridCol2Row1,
  GridWrapper,
  TextWrapper,
  JustifyDiv,
  ImgWrapper,
};