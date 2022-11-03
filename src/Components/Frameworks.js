import React from 'react';
import {Alert} from 'react-bootstrap';
import {MarginDiv} from "../Styles/styles";

function Frameworks() {
    return (
        <MarginDiv>
            <Alert variant={'info'}>JavaScript</Alert>
            <ul>
                <li>React</li>
                <li>React Query</li>
                <li>React Testing Library</li>
            </ul>
            <MarginDiv>
                <Alert variant={'info'}>Data</Alert>
            </MarginDiv>
            <ul>
                <li>PostgreSQL</li>
                <li>Sql Server</li>
                <li>Dapper</li>
                <li>React Query</li>
                <li>Entity Framework</li>
            </ul>
            <Alert variant={'info'}>Testing</Alert>
            <ul>
                <li>xUnit Testing Framework</li>
                <li>Moq / NSubstitute / (mocking libraries)</li>
                <li>React Testing Library</li>
                <li> Shouldly / Assert</li>
                <li>Cypress</li>
                <li>K6</li>
            </ul>
        </MarginDiv>
    );
}

export default Frameworks;