//#region imports
import React, {Fragment, useEffect, useState} from 'react'
import head3 from './images/head3.jpg'
import pdfIcon from './images/pdf.png'
import docx from './images/docx.png'
import ericPdf from './files/Eric-Bowser-Resume-2022.pdf'
import ericDocx from './files/Eric-Bowser-Resume-2022.docx'
import {Alert, Card, Tab, Tabs} from 'react-bootstrap'
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
  // const [showExperience, setShowExperience] = useState(false)
  // const [showDevelopment, setShowDevelopment] = useState(false)
  // const [showProjects, setShowProjects] = useState(false)
  // const [showAspirations, setShowAspirations] = useState(false)
  // const [showHobbies, setShowHobbies] = useState(false)
  // const [showEducation, setShowEducation] = useState(false)
  // const [allState, setAllState] = useState(PlusMinusDirection.None);
  const [tabbedKey, setTabbedKey] = useState('None');
  //#endregion

  //#region Collapse / Expand Toggle
  // function setAllCollapse () {
  //   setShowExperience(false)
  //   setShowDevelopment(false)
  //   setShowHobbies(false)
  //   setShowAspirations(false)
  //   setShowProjects(false)
  //   setShowEducation(false)
  // }
  //
  // function setAllExpand () {
  //   setShowExperience(true)
  //   setShowDevelopment(true)
  //   setShowHobbies(true)
  //   setShowAspirations(true)
  //   setShowProjects(true)
  //   setShowEducation(true)
  // }

  //#endregion

  //#region React Hooks
  // useEffect(() => {
  //   setAllState(PlusMinusDirection.None)
  // }, [
  //   showAspirations,
  //   showDevelopment,
  //   showExperience,
  //   showProjects,
  //   showHobbies,
  //   showEducation
  // ])

  // useEffect(() => {
  //   if (allState === PlusMinusDirection.Expand) {
  //     setAllExpand()
  //   } else if (allState === PlusMinusDirection.Collapse) {
  //     setAllCollapse()
  //   } else {
  //     setAllState(PlusMinusDirection.None)
  //   }
  // }, [allState])
  
  useEffect(() => {
    
  }, [tabbedKey])

  //#endregion

  //#region Education
  // Arrow function - executes later or when invoked
  const getEducationDetails = () => {
    return (
      <Alert key='995' variant='light'>
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
              University Of Pheonix: 2010-2011 - Associates of Art
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
      <Fragment>
        <ul className='list-group'>
          <li className='list-group-item'>Find career growth</li>
          <li className='list-group-item'>Increase passion</li>
          <li className='list-group-item'>Learn new things</li>
          <li className='list-group-item'>Networking</li>
          <li className='list-group-item'>Advance career</li>
          <li className='list-group-item'>More experience</li>
          <li className='list-group-item'>Trusting and engaging culture</li>
        </ul>
      </Fragment>
    )
  }
  //#endregion

  //#region Pro Edge
  function proEdgeInfo () {
    return (
      <Fragment>
        <AlertSubHeader color='purple'>
          Pro Edge Tec, LLC: 2013-2015
        </AlertSubHeader>
        <AlertSubHeader color='purple'>IT Technician</AlertSubHeader>
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
      </Fragment>
    )
  }
  //#endregion

  //#region GOLDPoint Info
  function goldPointInfo () {
    return (
      <Fragment>
        <AlertSubHeader color='purple'>
          GoldPoint Systems: 2013-2015
        </AlertSubHeader>
        <AlertSubHeader color='purple'>
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
      </Fragment>
    )
  }
  //#endregion

  //#region TEK Systems
  function tekSystemsInfo () {
    return (
      <Fragment>
        <AlertSubHeader color='purple'>
          2015-2016: Contract To Hire
        </AlertSubHeader>
        <AlertSubHeader>Contract to Hire</AlertSubHeader>
      </Fragment>
    )
  }
  //#endregion

  //#region WTW
  function wtwInfo () {
    return (
      <Fragment>
        <AlertSubHeader>Willis Towers Watson: 2016 - 06/2022</AlertSubHeader>
        <AlertSubHeader color='purple'>
          <span>Full Stack Software Engineer</span>
        </AlertSubHeader>
        <AlertSubHeader color='purple'>
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
        <AlertSubHeader color='purple'>
          Organization Style: Scrum
        </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>Scrum and Sprints</li>
          <li className='list-group-item'>Kanban</li>
          <li className='list-group-item'>Jira Ticket Management</li>
          <li className='list-group-item'>Quality Assurance</li>
        </ul>
      </Fragment>
    )
  }
  //#endregion

  //#region Tools and Libraries
  function toolsAndLibraries () {
    return (
      <Fragment>
        <AlertSubHeader color='purple'>Tools</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>
            NET Framework / dotnet core / .NET Standard / C#
          </li>
          <li className='list-group-item'>Visual Studio 2019/2022</li>
          <li className='list-group-item'>Visual Studio Code</li>
          <li className='list-group-item'>Microsoft SQL Server</li>
          <li className='list-group-item'>Github Source Control</li>
          <li className='list-group-item'>JetBrains Rider</li>
          <li className='list-group-item'>Postman / API Requests</li>
        </ul>
        <br />
        <AlertSubHeader color='purple'>JS Libraries / Modules</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>React</li>
          <li className='list-group-item'>Jest Testing Framework</li>
          <li className='list-group-item'>React Testing Library</li>
          <li className='list-group-item'>Webpack / Babel</li>
        </ul>
        <br />
        <AlertSubHeader color='purple'>
          .NET Libraries / Nuget packages
        </AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>xUnit Testing Framework</li>
          <li className='list-group-item'>
            Moq / NSubstitute / (mocking libraries)
          </li>
          <li className='list-group-item'>React Testing Library</li>
          <li className='list-group-item'>Shouldly / Assert</li>
          <li className='list-group-item'>SumoLogic / Serilog</li>
          <li className='list-group-item'>Dapper ORM</li>
        </ul>
        <br />
        <AlertSubHeader color='purple'>Scripting / CLI</AlertSubHeader>

        <ul className='list-group'>
          <li className='list-group-item'>Git Bash</li>
          <li className='list-group-item'>Linux</li>
          <li className='list-group-item'>Powershell</li>
          <li className='list-group-item'>Cake Build</li>
        </ul>
        <br />
        <AlertSubHeader color='purple'>Data</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>PostgreSQL</li>
          <li className='list-group-item'>Cosmos DB</li>
          <li className='list-group-item'>Sql Server</li>
        </ul>
        <br />
        <AlertSubHeader color='purple'>Misc</AlertSubHeader>
        <ul className='list-group'>
          <li className='list-group-item'>TypeScript (learning..)</li>
          <li className='list-group-item'>Docker (learning..)</li>
          <li className='list-group-item'>Octopus Deploy</li>
          <li className='list-group-item'>Team City Build</li>
          <li className='list-group-item'>Azure</li>
        </ul>
      </Fragment>
    )
  }
  //#endregion

  //#region Functions
  // function setExpandCollapse (direction) {
  //   if (!direction) return
  //   if (direction === PlusMinusDirection.Collapse) {
  //     setAllState(PlusMinusDirection.Collapse)
  //   } else if (PlusMinusDirection.Expand) {
  //     setAllState(PlusMinusDirection.Expand)
  //   } else {
  //     setAllState(PlusMinusDirection.None)
  //   }
  // }

  const addLink = (href = '', linkText = '', alt = '') => {
    return (
      <JustifyDiv key={href}>
        <a alt={alt} href={href}>
          {linkText}
        </a>
      </JustifyDiv>
    )
  }

  // function explandCollapse (state) {
  //   return state ? '-' : '+'
  // }

  // function plusMinusButtons () {
  //   return (
  //     <div>
  //       <Button
  //         key='2895'
  //         variant=''
  //         size='sm'
  //         alt='plus'
  //         onClick={() => setExpandCollapse(PlusMinusDirection.Expand)}
  //       >
  //         <span style={{ fontSize: '21pt' }}>+</span>
  //       </Button>
  //       <Button
  //         key='88997'
  //         variant=''
  //         size='sm'
  //         alt='minus'
  //         onClick={() => setExpandCollapse(PlusMinusDirection.Collapse)}
  //       >
  //         <span style={{ fontSize: '21pt' }}>-</span>
  //       </Button>
  //     </div>
  //   )
  // }
  //#endregion

  //#region Extra Curricular / Hobbies
  function getExtraCurricularHobbies () {
    return (
      <Fragment>
        <ul className='list-group'>
          <li className='list-group-item'>Rockclimbing</li>
          <li className='list-group-item'>3D Printing</li>
          <li className='list-group-item'>MTG</li>
          <li className='list-group-item'>
            Raspberri Pi Projects and Tinkering
          </li>
        </ul>
      </Fragment>
    )
  }
  //#endregion

  //#region render method

  return (
      <StyledContainer>
        <GridWrapper>
          <GridCol2Row1>
             <Tabs
              id="resume-tabs"
              activeKey={tabbedKey}
              onSelect={k => setTabbedKey(k)}
              className="mb-3"
              fill
            >
          <Tab eventKey="education" title="Education">
            {getEducationDetails()}
          </Tab>
          <Tab eventKey="experience" title="Experience">
            <Alert variant='light'>
              {wtwInfo()}
              <br />
              {tekSystemsInfo()}
              <br />
              {goldPointInfo()}
              <br />
              {proEdgeInfo()}
              <br />
            </Alert>
          </Tab>
          <Tab eventKey="toolsAndFrameworks" title="Tools and Frameworks">
            {toolsAndLibraries()}
          </Tab>
           <Tab eventKey="aspirations" title="Aspirations">
             {getAspirations()}
           </Tab>
         <Tab eventKey="hobbies" title="Hobbies">
             {getExtraCurricularHobbies()}
         </Tab>
        </Tabs>
            {/*<Container style={{paddingBottom: '50px'}}>*/}
            {/*  /!* <img src={randomColor} alt="header bg" className="container-fluid" /> *!/*/}
            {/*  <span style={{ fontSize: '10pt' }}>*/}
            {/*    {plusMinusButtons()} <strong>Expand / Collapse</strong>*/}
            {/*  </span>*/}
            {/*</Container>*/}
            {/*<Container>*/}
            
            {/*<ul>*/}
            {/*  <Button*/}
            {/*    variant='outline'*/}
            {/*    size={'lg'}*/}
            {/*    onClick={() => setShowEducation(!showEducation)}*/}
            {/*  >*/}
            {/*    <AlertSubHeader fontSize='12pt'>*/}
            {/*      {explandCollapse(showEducation)} Education*/}
            {/*    </AlertSubHeader>*/}
            {/*  </Button>*/}
            {/*  {showEducation ? (*/}
            {/*    <React.Fragment>{getEducationDetails()}</React.Fragment>*/}
            {/*  ) : null}*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*  <Button*/}
            {/*    variant='outline'*/}
            {/*    size={'lg'}*/}
            {/*    onClick={() => setShowExperience(!showExperience)}*/}
            {/*  >*/}
            {/*    <AlertHeader>*/}
            {/*      {explandCollapse(showExperience)} Experience*/}
            {/*    </AlertHeader>*/}
            {/*  </Button>*/}
            {/*  {showExperience ? (*/}
            {/*    <Alert variant='light'>*/}
            {/*      {wtwInfo()}*/}
            {/*      <br />*/}
            {/*      {tekSystemsInfo()}*/}
            {/*      <br />*/}
            {/*      {goldPointInfo()}*/}
            {/*      <br />*/}
            {/*      {proEdgeInfo()}*/}
            {/*      <br />*/}
            {/*    </Alert>*/}
            {/*  ) : null}*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*  <Button*/}
            {/*    key={123}*/}
            {/*    variant='outline'*/}
            {/*    size={'lg'}*/}
            {/*    onClick={() => setShowDevelopment(!showDevelopment)}*/}
            {/*  >*/}
            {/*    <AlertHeader>*/}
            {/*      {explandCollapse(showDevelopment)} Tools / libraries*/}
            {/*    </AlertHeader>*/}
            {/*  </Button>*/}
            {/*</ul>*/}
            {/*{showDevelopment ? (*/}
            {/*  <Alert variant='light'>{toolsAndLibraries()}</Alert>*/}
            {/*) : null}*/}
            {/*<ul>*/}
            {/*  <Button*/}
            {/*    key={687}*/}
            {/*    variant='outline'*/}
            {/*    size={'lg'}*/}
            {/*    onClick={() => setShowAspirations(!showAspirations)}*/}
            {/*  >*/}
            {/*    <AlertHeader>*/}
            {/*      {explandCollapse(showAspirations)} Aspirations*/}
            {/*    </AlertHeader>*/}
            {/*  </Button>*/}
            {/*</ul>*/}
            {/*{showAspirations ? (*/}
            {/*  <Alert variant='light'>{getAspirations()}</Alert>*/}
            {/*) : null}*/}
            {/*<ul>*/}
            {/*  <Button*/}
            {/*    key={687}*/}
            {/*    variant='outline'*/}
            {/*    size={'lg'}*/}
            {/*    onClick={() => {*/}
            {/*      setShowHobbies(!showHobbies)*/}
            {/*      setAllState(PlusMinusDirection.None)*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <AlertHeader>*/}
            {/*      {explandCollapse(showHobbies)} Extra Curricular / Hobbies*/}
            {/*    </AlertHeader>*/}
            {/*  </Button>*/}
            {/*</ul>*/}
            {/*{showHobbies ? (*/}
            {/*  <Alert variant='light'>{getExtraCurricularHobbies()}</Alert>*/}
            {/*) : null}*/}
            {/*</Container>*/}
          </GridCol2Row1>

          <GridCol1Row1>
            <Card style={{ width: '66%', height: 'auto' }}>
              <Card.Title style={{ backgroundColor: 'aliceblue' }}>
                <AlertHeader color='purple'>
                  Eric Ryan Bowser - Software Engineer
                </AlertHeader>
              </Card.Title>
              <Card.Body>
                <Card.Img variant='top' src={head3}/>
                <Card.Text>
                  <AlertHeader color='purple'>
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
                  <div>
                    <Card.Text>Eric Bowser Resume</Card.Text>

                    <a href={ericPdf} download>
                      <Card.Img
                        variant='top'
                        src={pdfIcon}
                        style={{ width: '25%', height: '25%' }}
                      />
                    </a>
                    <a href={ericDocx} download>
                      <Card.Img
                        variant='top'
                        src={docx}
                        style={{ width: '25%', height: '25%' }}
                      />
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </GridCol1Row1>
        </GridWrapper>
      </StyledContainer>
  )
}
//#endregion

export default App
