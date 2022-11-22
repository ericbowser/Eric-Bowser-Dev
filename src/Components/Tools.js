import React from 'react';
import {Alert} from 'react-bootstrap';
import {MarginDiv} from "../Styles/styles";

const Tools = () => {
    return (
        <MarginDiv>
            <Alert variant={'info'}>Microsoft Tools</Alert>
            <ul>
                <li>Visual Studio 2019/2022</li>
                <li>Visual Studio Code</li>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Azure</li>
            </ul>
            <MarginDiv>
                <Alert variant={'info'}>Logging</Alert>
            </MarginDiv>
            <ul>
                <li>SumoLogic</li>
                <li>Serilog</li>
                <li>Sentry (UI Logging)</li>
                <li>NLog</li>
            </ul>
            <MarginDiv>
                <Alert variant={'info'}>Scripting / CLI</Alert>
            </MarginDiv>
            <ul>
                <li>Git Bash</li>
                <li>Linux</li>
                <li>Powershell</li>
                <li>Cake Make</li>
            </ul>
            <MarginDiv>
                <Alert variant={'info'}>Data</Alert>
                <ul>
                    <li>Cosmos DB</li>
                    <li>Microsoft SQL Server</li>
                </ul>
            </MarginDiv>
        </MarginDiv>
    )
};

export default Tools;