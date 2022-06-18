import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import head from "./images/head.jpg";
import plus from "./images/expand.png";
import minus from "./images/collapse.png";
import { Container, Button, Alert } from "react-bootstrap";
import {
  GridCol1Row1,
  GridCol2Row1,
  JustifyDiv,
  GridWrapper,
  TextWrapper,
  AlertSubHeader,
} from "./styles";
import { PlusMinusDirection } from "./common";
import randomColor from './images/randomColor.png';

function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showDevelopment, setShowDevelpment] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAspirations, setShowAspirations] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [show3DPlug, setShow3DPlug] = useState(false);
  const [showRaspi, setShowRaspi] = useState(false);

  // Expand and collapse all
  const [allState, setAllState] = useState(PlusMinusDirection.None);

  useMemo(() => {
    if (allState === PlusMinusDirection.Collapse) {
      setAllCollapse();
    }
    if (allState === PlusMinusDirection.Expand) {
      setAllExpand();
    }
  }, [allState]);

  useEffect(() => {}, [
    showAspirations,
    showDevelopment,
    showExperience,
    showProjects,
  ]);
  useEffect(() => {
    if (!showHobbies && show3DPlug) {
      setShow3DPlug(false);
    }
    if (!showHobbies && showRaspi) {
      setShowRaspi(false);
    }
  }, [showHobbies, show3DPlug, showRaspi]);

  function setAllCollapse() {
    setShowExperience(false);
    setShowDevelpment(false);
    setShowHobbies(false);
    setShowAspirations(false);
    setShowProjects(false);
    setShow3DPlug(false);
    setShowRaspi(false);
  }

  function setAllExpand() {
    setShowExperience(true);
    setShowDevelpment(true);
    setShowHobbies(true);
    setShowAspirations(true);
    setShowProjects(true);
    setShow3DPlug(true);
    setShowRaspi(true);
  }

  function setExpandCollapse(direction = PlusMinusDirection.Collapse) {
    if (direction === PlusMinusDirection.Collapse) {
      setAllState(PlusMinusDirection.Collapse);
    } else if (PlusMinusDirection.Expand) {
      setAllState(PlusMinusDirection.Expand);
    } else {
      setAllState(PlusMinusDirection.None);
    }
  }

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
      <Alert key="420" variant="light">
        <Alert.Heading>Pro Edge Tec, LLC: 2013-2015</Alert.Heading>
        <AlertSubHeader>IT Technician</AlertSubHeader>
        <ul>
          <li>Troublshoot client hardware and configure network</li>
          <li>Inventory Tracking</li>
          <li>Nagios Server Monitoring Health</li>
          <li>Help install network bridge and help with infrastructure</li>
          <li>
            Networking and some IEEE exposure / Network Security practices
          </li>
          <li>
            Prepare Engineering employees computers for <strong>Kihomac</strong>
          </li>
          <li>
            Install Engineering software: SolidWorks, CNC Tooling software, etc
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
          C# back-end developer and SQL data analyst
        </AlertSubHeader>
        <ul>
          <li></li>
          <li>SQL Server & SSRS Reporting</li>
          <li>
            System.Drawing library for rendering unique reports for clients
          </li>
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
        <AlertSubHeader>
          Contract to Hire
        </AlertSubHeader>
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
          <li>Healthcare exhange website</li>
          <li>Dynamic applications / configuration</li>
          <li>Microservices and Microfrontends</li>
          <li>REST API</li>
          <li>Pub / Sub</li>
          <ul>
          <li>
            Healthcare standards and HIPAA
          </li>
            <li>Carrier file transformations and delivery</li>
            <li>NoSql on Azure platform</li>
          </ul>
        </ul>
        <AlertSubHeader>Organization Style: Scrum</AlertSubHeader>
        <ul>
          <li>Scrum and Sprints</li>
          <li>Kanban</li>
          <li>Jira Ticket Management</li>
          <li>Work vetted by Quality Assurance</li>
        </ul>
      </Alert>
    );
  }

  function toolsAndLibraries() {
    return (
      <React.Fragment>
        <Alert key="99" variant="light">
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
          <Alert.Heading style={{ paddingTop: "15px" }}>
            Some JavaScript Libraries
          </Alert.Heading>
          <ul>
            <li>React</li>
            <li>ECMAScript</li>
            <li>Webpack / Babel Transformation</li>
            <li>Jest Testing Framework</li>
            <li>React Testing Library</li>
          </ul>
          <Alert.Heading style={{ paddingTop: "15px" }}>
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
          <Alert.Heading style={{ paddingTop: "15px" }}>
            Scripting / CLI
          </Alert.Heading>
          <ul>
            <li>Git Bash</li>
            <li>Linux</li>
            <li>Powershell</li>
          </ul>
          <Alert.Heading style={{ paddingTop: "15px" }}>Misc</Alert.Heading>
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

  const addLink = (href = "", linkText = "", alt = "") => {
    return (
      <JustifyDiv>
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

  function plusMinusImgRoleButton() {
    return (
      <div>
        <img
          src={plus}
          className="img-fluid"
          alt="plus"
          style={{ paddingTop: "20px" }}
          role="button"
          onClick={() => setExpandCollapse(PlusMinusDirection.Expand)}
        />
        <img
          src={minus}
          key={minus}
          className="img-fluid"
          alt="minus"
          style={{ paddingTop: "20px" }}
          role="button"
          onClick={() => setExpandCollapse(PlusMinusDirection.Collapse)}
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container className="container-fluid">
      <header>
        <img src={randomColor} alt='header bg' className="container-fluid" style={{marginTop: '20px', marginBottom: '100px'}}/>
          {plusMinusImgRoleButton()} <strong>Expand / Collapse</strong>
      </header>
        <GridWrapper>
          <GridCol2Row1>
            <h6 style={{ margin: "25px 0px 50px 50px" }}>
              Eric Bowser - Software Engineer
              {addLink(
                "mailto:ericryanbowser@gmail.com",
                "ericryanbowser@gmail.com",
                "Email address",
                true
              )}
              {addLink(
                "https://github.com/ericbowser",
                "Github",
                "Github for Eric Bowser",
                true
              )}
              <img src={head} alt="Eric Bowser" className="img-fluid" />
              <div>Contact Information:</div>
              <div>Mobile: 435-494-8030</div>
            </h6>
          </GridCol2Row1>

          <GridCol1Row1>
            <React.Fragment>
              <ul>
                <Button
                  variant="outline"
                  size={"lg"}
                  onClick={() => setShowExperience(!showExperience)}
                >
                  <div>
                    <strong>
                      {explandCollapse(showExperience)} Experience
                    </strong>
                  </div>
                </Button>
                {showExperience ? (
                  <React.Fragment>
                    <TextWrapper>{proEdgeInfo()}</TextWrapper>
                    <TextWrapper>{goldPointInfo()}</TextWrapper>
                    <TextWrapper>{tekSystemsInfo()}</TextWrapper>
                    <TextWrapper>{wtwInfo()}</TextWrapper>
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
                  <strong>
                    {explandCollapse(showDevelopment)} Tools / libraries
                  </strong>
                </Button>
                {showDevelopment ? (
                  <TextWrapper>{toolsAndLibraries()}</TextWrapper>
                ) : null}
              </ul>
            </React.Fragment>
            <React.Fragment>
              <ul>
                <Button
                  key={687}
                  variant="outline"
                  size={"lg"}
                  onClick={() => setShowAspirations(!showAspirations)}
                >
                  <strong>
                    {explandCollapse(showAspirations)} Aspirations
                  </strong>
                </Button>
                {showAspirations ? (
                  <TextWrapper>{getAspirations()}</TextWrapper>
                ) : null}
              </ul>
              <ul>
                <Button
                  key={687}
                  variant="outline"
                  size={"lg"}
                  onClick={() => setShowHobbies(!showHobbies)}
                >
                  <strong>
                    {explandCollapse(showHobbies)} Extra Curricular / Hobbies
                  </strong>
                </Button>
                {showHobbies ? (
                  <Alert key="33" variant="light">
                      <TextWrapper>
                        <ul>
                          <li>Rockclimbing</li>
                          <li>3D Printing</li>
                          <li>MTG</li>
                          <li>Raspberri Pi</li>

                        </ul>
                      </TextWrapper>
                  </Alert>
                ): null}
              </ul>
            </React.Fragment>
          </GridCol1Row1>
        </GridWrapper>
      <footer style={{marginTop: '150px'}}>
        <img src={randomColor} alt='header bg' className="container-fluid" />
      </footer>
      </Container>
      </React.Fragment>
  );
}

export default App;
