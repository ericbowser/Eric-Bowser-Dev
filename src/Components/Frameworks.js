import React from 'react';
import Container from 'react-bootstrap/Container';
import {HeaderLine} from "../styles/styles";
function Frameworks() {
    return (
      <Container style={{fontSize: '1em'}}>
        
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
                <li>Moq / NSubstitute / (mocking libraries)</li>
                <li>React Testing Library</li>
                <li>Shouldly / Assert</li>
                <li>Cypress</li>
                <li>K6</li>
            </ul>
      </Container>
    );
}

export default Frameworks;