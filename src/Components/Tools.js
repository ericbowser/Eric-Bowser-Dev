import React from 'react';
import {AlertHeader, MarginDiv} from "../Styles/styles";

const Tools = () => {
    return (
        <>
          <MarginDiv>
            <AlertHeader>Microsoft Tools</AlertHeader>
          </MarginDiv>
            <ul>
                <li>Visual Studio 2019/2022</li>
                <li>Visual Studio Code</li>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Azure</li>
            </ul>
            <MarginDiv>
                <AlertHeader variant={'primary'}>Logging</AlertHeader>
            </MarginDiv>
            <ul>
                <li>SumoLogic</li>
                <li>Serilog</li>
                <li>Sentry (UI Logging)</li>
                <li>NLog</li>
            </ul>
            <MarginDiv>
                <AlertHeader variant={'primary'}>Scripting / CLI</AlertHeader>
            </MarginDiv>
            <ul>
                <li>Git Bash</li>
                <li>Linux</li>
                <li>Powershell</li>
                <li>Cake Make</li>
            </ul>
            <MarginDiv>
                <AlertHeader variant={'primary'}>Data</AlertHeader>
                <ul>
                    <li>Cosmos DB</li>
                    <li>Microsoft SQL Server</li>
                </ul>
            </MarginDiv>
        </>
    )
};

export default Tools;