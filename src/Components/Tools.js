import React from 'react';
import {Alert} from "react-bootstrap";
const Tools = () => {
    return (
      <>
      <Alert>Microsoft Tools</Alert>
        <div style={{margin: '2em'}}>
          <ul>
            <li>Visual Studio 2019/2022</li>
            <li>Visual Studio Code</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>
        <Alert>Logging</Alert>
        <div style={{margin: '2em'}}>
        <ul>
          <li>SumoLogic</li>
          <li>Serilog</li>
          <li>Sentry (UI Logging)</li>
          <li>NLog</li>
        </ul>
        </div>
      <Alert>ScriptingAlert</Alert>
       <div style={{margin: '2em'}}>
      <ul>
          <li>Git Bash</li>
          <li>Linux</li>
          <li>Powershell</li>
          <li>Cake Make</li>
      </ul>
        </div>
      <Alert>Data</Alert>
      <div style={{margin: '2em'}}>
      <ul>
          <li>Cosmos DB</li>
          <li>Microsoft SQL Server</li>
      </ul>
        </div>
      </>
    )
};

export default Tools;