import React from 'react';
import {HeaderLine, StyledContainer} from "../styles/styled-component-styles";

function Frameworks() {
    return (
      <StyledContainer>
            <HeaderLine>JavaScript</HeaderLine>
            <ul>
                <li>React</li>
                <li>React Query</li>
                <li>React Testing Library</li>
            </ul>
            <HeaderLine>Data</HeaderLine>
            <ul>
                <li>PostgreSQL</li>
                <li>Sql Server</li>
                <li>Dapper</li>
                <li>React Query</li>
                <li>Entity Framework</li>
            </ul>
            <HeaderLine>Testing</HeaderLine>
            <ul>
                <li>xUnit Testing Framework</li>
                <li>Moq / NSubstitute</li>
                <li>React Testing Library</li>
                <li>Shouldly / Assert</li>
                <li>Cypress</li>
                <li>K6 load testing</li>
                <li>Integration Testing</li>
            </ul>
          <br/>
          <br/>
      </StyledContainer>
    );
}

export default Frameworks;