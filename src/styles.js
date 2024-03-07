import styled from "styled-components";

const GridWrapper = styled.span`
    display: grid;
    grid-template-columns: 35% 50%;
    grid-gap: 15px;
    word-wrap: break-word;
    @media only screen and (max-width: 650px) {
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
    grid-column-end: -1;
`;

const StyledContainer = styled.div`
    .card {
        background-color: black;
        color: white;
        border: 1px solid white;
    }

    padding: 55px;
`;

const NavContainer = styled.div`
    padding: 15px 0 0 50px;
    color: white;
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

const HeaderGradient = styled.h1`
    background-image: linear-gradient(to right, blue, orange);
    color: white;
`;

const HeaderLine = styled.h5`
    box-shadow: coral 3px 3px 3px;
`;

const StyledDiv = styled.div`
    color: aqua;
`;

export {
    StyledDiv,
    HeaderLine,
    AlertSubHeader,
    GridCol1Row1,
    GridCol2Row1,
    GridWrapper,
    TextWrapper,
    JustifyDiv,
    StyledContainer,
    HeaderGradient,
    NavContainer
};
