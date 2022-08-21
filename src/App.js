//#region imports
import React, { useEffect, useState } from 'react'
import head3 from './images/head3.jpg'
import pdfIcon from './images/pdf.png'
import docxIcon from './images/docxIcon.png'
import ericPdf from './files/Eric-Bowser-Resume.pdf'
import ericDocx from './files/Eric-Bowser-Resume.docx'
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

//#endregion

function App () {
  //#region local state react hook
  const [tabbedKey, setTabbedKey] = useState('None')
  //#endregion

  //#region Side Effects
  useEffect(() => {}, [tabbedKey])
  //#endregion

  //#region Side Effects
  useEffect(() => {}, [tabbedKey])

  //#endregion

  //#region Education
  // Arrow function - executes later or when invoked
  const getEducationDetails = () => {
    return (
      <Alert variant='primary'>
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
  //#endregion

  //#region Aspirations
  function getAspirations () {
    return (
      <Alert variant='primary'>
        <ul className='list-group'>
          <li className='list-group-item'>Find career growth</li>
          <li className='list-group-item'>Increase passion</li>
          <li className='list-group-item'>Learn new things</li>
          <li className='list-group-item'>Networking</li>
          <li className='list-group-item'>Advance career</li>
          <li className='list-group-item'>More experience</li>
          <li className='list-group-item'>Trusting and engaging culture</li>
        </ul>
      </Alert>
    )
  }
  //#endregion

  //#region Pro Edge
  function proEdgeInfo () {
    return (
      <Alert variant='primary'>
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
  //#endregion

  //#region GOLDPoint Info
  function goldPointInfo () {
    return (
      <Alert variant='primary'>
        <AlertSubHeader>GoldPoint Systems: 2013-2015</AlertSubHeader>
        <AlertSubHeader>
          C# backend developer and SQL data analyst
        </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>SQL Server & SSRS Reporting</li>
          <li className='list-group-item'>Render unique reports for clients</li>
          <li className='list-group-item'>
            SQL Scripting and Automation for Deployments
          </li>
          <li className='list-group-item'>Microsoft Extensibility Framework</li>
          <li className='list-group-item'>MSTest</li>
        </ul>
      </Alert>
    )
  }
  //#endregion

  //#region TEK Systems
  function tekSystemsInfo () {
    return (
      <Alert variant='primary'>
        <AlertSubHeader>2015-2016: Contract To Hire</AlertSubHeader>
        <AlertSubHeader>Contract to Hire</AlertSubHeader>
      </Alert>
    )
  }
  //#endregion

  //#region WTW
  function wtwInfo () {
    return (
      <Alert variant='primary'>
        <AlertSubHeader>Willis Towers Watson: 2016 - 06/2022</AlertSubHeader>
        <AlertSubHeader>
          <span>Full Stack Software Engineer</span>
        </AlertSubHeader>
        <AlertSubHeader>
          <div>React.js Front-End </div>
          <div>C# / .NET back-end</div>
        </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Bounded Contexts</li>
          <li className='list-group-item'>
            Dynamic applications / configurations
          </li>
          <li className='list-group-item'>Microservices and Microfrontend</li>
          <li className='list-group-item'>REST API</li>
          <li className='list-group-item'>Pub / Sub</li>
          <li className='list-group-item'>NoSql on Azure platform</li>
        </ul>
        <br />
        <AlertSubHeader>Organization Style: Scrum</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Scrum and Sprints</li>
          <li className='list-group-item'>Kanban</li>
          <li className='list-group-item'>Jira Ticket Management</li>
          <li className='list-group-item'>Quality Assurance</li>
        </ul>
      </Alert>
    )
  }
  //#endregion

  //#region Tools and Libraries
  function toolsAndLibraries () {
    return (
      <Alert variant='primary'>
        <AlertSubHeader>Microsoft Tools</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>
            Microsoft NET Framework / dotnet core / .NET Standard
          </li>
          <li className='list-group-item'>Visual Studio 2019/2022</li>
          <li className='list-group-item'>Visual Studio Code</li>
          <li className='list-group-item'>Microsoft SQL Server</li>
        </ul>
        <br />

        <AlertSubHeader>JS and Related</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>React</li>
          <li className='list-group-item'>React Query</li>
          <li className='list-group-item'>Jest Testing Framework</li>
          <li className='list-group-item'>React Testing Library</li>
          <li className='list-group-item'>Webpack</li>
          <li className='list-group-item'>Babel</li>
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
  //#endregion

  //#region Helper Functions
  const addLink = (href = '', linkText = '', alt = '') => {
    return (
      <JustifyDiv key={href}>
        <a alt={alt} href={href}>
          {linkText}
        </a>
      </JustifyDiv>
    )
  }
  //#endregion

  //#region Extra Curricular / Hobbies
  function getExtraCurricularHobbies () {
    return (
      <Alert variant='primary'>
        <ul className='list-group'>
          <li className='list-group-item'>Rockclimbing</li>
          <li className='list-group-item'>3D Printing</li>
          <li className='list-group-item'>MTG (Magic The Gathering)</li>
          <li className='list-group-item'>
            Raspberri Pi Projects and Tinkering
          </li>
        </ul>
      </Alert>
    )
  }
  //#endregion

  // #region render method
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
              <Tab eventKey='hobbies' title='Hobbies'>
                {getExtraCurricularHobbies()}
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
