import React from 'react';
import {Alert} from "react-bootstrap";

const Tools = () => {
    return (
        <>
            <Alert>Microsoft Tools</Alert>
            <ul>
                <li>Visual Studio 2019/2022</li>
                <li>Visual Studio Code</li>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Azure</li>
            </ul>
              <Alert>Logging</Alert>
            <ul>
                <li>SumoLogic</li>
                <li>Serilog</li>
                <li>Sentry (UI Logging)</li>
                <li>NLog</li>
            </ul>
            <Alert>Scripting / CLI</Alert>
            <ul>
                <li>Git Bash</li>
                <li>Linux</li>
                <li>Powershell</li>
                <li>Cake Make</li>
            </ul>
            <Alert>Data</Alert>
            <ul>
                <li>Cosmos DB</li>
                <li>Microsoft SQL Server</li>
            </ul>
        </>
    )
};

export default Tools;