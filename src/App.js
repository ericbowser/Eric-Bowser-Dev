import React, { useEffect, useState } from 'react'
import head3 from './images/head3.jpg'
import pdfIcon from './images/pdf.png'
import docxIcon from './images/docxIcon.png'
import ericPdf from './files/Eric-Bowser-Resume.pdf'
import ericDocx from './files/Eric-Bowser-Resume-2022.docx'
import { Alert, Card, Tab, Tabs } from 'react-bootstrap'
import {
  AlertHeader,
  AlertSubHeader,
  GridCol1Row1,
  GridCol2Row1,
  GridWrapper,
  JustifyDiv,
  StyledContainer
} from './styles'

function App () {
  const [tabbedKey, setTabbedKey] = useState('None')
  useEffect(() => {}, [tabbedKey])
  useEffect(() => {}, [tabbedKey])
    
  const getEducationDetails = () => {
    return (
      <Alert variant='Light'>
        <AlertSubHeader fontSize='10pt'>
          <ul className='list-group'>
            <li className='list-group-item'>
              Weber State University: 2011-2013 - BA Computer Science
            </li>
          </ul>
        </AlertSubHeader>
        <AlertSubHeader fontSize='10pt'>
          <ul className='list-group'>
            <li className='list-group-item'>
              University Of Phoenix: 2010-2011 - Associates of Art
            </li>
          </ul>
        </AlertSubHeader>
      </Alert>
    )
  }

  function getAspirations () {
    return (
      <Alert variant='dark' style={{border: '2px solid green'}}>
        <ul className='list-group'>
          <li className='list-group-item'>Find company or sole proprietor that works well with my 
          life balance as a typical 8am - 5pm MDT/MST in office schedule (now remote with built office)
              <ul>
                  <li>Good communication initiation and expectations setting</li>
              </ul>
          </li>
        </ul>
      </Alert>
    )
  }

  function proEdgeInfo () {
    return (
      <Alert variant='Light'>
        <AlertSubHeader>Pro Edge Tec, LLC: 2013-2015</AlertSubHeader>
        <AlertSubHeader>IT Technician</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Troublshoot client hardware</li>
          <li className='list-group-item'>Network configuration</li>
          <li className='list-group-item'>Inventory tracking</li>
          <li className='list-group-item'>Nagios server health monitoring</li>
          <li className='list-group-item'>
            Help install network bridge and help with infrastructure
          </li>
          <li className='list-group-item'>
            Networking and some IEEE exposure / Network security practices
          </li>
          <li className='list-group-item'>
            Prepare engineering employees computers for <strong>Kihomac</strong>
          </li>
          <li className='list-group-item'>
            Install engineering software: SolidWorks, CNC Tooling software, etc
          </li>
        </ul>
      </Alert>
    )
  }

  function goldPointInfo () {
    return (
      <Alert variant='Light'>
        <AlertHeader>GoldPoint Systems: 2013-2015</AlertHeader>
        <AlertSubHeader color={'salmon'}>
          C# backend developer and SQL data analyst for GOLDPOINT Systems as a Junior Software Develeper / Programmer
        </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Render unique reports for clients using existing data structure using recursion to traverse a binary tree with leafs and xml using
              C# GAC `System.Xml` to read and write nodes to stistical analysis documents tailored to client institutions </li>
          <li className='list-group-item'>
            Write SQL scripts as an onboarding step for new clients and worked on WFP applications with extra features to queue scripts that would run in order and errors handled
              and rolled back without having to re-run saving time on deployments </li>
          <li className='list-group-item'>Write back-end C# unit tests using MSTest and Assertion library</li>
            <ul>Open Source Mocking library -- {addLink('https://github.com/moq/moq4', 'moq')}</ul>
        </ul>
      </Alert>
    )
  }

  function tekSystemsInfo () {
    return (
      <Alert variant='Light'>
        <AlertSubHeader>2015-2016: Contract To Hire</AlertSubHeader>
        <AlertSubHeader>Contract to Hire</AlertSubHeader>
      </Alert>
    )
  }

  function wtwInfo () {
    return (
      <Alert variant='Light'>
        <AlertHeader>Willis Towers Watson: 2016 - 06/2022</AlertHeader>
        <AlertSubHeader color={'green'}>
          <span>Full Stack Software Engineer</span>
        </AlertSubHeader>
          <AlertSubHeader color={'green'}>
        <span>Private Healthcare Exchange</span>
          </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>
            Worked on internal application to build dynamic applications for carriers and participants. Used in pre-season
              to build out applications for  based on CMS rules and guidelines. This is quite complicated, so there is a 
              lot that goes into this internal SPA (React.js) application
          </li>
          <li className='list-group-item'>Worked on bootstrapping, testing, and deploying new micro-services to communicate with
            both front-end and back-end services</li>
          <li className='list-group-item'>Build out RESTful clients using HTTP/S messaging and tokens to ensure messages are sent
            securely</li>
          <li className='list-group-item'>Maintain legacy publish and subscribe MVC-style framework and messeging bus</li>
          <li className='list-group-item'>Migrated on premise PostgreSQL database to Azure Cosmos DB ensuring data integrity and no loss
            of data</li>
        </ul>
        <br />
        <AlertSubHeader>Methodoligy and Process</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Scrum and two-week iterations or sprints</li>
          <li className='list-group-item'>Kanban style approach</li>
          <li className='list-group-item'>Jira Ticket Management</li>
            <li className='list-group-item'>Team</li>
          <li className='list-group-item'>Quality Assurance</li>
        </ul>
      </Alert>
    )
  }

  function toolsAndLibraries () {
    return (
      <Alert variant='Light'>
        <AlertSubHeader>Microsoft Tools</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>
            Microsoft NET Framework / dotnet core / .NET Standard
          </li>
          <li className='list-group-item'>Visual Studio 2019/2022</li>
          <li className='list-group-item'>Visual Studio Code</li>
          <li className='list-group-item'>Microsoft SQL Server</li>
            <li className='list-group-item'>Microsoft Azure </li>
        </ul>
        <br />

        <AlertSubHeader>JavaScript and Libraries</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>React</li>
          <li className='list-group-item'>React Query</li>
          <li className='list-group-item'>React Testing Library</li>
        </ul>
        <br />

        <AlertSubHeader>Logging</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>SumoLogic</li>
          <li className='list-group-item'>Serilog</li>
          <li className='list-group-item'>Sentry (UI Logging)</li>
          <li className='list-group-item'>nLog</li>
        </ul>
        <br />

        <AlertSubHeader>Testing</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>xUnit Testing Framework</li>
          <li className='list-group-item'>
            Moq / NSubstitute / (mocking libraries)
          </li>
          <li className='list-group-item'>React Testing Library</li>
          <li className='list-group-item'>Shouldly / Assert</li>
          <li className='list-group-item'>Cypress</li>
          <li className='list-group-item'>K6</li>
        </ul>
        <br />

        <AlertSubHeader>Scripting / CLI</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Git Bash</li>
          <li className='list-group-item'>Linux</li>
          <li className='list-group-item'>Powershell</li>
          <li className='list-group-item'>Cake Make</li>
        </ul>
        <br />

        <AlertSubHeader>Data</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>PostgreSQL (on-prem)</li>
          <li className='list-group-item'>Sql Server</li>
          <li className='list-group-item'>Dapper</li>
          <li className='list-group-item'>React Query</li>
          <li className='list-group-item'>Entity Framework</li>
          <br />

          <AlertSubHeader>Cloud</AlertSubHeader>
          <li className='list-group-item'>Cosmos DB</li>
        </ul>
        <br />

        <AlertSubHeader>Misc</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>TypeScript (newbie)</li>
          <li className='list-group-item'>Docker (newbie)</li>
          <li className='list-group-item'>Octopus Deploy</li>
          <li className='list-group-item'>Team City Build</li>
          <li className='list-group-item'>Azure Cosmos DB</li>
          <li className='list-group-item'>Jira</li>
        </ul>
        <br />
      </Alert>
    )
  }

  const addLink = (href = '', linkText = '', alt = '', newLine = false) => {
      return newLine ? (
          <JustifyDiv key={href}>
              <a alt={alt} href={href}>
                  {linkText}
              </a>
          </JustifyDiv>
          ) : (   <><a alt={alt} href={href}> {linkText} </a></> )
  }

  return (
    <React.Fragment>
      <StyledContainer>
        <GridWrapper>
          <GridCol2Row1>
            <Tabs
              id='resume-tabs'
              activeKey={tabbedKey}
              onSelect={k => setTabbedKey(k)}
              style={{ paddingBottom: '10px' }}
            >
              <Tab eventKey='education' title='Education'>
                {getEducationDetails()}
              </Tab>
              <Tab eventKey='experience' title='Experience'>
                {wtwInfo()}
                <br />
                {tekSystemsInfo()}
                <br />
                {goldPointInfo()}
                <br />
                {proEdgeInfo()}
                <br />
              </Tab>
              <Tab eventKey='toolsAndFrameworks' title='Tools and Frameworks'>
                {toolsAndLibraries()}
              </Tab>
              <Tab eventKey='aspirations' title='Aspirations'>
                {getAspirations()}
              </Tab>
            </Tabs>
          </GridCol2Row1>
          <GridCol1Row1>
            <Card>
              <Card.Title>
                <Alert variant='dark'>
                  Eric Ryan Bowser - Software Engineer
                </Alert>
              </Card.Title>
              <Card.Body>
                <Card.Img
                  variant='bottom'
                  src={head3}
                  style={{ width: '50%' }}
                />
                <AlertHeader>
                  <div>Contact Information:</div>
                  <div>Mobile: 435-494-8030</div>
                </AlertHeader>
                <div>
                  {addLink(
                    'mailto:ericryanbowser@gmail.com',
                    'ericryanbowser@gmail.com',
                    'Email address',
                    true
                  )}
                </div>
                <div>
                  {addLink(
                    'https://github.com/ericbowser',
                    'Github',
                    'Github for Eric Bowser',
                    true
                  )}
                </div>
                <span>
                  <Card.Text>Eric Bowser Resume</Card.Text>
                  <a href={ericPdf} download>
                    <Card.Img
                      variant='top'
                      src={pdfIcon}
                      style={{ width: '10%', height: '10%' }}
                    />
                  </a>
                  <a href={ericDocx} download>
                    <Card.Img
                      variant='top'
                      src={docxIcon}
                      style={{ width: '10%', height: '10%' }}
                    />
                  </a>
                </span>
              </Card.Body>
            </Card>
          </GridCol1Row1>
        </GridWrapper>
      </StyledContainer>
    </React.Fragment>
  )
}
//#endregion

export default App
