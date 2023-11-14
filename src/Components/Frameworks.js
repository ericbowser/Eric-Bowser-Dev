import React from 'react';
import {Alert, Container} from 'react-bootstrap';
function Frameworks() {
    return (
      <Container style={{fontSize: '1em'}}>
        
            <Alert>JavaScript</Alert>
            <ul>
                <li>React</li>
                <li>React Query</li>
                <li>React Testing Library</li>
            </ul>
                <Alert>Data</Alert>
            <ul>
                <li>PostgreSQL</li>
                <li>Sql Server</li>
                <li>Dapper</li>
                <li>React Query</li>
                <li>Entity Framework</li>
            </ul>
            <Alert>Testing</Alert>
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