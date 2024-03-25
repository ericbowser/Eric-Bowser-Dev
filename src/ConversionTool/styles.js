﻿import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 33% 33%;
  grid-template-rows: 50% 50%;
  word-wrap: break-word;
  @media only screen and (max-width: 650px) {
    ul {
      padding: 5px 15px 0 3px;
    }

    display: inline;
  }
`;

const GridCol1Row1 = styled.div`
  box-shadow: black 5px 1px 5px 2px;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const GridCol2Row1 = styled.div`
  box-shadow: black 15px 3px 5px 2px;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const GridCol1Row2 = styled.div`
  box-shadow: black 1px 1px 5px 2px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const GridCol2Row2 = styled.div`
  box-shadow: black 5px 0px 5px 2px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
`;

export { Grid, GridCol1Row1, GridCol2Row1, GridCol2Row2, GridCol1Row2 };
