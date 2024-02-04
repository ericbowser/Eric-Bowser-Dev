import styled from "styled-components";
import Container from 'react-bootstrap/Container'

export const Grid = styled.div`
  margin: 1em;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 300px 800px;
  grid-template-rows: 800px auto;
`;

export const GridCol1 = styled.div`
  padding: 15px;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`;

export const GridCol2 = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const StyledContainer = styled(Container)`
  box-shadow: red 3px 3px 3px;
`;

export const HeaderLine = styled.h5`
  box-shadow: orange 3px 3px 3px;
`