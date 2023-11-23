import React from 'react';
import {HeaderLine, StyledContainer} from "../styles/styled-component-styles";

function Tools()  {
    return (
      <StyledContainer>
      <HeaderLine>Tools</HeaderLine>
        <div>
          <ul>
            <li>Visual Studio 2019/22/23</li>
            <li>Visual Studio Code</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Azure</li>
            <li>Azure Data Studio</li>
            <l>dotnet tools / dotnet scripts</l>
            <l>ReSharper / Rider</l>
            <l>pgAdmin</l>
          </ul>
        </div>
        <HeaderLine>Logging</HeaderLine>
        <div>
        <ul>
          <li>SumoLogic</li>
          <li>Serilog</li>
          <li>Sentry</li>
          <li>NLog</li>
        </ul>
        </div>
      <HeaderLine>Scripting</HeaderLine>
       <div>
      <ul>
          <li>Git Bash / Bash</li>
          <li>Linux / Raspbian / Ubuntu</li>
          <li>Powershell</li>
          <li>Cake Make</li>
      </ul>
        </div>
      <HeaderLine>Data</HeaderLine>
      <div>
      <ul>
          <li>Cosmos DB</li>
          <li>Microsoft SQL Server</li>
          <li>PostgreSQL</li>
      </ul>
        </div>
      </StyledContainer>
    )
}

export default Tools;