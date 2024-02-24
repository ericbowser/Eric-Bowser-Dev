import React from "react";
import {useState, useEffect} from "react";
import head3 from "./images/head3.jpg";
import docx from "./images/docx.png";
import ericDocx from "./files/Eric-Bowser-Resume.docx";
import {Button, Alert, Card} from "react-bootstrap";
import {
    GridCol1Row1,
    GridCol2Row1,
    GridCol3Row1,
    JustifyDiv,
    GridWrapper,
    TextWrapper,
    AlertSubHeader,
    StyledContainer,
} from "./styles";
import {PlusMinusDirection} from "./common";
import './styles.css';

function App() {
    const [showExperience, setShowExperience] = useState(false);
    const [showDevelopment, setShowDevelopment] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showAspirations, setShowAspirations] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [allState, setAllState] = useState(PlusMinusDirection.None);

    function setAllCollapse() {
        setShowExperience(false);
        setShowDevelopment(false);
        setShowHobbies(false);
        setShowAspirations(false);
        setShowProjects(false);
        setShowEducation(false);
        window.scrollTo(0, window.screen.height);
    }

    function setAllExpand() {
        setShowExperience(true);
        setShowDevelopment(true);
        setShowHobbies(true);
        setShowAspirations(true);
        setShowProjects(true);
        setShowEducation(true);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        setAllState(PlusMinusDirection.None);
    }, [
        showAspirations,
        showDevelopment,
        showExperience,
        showProjects,
        showHobbies,
        showEducation
    ]);

    useEffect(() => {
        if (allState === PlusMinusDirection.Expand) {
            setAllExpand();
        } else if (allState === PlusMinusDirection.Collapse) {
            setAllCollapse();
        } else {
            setAllState(PlusMinusDirection.None);
        }
    }, [allState]);

    const getEducationDetails = () => {
        return (
            <React.Fragment>
                <Alert key="995" variant="light">
                    <AlertSubHeader>
                        Weber State University: 2011-2013 - BA Computer Science
                    </AlertSubHeader>
                    <AlertSubHeader>
                        University Of Phoenix: 2010-2011 - Associates of Art
                    </AlertSubHeader>
                </Alert>
            </React.Fragment>
        );
    };

    function getAspirations() {
        return (
            <Alert key="98" variant="light">
                <ul>
                    <li>Find career growth</li>
                    <li>Increase passion</li>
                    <li>Learn new things</li>
                    <li>Networking</li>
                    <li>Advance career</li>
                    <li>More experience</li>
                    <li>Trusting and engaging culture</li>
                </ul>
            </Alert>
        );
    }

    function proEdgeInfo() {
        return (
            <Alert key="421" variant="light">
                <Alert.Heading>Pro Edge Tec, LLC: 2013-2015</Alert.Heading>
                <AlertSubHeader>IT Technician</AlertSubHeader>
                <ul>
                    <li>Troubleshoot client hardware</li>
                    <li>Network configuration</li>
                    <li>Inventory tracking</li>
                    <li>Nagios server health monitoring</li>
                    <li>Help install network bridge and help with infrastructure</li>
                    <li>
                        Networking and some IEEE exposure / Network security practices
                    </li>
                    <li>
                        Prepare engineering employees computers for <strong>Kihomac</strong>
                    </li>
                    <li>
                        Install engineering software: SolidWorks, CNC Tooling software, etc
                    </li>
                </ul>
            </Alert>
        );
    }

    function goldPointInfo() {
        return (
            <Alert key="418" variant="light">
                <Alert.Heading>GoldPoint Systems: 2013-2015</Alert.Heading>
                <AlertSubHeader>
                    C# backend developer and SQL data analyst
                </AlertSubHeader>
                <ul>
                    <li>SQL Server & SSRS Reporting</li>
                    <li>Render unique reports for clients</li>
                    <li>SQL Scripting and Automation for Deployments</li>
                    <li>Microsoft Extensibility Framework</li>
                    <li>MSTest</li>
                </ul>
            </Alert>
        );
    }

    function tekSystemsInfo() {
        return (
            <Alert key="411" variant="light">
                <Alert.Heading>2015-2016: Contract To Hire</Alert.Heading>
                <AlertSubHeader>Contract to Hire</AlertSubHeader>
            </Alert>
        );
    }

    function wtwInfo() {
        return (
            <Alert key="22" variant="light">
                <Alert.Heading>Willis Towers Watson: 2016 - Present</Alert.Heading>
                <AlertSubHeader>
                    <div>Full Stack Software Engineer</div>
                    <div>React JS Front-End and C# / .NET back-end</div>
                </AlertSubHeader>
                <ul>
                    <li>Bounded Contexts</li>
                    <li>Dynamic applications / configurations</li>
                    <li>Microservices and Micro-frontend</li>
                    <li>REST API</li>
                    <li>Pub / Sub</li>
                    <li>NoSql on Azure platform</li>
                    <ul>
                        <li>Healthcare standards and HIPAA</li>
                        <li>Carrier file transformations and delivery</li>
                    </ul>
                </ul>
                <br/>
                <AlertSubHeader>Organization Style: Scrum</AlertSubHeader>
                <ul>
                    <li>Scrum and Sprints</li>
                    <li>Kanban</li>
                    <li>Jira Ticket Management</li>
                    <li>Quality Assurance</li>
                </ul>
            </Alert>
        );
    }

    function toolsAndLibraries() {
        return (
            <React.Fragment>
                <Alert key="8" variant="light">
                    <Alert.Heading>Tools</Alert.Heading>
                    <ul>
                        <li>NET Framework / dotnet core / .NET Standard / C#</li>
                        <li>Visual Studio 2019/2022</li>
                        <li>Visual Studio Code</li>
                        <li>Microsoft SQL Server</li>
                        <li>Github Source Control</li>
                        <li>JetBrains Rider</li>
                        <li>Postman / API Requests</li>
                    </ul>
                    <Alert.Heading style={{paddingTop: "15px"}}>
                        Some JavaScript Libraries
                    </Alert.Heading>
                    <ul>
                        <li>React</li>
                        <li>ECMAScript</li>
                        <li>Webpack / Babel Transformation</li>
                        <li>Jest Testing Framework</li>
                        <li>React Testing Library</li>
                    </ul>
                    <Alert.Heading style={{paddingTop: "15px"}}>
                        Some .NET Libraries
                    </Alert.Heading>
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
                    <Alert.Heading style={{paddingTop: "15px"}}>
                        Scripting / CLI
                    </Alert.Heading>
                    <ul>
                        <li>Git Bash</li>
                        <li>Linux</li>
                        <li>Powershell</li>
                    </ul>
                    <Alert.Heading style={{paddingTop: "15px"}}>Misc</Alert.Heading>
                    <ul>
                        <li>TypeScript</li>
                        <li>Docker</li>
                        <li>PostgresSql</li>
                        <li>NoSql Document Database</li>
                        <li>Octopus Deploy</li>
                        <li>Team City Build</li>
                        <li>Azure</li>
                    </ul>
                </Alert>
            </React.Fragment>
        );
    }

    function setExpandCollapse(direction) {
        if (!direction) return;
        if (direction === PlusMinusDirection.Collapse) {
            setAllState(PlusMinusDirection.Collapse);
        } else if (PlusMinusDirection.Expand) {
            setAllState(PlusMinusDirection.Expand);
        } else {
            setAllState(PlusMinusDirection.None);
        }
    }

    const addLink = (href = "", linkText = "", alt = "") => {
        return (
            <JustifyDiv key={href}>
                <a alt={alt} href={href}>
                    {linkText}
                </a>
            </JustifyDiv>
        );
    };

    function explandCollapse(state) {
        const sign = state ? "-" : "+";
        return sign;
    }

    function plusMinusButtons() {
        return (
            <div>
                <Button
                    key="2895"
                    variant="outlineButton"
                    size="lg"
                    alt="plus"
                    style={{paddingTop: "20px"}}
                    onClick={() => setExpandCollapse(PlusMinusDirection.Expand)}
                >
                    <span style={{fontSize: "42pt"}}>+</span>
                </Button>
                <Button
                    key="88997"
                    variant="OulineButton"
                    size="lg"
                    alt="minus"
                    style={{paddingTop: "20px"}}
                    onClick={() => setExpandCollapse(PlusMinusDirection.Collapse)}
                >
                    <span style={{fontSize: "42pt"}}>-</span>
                </Button>
            </div>
        );
    }

    return (
        <StyledContainer>
            <h1 id={'h1'}>
                UNDER CONSTRUCTION - WIP
            </h1>
            <GridWrapper>
                <GridCol2Row1>
                    <div>
                        {plusMinusButtons()} <strong>Expand / Collapse</strong>
                    </div>
                    <React.Fragment>
                        <ul>
                            <Button
                                variant="outline"
                                size={"lg"}
                                onClick={() => setShowEducation(!showEducation)}
                            >
                                <div>
                                    <strong>{explandCollapse(showEducation)} Education</strong>
                                </div>
                            </Button>
                        </ul>
                    </React.Fragment>
                    <React.Fragment>
                        <ul>
                            <Button
                                variant="outline"
                                size={"lg"}
                                onClick={() => setShowExperience(!showExperience)}
                            >
                                <div>
                                    <strong>{explandCollapse(showExperience)} Experience</strong>
                                </div>
                            </Button>
                        </ul>
                    </React.Fragment>
                    <React.Fragment>
                        <ul>
                            <Button
                                key={123}
                                variant="outline"
                                size={"lg"}
                                onClick={() => setShowDevelopment(!showDevelopment)}
                            >
                                <strong>
                                    {explandCollapse(showDevelopment)} Tools / libraries
                                </strong>
                            </Button>
                        
                        </ul>
                        <ul>
                            <Button
                                key={687}
                                variant="outline"
                                size={"lg"}
                                onClick={() => setShowAspirations(!showAspirations)}
                            >
                                <strong>{explandCollapse(showAspirations)} Aspirations</strong>
                            </Button>
                        </ul>
                        <ul>
                            <Button
                                key={687}
                                variant="outline"
                                size={"lg"}
                                onClick={() => {
                                    setShowHobbies(!showHobbies);
                                    setAllState(PlusMinusDirection.None);
                                }}
                            >
                                <strong>
                                    {explandCollapse(showHobbies)} Extra Curricular / Hobbies
                                </strong>
                            </Button>
                        </ul>
                    </React.Fragment>
                </GridCol2Row1>
                <GridCol3Row1>
                    {showEducation ? <div>{getEducationDetails()}</div> : null}
                    {showHobbies ? (
                        <Alert key="33" variant="light">
                            <TextWrapper>
                                <ul>
                                    <li>Rockclimbing</li>
                                    <li>3D Printing</li>
                                    <li>MTG</li>
                                    <li>Raspberri Pi Projects and Tinkering</li>
                                </ul>
                            </TextWrapper>
                        </Alert>
                    ) : null}
                    {showDevelopment ? (
                        <TextWrapper>{toolsAndLibraries()}</TextWrapper>
                    ) : null}
                    {showAspirations ? (
                        <TextWrapper>{getAspirations()}</TextWrapper>
                    ) : null}
                    {showExperience ? (
                        <React.Fragment>
                            <TextWrapper>{proEdgeInfo()}</TextWrapper>
                            <TextWrapper>{goldPointInfo()}</TextWrapper>
                            <TextWrapper>{tekSystemsInfo()}</TextWrapper>
                            <TextWrapper>{wtwInfo()}</TextWrapper>
                        </React.Fragment>
                    ) : null}
                </GridCol3Row1>
                <GridCol1Row1>
                    <React.Fragment>
                        <Card style={{width: "66%", height: "auto"}}>
                            <Card.Title style={{backgroundColor: "aliceblue"}}>
                                <AlertSubHeader style={{textAlign: "center"}}>
                                    <TextWrapper>
                                        Eric Ryan Bowser - Software Engineer
                                    </TextWrapper>
                                </AlertSubHeader>
                            </Card.Title>
                            <Card.Body>
                                <Card.Img variant="top" src={head3}/>
                                <Card.Text>
                                    <TextWrapper>
                                        <div>Contact Information:</div>
                                        <div>Mobile: 435-494-8030</div>
                                    </TextWrapper>
                                    <div>
                                        {addLink(
                                            "mailto:ericryanbowser@gmail.com",
                                            "ericryanbowser@gmail.com",
                                            "Email address"
                                        )}
                                    </div>
                                    <div>
                                        <a href={"https://github.com/ericbowser"} >GitHub</a>
                                        {addLink(
                                            "",
                                            "Github",
                                            "Github for Eric Bowser"
                                        )}
                                    </div>
                                    <div>
                                        <Card.Text>Eric Bowser Resume</Card.Text>
                                        <a href={ericDocx} download>
                                            <Card.Img
                                                variant="top"
                                                src={docx}
                                                style={{width: "25%", height: "25%"}}
                                            />
                                        </a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                </GridCol1Row1>
            </GridWrapper>
        </StyledContainer>
    );
}


export default App;
