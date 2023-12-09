import React from 'react';

function Frameworks() {
    return (
      <div className={'container m-5'}>
            <span className={'h5'}>JavaScript</span>
            <ul>
                <li>React</li>
                <li>React Query</li>
                <li>React Testing Library</li>
            </ul>
            <span className={'h5'}>Data</span>
            <ul>
                <li>PostgreSQL</li>
                <li>Sql Server</li>
                <li>Dapper</li>
                <li>React Query</li>
                <li>Entity Framework</li>
            </ul>
            <span className={'h5'}>Testing</span>
            <ul>
                <li>xUnit Testing Framework</li>
                <li>Moq / NSubstitute</li>
                <li>React Testing Library</li>
                <li>Shouldly / Assert</li>
                <li>Cypress</li>
                <li>K6 load testing</li>
                <li>Integration Testing</li>
            </ul>
      </div>
    );
}

export default Frameworks;