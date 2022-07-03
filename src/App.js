//#region imports
import React from "react";
import { useState, useEffect } from "react";
import head3 from "./images/head3.jpg";
import pdfIcon from "./images/pdf.png";
import docx from "./images/docx.png";
import ericPdf from "./files/Eric-Bowser-Resume-2022.pdf";
import ericDocx from "./files/Eric-Bowser-Resume-2022.docx";
import { Button, Alert, Card } from "react-bootstrap";
import {
  GridCol1Row1,
  GridCol2Row1,
  GridCol3Row1,
  JustifyDiv,
  GridWrapper,
  TextWrapper,
  AlertSubHeader,
  StyledContainer
} from "./styles";
import { PlusMinusDirection } from "./common";
import { InlineWidget } from "react-calendly";
//#endregion

function App() {
  //#region local state react hook
  const [showExperience, setShowExperience] = useState(false);
  const [showDevelopment, setShowDevelpment] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAspirations, setShowAspirations] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [allState, setAllState] = useState(PlusMinusDirection.None);
  //#endregion

  //#region Collapse / Expand Toggle
  function setAllCollapse() {
    setShowExperience(false);
    setShowDevelpment(false);
    setShowHobbies(false);
    setShowAspirations(false);
    setShowProjects(false);
    setShowEducation(false);
    setShowCalendly(false);
    window.scrollTo(0, window.screen.height);
  }

  function setAllExpand() {
    setShowExperience(true);
    setShowDevelpment(true);
    setShowHobbies(true);
    setShowAspirations(true);
    setShowProjects(true);
    setShowEducation(true);
    setShowCalendly(false);
    window.scrollTo(0, 0);
  }

  //#endregion

  //#region React Hooks
  useEffect(() => {
    setAllState(PlusMinusDirection.None);
  }, [
    showAspirations,
    showDevelopment,
    showExperience,
    showProjects,
    showHobbies,
    showEducation,
    showCalendly,
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

  //#endregion

  //#region Education
  // Arrow function - executes later or when invoked
  const getEducationDetails = () => {
    return (
        <Alert key="995" variant="light">
          <AlertSubHeader fontSize='10pt'>
            <ul>
              <li>
                Weber State University: 2011-2013 - BA Computer Science
              </li>
              </ul>
          </AlertSubHeader>
            <AlertSubHeader fontSize='10pt'>
              <ul>
              <li>
                University Of Pheonix: 2010-2011 - Associates of Art
                </li>
            </ul>
            </AlertSubHeader>
        </Alert>
    );
  };
  //#endregion

  //#region Aspirations
  function getAspirations() {
    return (
      <Alert key="98" variant="light">
        <AlertSubHeader fontSize="10pt">

        <ul>
          <li>Find career growth</li>
          <li>Increase passion</li>
          <li>Learn new things</li>
          <li>Networking</li>
          <li>Advance career</li>
          <li>More experience</li>
          <li>Trusting and engaging culture</li>
        </ul>
        </AlertSubHeader>
      </Alert>
    );
  }
  //#endregion

  //#region Pro Edge
  function proEdgeInfo() {
    return (
      <Alert key="421" variant="light">
        <AlertSubHeader color='grey'>Pro Edge Tec, LLC: 2013-2015</AlertSubHeader>
        <AlertSubHeader color='purple' fontSize='12pt'>IT Technician</AlertSubHeader>
        <ul>
          <li>Troublshoot client hardware</li>
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
  //#endregion

  //#region GOLDPoint Info
  function goldPointInfo() {
    return (
      <Alert key="418" variant="light">
        <AlertSubHeader color='grey' >GoldPoint Systems: 2013-2015</AlertSubHeader>
        <AlertSubHeader color='purple' fontSize='12pt'>
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
  //#endregion

  //#region TEK Systems
  function tekSystemsInfo() {
    return (
      <Alert key="411" variant="light">
        <AlertSubHeader color='grey'>2015-2016: Contract To Hire</AlertSubHeader>
        <AlertSubHeader  fontSize='12pt'>Contract to Hire</AlertSubHeader>
      </Alert>
    );
  }
  //#endregion

  //#region WTW
  function wtwInfo() {
    return (
      <Alert key="22" variant="light">
        <AlertSubHeader fontSize="12pt">
          Willis Towers Watson: 2016 - 06/2022
        </AlertSubHeader>
        <AlertSubHeader fontSize='12pt' color='purple'>
          <span>Full Stack Software Engineer</span>
        </AlertSubHeader>
        <AlertSubHeader fontSize='10pt'>
          <div>React.js Front-End </div>
          <div>C# / .NET back-end</div>
        </AlertSubHeader>
        <AlertSubHeader fontSize='10pt'>
        <ul>
          <li>Bounded Contexts</li>
          <li>Dynamic applications / configurations</li>
          <li>Microservices and Microfrontend</li>
          <li>REST API</li>
          <li>Pub / Sub</li>
          <li>NoSql on Azure platform</li>
          <br/>
          <div className="text-muted">
            <li>Healthcare standards and HIPAA</li>
            <li>Carrier file transformations and delivery</li>
          </div>
        </ul>
        </AlertSubHeader>
        <br />
        <AlertSubHeader color='grey'>Organization Style: Scrum</AlertSubHeader>
        <ul>
          <li>Scrum and Sprints</li>
          <li>Kanban</li>
          <li>Jira Ticket Management</li>
          <li>Quality Assurance</li>
        </ul>
      </Alert>
    );
  }
  //#endregion

  //#region Tools and Libraries
  function toolsAndLibraries() {
    return (
      <React.Fragment>
        <Alert key="8" variant="light">
          <AlertSubHeader fontSize='12pt' color='purple'>
            Tools
          </AlertSubHeader>
          <AlertSubHeader fontSize="10pt">
            <ul>
              <li>NET Framework / dotnet core / .NET Standard / C#</li>
              <li>Visual Studio 2019/2022</li>
              <li>Visual Studio Code</li>
              <li>Microsoft SQL Server</li>
              <li>Github Source Control</li>
              <li>JetBrains Rider</li>
              <li>Postman / API Requests</li>
            </ul>

          </AlertSubHeader>
          <AlertSubHeader fontSize='12pt' color='purple'>
            JS Libraries / Modules
          </AlertSubHeader>
          <AlertSubHeader fontSize="10pt">
          <ul>
            <li>React</li>
            <li>Jest Testing Framework</li>
            <li>React Testing Library</li>
            <li>Webpack / Babel</li>
          </ul>
          </AlertSubHeader>
          <AlertSubHeader fontSize='12pt' color='purple'>
            .NET Libraries / Nuget packages
          </AlertSubHeader>
          <AlertSubHeader fontSize="10pt">
          <ul>
            <li>xUnit Testing Framework</li>
            <li>Moq / NSubstitute / (mocking libraries)</li>
            <li>React Testing Library</li>
            <li>Shouldly / Assert</li>
            <li>SumoLogic / Serilog</li>
            <li>Dapper ORM</li>
          </ul>
          </AlertSubHeader>
          <AlertSubHeader fontSize='12pt' color='purple'>
            Scripting / CLI
          </AlertSubHeader>
          
          <AlertSubHeader fontSize="10pt">
          <ul>
            <li>Git Bash</li>
            <li>Linux</li>
            <li>Powershell</li>
            <li>Cake Build</li>
          </ul>
          </AlertSubHeader>
          <AlertSubHeader fontSize='12pt' color='purple'>
            Data
          </AlertSubHeader>
          <AlertSubHeader fontSize='10pt'>
          <ul>
            <li>PostgreSQL</li>
            <li>Cosmos DB</li>
            <li>Sql Server</li>
          </ul>
          </AlertSubHeader>
          <AlertSubHeader fontSize='12pt' color='purple'>
            Misc
          </AlertSubHeader>
          <AlertSubHeader fontSize='10pt'>
          <ul>
            <li>TypeScript (learning..)</li>
            <li>Docker (learning..)</li>
            <li>Octopus Deploy</li>
            <li>Team City Build</li>
            <li>Azure</li>
          </ul>
          </AlertSubHeader>
        </Alert>
      </React.Fragment>
    );
  }
  //#endregion

  //#region functions
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
          style={{ paddingTop: "20px" }}
          onClick={() => setExpandCollapse(PlusMinusDirection.Expand)}
        >
          <span style={{ fontSize: "42pt" }}>+</span>
        </Button>
        <Button
          key="88997"
          variant="OulineButton"
          size="lg"
          alt="minus"
          style={{ paddingTop: "20px" }}
          onClick={() => setExpandCollapse(PlusMinusDirection.Collapse)}
        >
          <span style={{ fontSize: "42pt" }}>-</span>
        </Button>
      </div>
    );
  }
  //#endregion

  //#region render method
  return (
    <StyledContainer>
      <GridWrapper>
        <GridCol2Row1>
          <React.Fragment>
            <ul>
              <Button
                variant="outline"
                size={"lg"}
                onClick={() => setShowEducation(!showEducation)}
              >
                <AlertSubHeader fontSize="12pt">
                  {explandCollapse(showEducation)} Education
                </AlertSubHeader>
              </Button>
              {showEducation ? <React.Fragment>{getEducationDetails()}</React.Fragment> : null}
            </ul>
          </React.Fragment>
          <React.Fragment>
            <ul>
              <Button
                variant="outline"
                size={"lg"}
                onClick={() => setShowExperience(!showExperience)}
              >
                <AlertSubHeader fontSize="12pt">
                  {explandCollapse(showExperience)} Experience
                </AlertSubHeader>
              </Button>
              {showExperience ? (
                <React.Fragment>
                  <TextWrapper>{wtwInfo()}</TextWrapper>
                  <TextWrapper>{tekSystemsInfo()}</TextWrapper>
                  <TextWrapper>{goldPointInfo()}</TextWrapper>
                  <TextWrapper>{proEdgeInfo()}</TextWrapper>
                </React.Fragment>
              ) : null}
            </ul>
          </React.Fragment>
          <React.Fragment>
            <ul>
              <Button
                key={123}
                variant="outline"
                size={"lg"}
                onClick={() => setShowDevelpment(!showDevelopment)}
              >
                <AlertSubHeader fontSize="12pt">
                  {explandCollapse(showDevelopment)} Tools / libraries
                </AlertSubHeader>
              </Button>
              {showDevelopment ? (
                <TextWrapper>{toolsAndLibraries()}</TextWrapper>
              ) : null}
            </ul>
            <ul>
              <Button
                key={687}
                variant="outline"
                size={"lg"}
                onClick={() => setShowAspirations(!showAspirations)}
              >
                <AlertSubHeader fontSize="12pt">

                  {explandCollapse(showAspirations)} Aspirations
                </AlertSubHeader>
              </Button>
              {showAspirations ? (
                <React.Fragment>{getAspirations()}</React.Fragment>
              ) : null}
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
                <AlertSubHeader fontSize="12pt">

                  {explandCollapse(showHobbies)} Extra Curricular / Hobbies
                </AlertSubHeader>
              </Button>
              {showHobbies ? (
                <Alert key="33" variant="light">
                  <AlertSubHeader fontSize="10pt">
                    <ul>
                      <li>Rockclimbing</li>
                      <li>3D Printing</li>
                      <li>MTG</li>
                      <li>Raspberri Pi Projects and Tinkering</li>
                    </ul>
                  </AlertSubHeader>
                </Alert>
              ) : null}
            </ul>
            <ul>
              <Button
                key={687}
                variant="outline"
                size={"lg"}
                onClick={() => setShowCalendly(!showCalendly)}
              >
                <AlertSubHeader fontSize="12pt">
                  {explandCollapse(showCalendly)} Calendly Scheduler
                </AlertSubHeader>
              </Button>
              {showCalendly ? (
                <TextWrapper>
                  <InlineWidget url="https://calendly.com/ericryanbowser" />
                </TextWrapper>
              ) : null}
            </ul>
          </React.Fragment>
        </GridCol2Row1>
        <GridCol3Row1>
          <div
            style={{
              padding: "0 50px 0 0",
              position: "fixed",
            }}
            
          >
            {/* <img src={randomColor} alt="header bg" className="container-fluid" /> */}
            {plusMinusButtons()} <strong>Expand / Collapse</strong>
          </div>

        </GridCol3Row1>
        <GridCol1Row1>
            <Card style={{ width: "66%", height: "auto" }}>
              <Card.Title style={{ backgroundColor: "aliceblue" }}>
                <AlertSubHeader style={{ textAlign: "center" }}>
                  <TextWrapper>
                    Eric Ryan Bowser - Software Engineer
                  </TextWrapper>
                </AlertSubHeader>
              </Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={head3} />
                <Card.Text>
                  <TextWrapper>
                    <div>Contact Information:</div>
                    <div>Mobile: 435-494-8030</div>
                  </TextWrapper>
                  <div>
                    {addLink(
                      "mailto:ericryanbowser@gmail.com",
                      "ericryanbowser@gmail.com",
                      "Email address",
                      true
                    )}
                  </div>
                  <div>
                    {addLink(
                      "https://github.com/ericbowser",
                      "Github",
                      "Github for Eric Bowser",
                      true
                    )}
                  </div>
                  <div>
                    <Card.Text>Eric Bowser Resume</Card.Text>

                    <a href={ericPdf} download>
                      <Card.Img
                        variant="top"
                        src={pdfIcon}
                        style={{ width: "25%", height: "25%" }}
                      />
                    </a>
                    <a href={ericDocx} download>
                      <Card.Img
                        variant="top"
                        src={docx}
                        style={{ width: "25%", height: "25%" }}
                      />
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
        </GridCol1Row1>
      </GridWrapper>
    </StyledContainer>
  );
}
//#endregion

export default App;
