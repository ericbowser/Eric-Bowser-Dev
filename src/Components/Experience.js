import React from 'react';
import Container from "react-bootstrap/Container";
import {HeaderLine} from '../styles/styles';
function Experience() {
    return (
      <Container>
        <HeaderLine>Willis Towers Watson</HeaderLine>
        <i>Fullstack Software Engineer</i>
          <ul>
            <li>Internal application to build dynamic applications for carriers and participants</li>
            <li>Features for stakeholders for public facing web site</li>
            <li>RESTful clients and Micro-service architecture</li>
            <li>Maintain legacy pub / sub message bus</li>
            <li>Migrate on premise PostgreSQL database to Azure Cosmos DB ensuring data integrity</li>
          </ul>
        <HeaderLine>GoldPoint Systems: 2013-2015</HeaderLine>
        <i>C# backend developer and SQL data analyst</i>
        <ul>
          <li>Render unique SQL reports for clients</li>
          <li>Write SQL scripts as an onboarding step for new clients using WFP</li>
          <li>Manage errors and rollbacks</li>
        </ul>
        <HeaderLine>Pro Edge Tec, LLC: 2013-2015 </HeaderLine>
        <i>IT Technician</i>
        <ul>
          <li>Troubleshoot client hardware</li>
          <li>Network configuration</li>
          <li>Inventory tracking</li>
          <li>Nagios server health monitoring</li>
          <li>Help install network bridge and help with infrastructure</li>
          <li>Prepare engineering employee computers</li>
          <li>Install engineering software: SolidWorks, CNC Tooling software, etc</li>
        </ul>
      </Container>
    )
}

export default Experience;


