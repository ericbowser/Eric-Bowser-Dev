﻿import React from 'react';
import {HeaderLine, StyledContainer} from "../styles/styled-component-styles";

function Experience() {
    return (
      <StyledContainer>
        <HeaderLine>Visible Supply Chain --> Maersk - A.P. Moller</HeaderLine>
        <div><i>Software Engineer</i></div>
        <ul>
          <li>E-commerce application using REST and SOAP</li>
          <li>Shipping services</li>
          <li>Web API</li>
          <li>ASP.NET / .NET Standard</li>
          <li>Shipping Tools: Encode / Decode / Produce label</li>
            <ul>
              <li>Label generation</li>
              <li>Tracking</li>
              <li>Address validation</li>
              <li>Manifests</li>
              <li>Rates</li>
            </ul>
        </ul>
        <HeaderLine>Willis Towers Watson</HeaderLine>
        <div><i>Fullstack Software Engineer</i></div>
          <ul>
            <li>Internal application to build dynamic applications for carriers and participants</li>
            <li>Features for stakeholders for public facing web site</li>
            <li>RESTful clients and Micro-service architecture</li>
            <li>Maintain legacy pub / sub message bus</li>
            <li>Migrate on premise PostgreSQL database to Azure Cosmos DB ensuring data integrity</li>
          </ul>
        <HeaderLine>GoldPoint Systems: 2013-2015</HeaderLine>
        <div><i>C# backend developer and SQL data analyst</i></div>
        <ul>
          <li>Render unique SQL reports for clients</li>
          <li>Write SQL scripts as an onboarding step for new clients using WFP</li>
          <li>Manage errors and rollbacks</li>
        </ul>
        <HeaderLine>Pro Edge Tec, LLC: 2013-2015 </HeaderLine>
        <div><i>IT Technician</i></div>
        <ul>
          <li>Troubleshoot client hardware</li>
          <li>Network configuration</li>
          <li>Inventory tracking</li>
          <li>Nagios server health monitoring</li>
          <li>Help install network bridge and help with infrastructure</li>
          <li>Prepare engineering employee computers</li>
          <li>Install engineering software: SolidWorks, CNC Tooling software, etc</li>
        </ul>
      </StyledContainer>
    )
}

export default Experience;


