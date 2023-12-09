import React from 'react';

function Tools()  {
    return (
      <div className={'container m-5'}>
      <span className={'h5'}>Tools</span>
        <div>
          <ul>
            <li>Visual Studio 2019/22/23</li>
            <li>Visual Studio Code</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Azure</li>
            <li>Azure Data Studio</li>
            <li>dotnet tools / dotnet scripts</li>
            <li>ReSharper / Rider</li>
            <li>pgAdmin</li>
          </ul>
        </div>
        <span className={'h5'}>Logging</span>
        <div>
        <ul>
          <li>SumoLogic</li>
          <li>Serilog</li>
          <li>Sentry</li>
          <li>NLog</li>
        </ul>
        </div>
        <span className={'h5'}>Scripting</span>
       <div>
      <ul>
          <li>Git Bash / Bash</li>
          <li>Linux / Raspbian / Ubuntu</li>
          <li>Powershell</li>
          <li>Cake Make</li>
      </ul>
        </div>
      <span className={'h5'}>Data</span>
      <div>
      <ul>
          <li>Cosmos DB</li>
          <li>Microsoft SQL Server</li>
          <li>PostgreSQL</li>
      </ul>
        </div>
      </div>
    )
}

export default Tools;