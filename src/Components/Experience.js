import React from 'react';
import {Alert} from "react-bootstrap";
import {AlertHeader, Desc, MarginDiv} from "../Styles/styles";

const ProEdgeInfo = () => {
    return (
        <MarginDiv>
            <Alert variant={'info'}>
                Pro Edge Tec, LLC: 2013-2015
                <Desc>IT Technician</Desc>
            </Alert>
            <ul>
                <li>Troubleshoot client hardware</li>
                <li>Network configuration</li>
                <li>Inventory tracking</li>
                <li>Nagios server health monitoring</li>
                <li>Help install network bridge and help with infrastructure</li>
                <li>Prepare engineering employee computers</li>
                <li>Install engineering software: SolidWorks, CNC Tooling software, etc</li>
            </ul>
        </MarginDiv>
    )
}

const GoldPointInfo = () => {
    return (
        <MarginDiv>
            <Alert variant={'info'}>
                GoldPoint Systems: 2013-2015
                <Desc>C# backend developer and SQL data analyst</Desc>
            </Alert>
            <ul>
                <li>Render unique SQL reports for clients</li>
                <li>Write SQL scripts as an onboarding step for new clients using WFP</li>
                <li>Manage errors and rollbacks</li>
            </ul>
        </MarginDiv>
    )
}

const TekSystemsInfo = () => {
    return (
        <MarginDiv>
            <Alert variant={'info'}>TEKSystems: 2015-2016
                <Desc>Contract To Hire for WTW</Desc>
            </Alert>
        </MarginDiv>
    )
}

const WtwInfo = () => {
    return (
        <MarginDiv>
            <AlertHeader variant='info'>Willis Towers Watson: 2016 - 06/2022
                <Desc>Fullstack Software Engineer</Desc>
            </AlertHeader>
            <ul>
                <li>Internal application to build dynamic applications for carriers and participants</li>
                <li>Featues for stakeholders for public facing web site</li>
                <li>RESTful clients and Micro-service architecture</li>
                <li>Maintain legacy pub / sub message bus</li>
                <li>Migrate on premise PostgreSQL database to Azure Cosmos DB ensuring data integrity</li>
            </ul>
        </MarginDiv>
    )
}

export {WtwInfo, GoldPointInfo, ProEdgeInfo, TekSystemsInfo};


