import React, {useEffect, useState} from 'react'
import head from './images/head.jpg'
import pdfIcon from './images/pdf.ico'
import docxIcon from './images/docxIcon.ico'
import ericPdf from './files/Eric-Bowser-Resume.pdf'
import ericDocx from './files/Eric-Bowser-Resume.docx'
import {Alert, Card, Navbar, NavItem, Tab, Tabs} from 'react-bootstrap'
import {
    AlertHeader,
    AlertSubHeader,
    GridCol1Row1,
    GridCol2Row1,
    GridWrapper,
    JustifyDiv,
    StyledContainer
} from './styles'

function App() {
    const [tabbedKey, setTabbedKey] = useState('None')

    useEffect(() => {
    }, [tabbedKey])

    const getEducationDetails = () => {
        return (
            <Alert variant={'success'}>
                <AlertSubHeader fontSize='10pt'>
                    <ul>
                        <li >
                            Weber State University: 2011-2013 - BA Computer Science
                        </li>
                    </ul>
                </AlertSubHeader>
                <AlertSubHeader fontSize='10pt'>
                    <ul >
                        <li >
                            University Of Phoenix: 2010-2011 - Associates of Art
                        </li>
                    </ul>
                </AlertSubHeader>
            </Alert>
        )
    }

    function getAspirations() {
        return (
            <Alert variant={'success'}>
                <ul>
                    <AlertSubHeader color={''}>
                        <ul>
                            <AlertSubHeader>
                                <li>
                                    Full stack engineer looking for a new opportunity to take software engineering
                                    practice to the next level by working at a great company that values their
                                    employees, in all aspects, to become a refined engineer by enabling trust and
                                    empowering hard work with collaboration in a psychologically safe environment.
                                </li>
                            </AlertSubHeader>
                            <AlertSubHeader>
                                <li>
                                    Foster many facets of development to further refine character by creating positive
                                    relationships to evolve career to the next level in an environment where innovation
                                    and
                                    creativity are embraced

                                </li>
                            </AlertSubHeader>
                        </ul>
                    </AlertSubHeader>

                </ul>
            </Alert>
        )
    }

    function proEdgeInfo() {
        return (
            <Alert variant='success'>
                <AlertSubHeader>Pro Edge Tec, LLC: 2013-2015</AlertSubHeader>
                <AlertSubHeader>IT Technician</AlertSubHeader>
                <ul >
                    <li>Troublshoot client hardware</li>
                    <li>Network configuration</li>
                    <li>Inventory tracking</li>
                    <li>Nagios server health monitoring</li>
                    <li>
                        Help install network bridge and help with infrastructure
                    </li>
                    <li>
                        Networking and some IEEE exposure / Network security practices
                    </li>
                    <li>
                        Prepare engineering employees computers
                    </li>
                    <li>
                        Install engineering software: SolidWorks, CNC Tooling software, etc
                    </li>
                </ul>
            </Alert>
        )
    }

    function goldPointInfo() {
        return (
            <Alert variant={'success'}>
                <AlertHeader color={'darkBlue'}>GoldPoint Systems: 2013-2015</AlertHeader>
                <AlertSubHeader color={'darkBlue'}>
                    C# backend developer and SQL data analyst for GOLDPOINT Systems as a Junior Software Develeper /
                    Programmer
                </AlertSubHeader>
                <ul>
                    <li >Render unique SQL analysis reports for clients </li>
                    <li >
                        Write SQL scripts as an onboarding step for new clients and worked on WFP applications for data analysis
                    </li>
                    <li >Write back-end C# unit tests using MSTest and Assertion library</li>
                </ul>
            </Alert>
        )
    }

    function tekSystemsInfo() {
        return (
            <Alert variant='success'>
                <AlertSubHeader color={'darkBlue'}>
                    2015-2016: Contract To Hire
                </AlertSubHeader>
                <AlertSubHeader>Contract to Hire</AlertSubHeader>
            </Alert>
        )
    }

    function wtwInfo() {
        return (
            <Alert variant='success'>
                <AlertHeader>Willis Towers Watson: 2016 - 06/2022</AlertHeader>
                <AlertSubHeader color={'darkBlue'}>
                    <span>Full Stack Software Engineer</span>
                </AlertSubHeader>
                <AlertSubHeader color={'green'}>
                    <span>Private Healthcare Exchange</span>
                </AlertSubHeader>
                <ul>
                    <li>
                        Worked on internal application to build dynamic applications for carriers and participants. Used
                        in pre-season
                        to build out applications for based on CMS rules and guidelines. This is quite complicated, so
                        there is a
                        lot that goes into this internal SPA (React.js) application
                    </li>
                    <li>Worked on bootstrapping, testing, and deploying new micro-services
                        to communicate with
                        both front-end and back-end services
                    </li>
                    <li >Build out RESTful clients using HTTP/S messaging and tokens to
                        ensure messages are sent
                        securely
                    </li>
                    <li >Maintain legacy publish and subscribe MVC-style framework and
                        messeging bus
                    </li>
                    <li >Migrated on premise PostgreSQL database to Azure Cosmos DB ensuring
                        data integrity and no loss
                        of data
                    </li>
                </ul>
                <br/>
                <AlertSubHeader color={'green'}>Methodoligy and Process</AlertSubHeader>
                <ul>
                    <li>Scrum and two-week iterations or sprints</li>
                    <li>Kanban style approach</li>
                    <li>Jira Ticket Management</li>
                    <li >Team</li>
                    <li >Quality Assurance</li>
                </ul>
            </Alert>
        )
    }

    function toolsAndLibraries() {
        return (
            <Alert variant='success'>
                <AlertSubHeader>Microsoft Tools</AlertSubHeader>
                <ul >
                    <li >
                        Microsoft NET Framework / dotnet core / .NET Standard
                    </li>
                    <li >Visual Studio 2019/2022</li>
                    <li >Visual Studio Code</li>
                    <li >Microsoft SQL Server</li>
                    <li >Microsoft Azure</li>
                </ul>
                <br/>

                <AlertSubHeader>JavaScript and Libraries</AlertSubHeader>
                <ul >
                    <li >React</li>
                    <li >React Query</li>
                    <li >React Testing Library</li>
                </ul>
                <br/>

                <AlertSubHeader>Logging</AlertSubHeader>
                <ul >
                    <li >SumoLogic</li>
                    <li >Serilog</li>
                    <li >Sentry (UI Logging)</li>
                    <li >nLog</li>
                </ul>
                <br/>

                <AlertSubHeader>Testing</AlertSubHeader>
                <ul >
                    <li >xUnit Testing Framework</li>
                    <li >
                        Moq / NSubstitute / (mocking libraries)
                    </li>
                    <li >React Testing Library</li>
                    <li >Shouldly / Assert</li>
                    <li >Cypress</li>
                    <li >K6</li>
                </ul>
                <br/>

                <AlertSubHeader>Scripting / CLI</AlertSubHeader>
                <ul>
                    <li >Git Bash</li>
                    <li >Linux</li>
                    <li >Powershell</li>
                    <li >Cake Make</li>
                </ul>
                <br/>

                <AlertSubHeader>Data</AlertSubHeader>
                <ul >
                    <li >PostgreSQL (on-prem)</li>
                    <li >Sql Server</li>
                    <li >Dapper</li>
                    <li >React Query</li>
                    <li >Entity Framework</li>
                    <br/>

                    <AlertSubHeader>Cloud</AlertSubHeader>
                    <li >Cosmos DB</li>
                </ul>
                <br/>

                <AlertSubHeader>Misc</AlertSubHeader>
                <ul >
                    <li >TypeScript (newbie)</li>
                    <li >Docker (newbie)</li>
                    <li >Octopus Deploy</li>
                    <li >Team City Build</li>
                    <li >Azure Cosmos DB</li>
                    <li >Jira</li>
                </ul>
                <br/>
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
        ) : (<><a alt={alt} href={href}> {linkText} </a></>)
    }

    return (
        <React.Fragment>
            <StyledContainer>
                <Navbar variant={'light'}>
                    <img src={head} alt='headshot' style={{width: '10%', height: '10%', borderRadius: '25%'}}/>
                        Eric R Bowser

                    <NavItem>
                    </NavItem>
                </Navbar>
                <GridWrapper>
                    {/*<GridCol2Row1>*/}
                        <Tabs
                            variant={'mb-3'}
                            id='resume-tabs'
                            activeKey={tabbedKey}
                            onSelect={k => setTabbedKey(k)}
                            style={{paddingBottom: '10px'}}
                        >
                            <Tab eventKey='education' title='Education'>
                                {getEducationDetails()}
                            </Tab>
                            <Tab eventKey='experience' title='Experience'>
                                {wtwInfo()}
                                <br/>
                                {tekSystemsInfo()}
                                <br/>
                                {goldPointInfo()}
                                <br/>
                                {proEdgeInfo()}
                                <br/>
                            </Tab>
                            <Tab eventKey='toolsAndFrameworks' title='Tools and Frameworks'>
                                {toolsAndLibraries()}
                            </Tab>
                            <Tab eventKey='aspirations' title='Aspirations'>
                                {getAspirations()}
                            </Tab>
                        </Tabs>
                    {/*</GridCol2Row1>*/}
                    {/*<GridCol1Row1>*/}
                        {/*<Card>*/}
                        {/*    <AlertHeader>*/}
                        {/*        <AlertSubHeader color={"purple"}>*/}
                        {/*            <div>Contact Information:</div>*/}
                        {/*            <div>Mobile: 435-494-8030</div>*/}
                        
                        {/*        </AlertSubHeader>*/}
                        {/*        <Card.Img*/}
                        {/*            variant='bottom'*/}
                        {/*            src={head}*/}
                        {/*            style={{width: '100%'}}*/}
                        {/*        />*/}
                        {/*        <AlertSubHeader>*/}
                        {/*            {addLink(*/}
                        {/*                'https://github.com/ericbowser',*/}
                        {/*                'Github',*/}
                        {/*                'Github for Eric Bowser',*/}
                        {/*                true*/}
                        {/*            )}*/}
                        {/*            <a href={ericPdf} download>*/}
                        {/*                <Card.Img*/}
                        {/*                    variant='top'*/}
                        {/*                    src={pdfIcon}*/}
                        {/*                    style={{width: '13%', borderRadius: '15px'}}*/}
                        {/*                />*/}
                        {/*            </a>*/}
                        {/*            <a href={ericDocx} download>*/}
                        {/*                <Card.Img*/}
                        {/*                    variant='top'*/}
                        {/*                    src={docxIcon}*/}
                        {/*                    style={{width: '10%', height: '10%'}}*/}
                        {/*                />*/}
                        {/*            </a>*/}
                        {/*        </AlertSubHeader>*/}
                        {/*    </AlertHeader>*/}
                        {/*</Card>*/}
                    {/*</GridCol1Row1>*/}
                </GridWrapper>
            </StyledContainer>
        </React.Fragment>
    )
}

//#endregion

export default App
