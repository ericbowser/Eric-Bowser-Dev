import React from 'react';
import {HeaderLine} from "../styles";

export const Tools = () => (
    <React.Fragment>
        <HeaderLine>Tools</HeaderLine>
        <ul>
            <li>NET Framework / dotnet core / .NET Standard / C#</li>
            <li>Visual Studio 2019/2022</li>
            <li>Visual Studio Code</li>
            <li>Microsoft SQL Server</li>
            <li>Github Source Control</li>
            <li>JetBrains Rider</li>
            <li>Postman / API Requests</li>
        </ul>
        <HeaderLine>
            Some JavaScript Libraries
        </HeaderLine>
        <ul>
            <li>React</li>
            <li>ECMAScript</li>
            <li>Webpack / Babel Transformation</li>
            <li>Jest Testing Framework</li>
            <li>React Testing Library</li>
        </ul>
        <HeaderLine style={{paddingTop: "15px"}}>
            Some .NET Libraries
        </HeaderLine>
        <ul>
            <li>xUnit Testing Framework</li>
            <li>Moq / NSubstitute / (mocking libraries)</li>
            <li>Jest Testing Framework</li>
            <li>React Testing Library</li>
            <li>Shouldly / Assert</li>
            <li>SumoLogic / Serilog</li>
            <li>Dapper ORM</li>
            <li>Cake Build</li>
        </ul>
        <HeaderLine style={{paddingTop: "15px"}}>
            Scripting / CLI
        </HeaderLine>
        <ul>
            <li>Git Bash</li>
            <li>Linux</li>
            <li>Powershell</li>
        </ul>
        <HeaderLine style={{paddingTop: "15px"}}>Misc</HeaderLine>
        <ul>
            <li>TypeScript</li>
            <li>Docker</li>
            <li>PostgresSql</li>
            <li>NoSql Document Database</li>
            <li>Octopus Deploy</li>
            <li>Team City Build</li>
            <li>Azure</li>
        </ul>
    </React.Fragment>
);