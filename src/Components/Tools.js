import React from 'react';
import Container from "react-bootstrap/Container";
import {HeaderLine} from '../styles/styles';
function Tools()  {
    return (
      <Container>
      <HeaderLine>Microsoft Tools</HeaderLine>
        <div style={{margin: '2em'}}>
          <ul>
            <li>Visual Studio 2019/2022-23</li>
            <li>Visual Studio Code</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Azure</li>
            <li>Azure Data Studio</li>
            <l>dotnet tools / dotnet scripts</l>
          </ul>
        </div>
        <HeaderLine>Logging</HeaderLine>
        <div style={{margin: '2em'}}>
        <ul>
          <li>SumoLogic</li>
          <li>Serilog</li>
          <li>Sentry</li>
          <li>NLog</li>
        </ul>
        </div>
      <HeaderLine>ScriptingAlert</HeaderLine>
       <div style={{margin: '2em'}}>
      <ul>
          <li>Git Bash</li>
          <li>Linux</li>
          <li>Powershell</li>
          <li>Cake Make</li>
      </ul>
        </div>
      <HeaderLine>Data</HeaderLine>
      <div style={{margin: '2em'}}>
      <ul>
          <li>Cosmos DB</li>
          <li>Microsoft SQL Server</li>
      </ul>
        </div>
      </Container>
    )
}

export default Tools;