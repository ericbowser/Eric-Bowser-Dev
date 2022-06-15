import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import head from "./images/head.jpg";
import plus from "./images/expand.png";
import minus from "./images/collapse.png";
import penHolder from "./images/penHolder.jpg";
import collage from "./images/collage.png";
import raspbi from "./images/raspberriPi.jpg";
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
          <li>SQL Server reports for financial data for origination clients</li>
          <li>
            System.Drawing library for rendering unique reports for clients
          </li>
          <li>Worked on some internal tools to build up client database</li>
          <li>SSRS Sql Data Reporting</li>
        </ul>
      </Alert>
    );
  }

  function tekSystemsInfo() {
    return (
      <Alert key="411" variant="light">
        <Alert.Heading>2015-2016: Contract To Hire</Alert.Heading>
        <AlertSubHeader>Software Developer</AlertSubHeader>
        <div>
          Worked as a contract to hire through TEKSystems for ExtendHealth
          before merger to Towers Watson which later merged again to become
          Willis Towers Watson
        </div>
      </Alert>
    );
  }

  function wtwInfo() {
    return (
      <Alert key="22" variant="light">
        <Alert.Heading>Willis Towers Watson: 2016 - Present</Alert.Heading>
        <AlertSubHeader>Role: Full-stack Developer / Engineer</AlertSubHeader>
        <ul>
          <li>React JS Front-End and C# / .NET back-end</li>
          <li>
            Work primarily done for private healthcare exhange website and
            internal tools
          </li>
          <li>Bounded Contexts</li>
          <li>
            SQL Server Stored Procedures, User Defined Functions, TVPs, Data
            Modeling, Relational Data Mapping and Normalization
          </li>
          <li>Micro-services</li>
          <li>RESTFull APIs</li>
          <li>
            Healthcare standards from complaince standpoint: (CMS) as well as
            HIPAA standards
          </li>
          <li>Annual security trainings in OWASP Top 10</li>
          <ul>
            <li>Carrier file transformations and delivery</li>
            <li>
              worked on 'early days' application used to build dynamic carrier
              applications
            </li>
            <li>ground-level micro-service architecture from monolithic</li>
            <li>Both micro front-end and micro-service exposure</li>
            <li>
              worked on migrating PostgresSQL Document Database to Azure
              CosmosDB
            </li>
            <li>configurations for carrier specific file transformations</li>
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
            <li>Git Bash - source control cli</li>
            <li>Linux</li>
            <li>Powershell</li>
            <li>Bash</li>
          </ul>
          <Alert.Heading style={{ paddingTop: "15px" }}>Misc</Alert.Heading>
          <ul>
            <li>TypeScript</li>
            <li>Docker</li>
            <li>PostgresSql</li>
            <li>NoSql Document Database</li>
            <li>Octopus Deploy</li>
            <li>Team City Build</li>
          </ul>
        </Alert>
      </React.Fragment>
    );
  }

  // function getProjectInfo() {
  //   return (
  //     <Alert key="123" variant="light">
  //       <ul>
  //         <li>
  //           Implemented SumoLogic as factory pattern to log seperate instances
  //           of multi-threaded application
  //         </li>
  //         <li>
  //           Contributed to a company sourced library of reusable React
  //           components
  //         </li>
  //         <li>Migrated from postgresSQL to Cosmos or a NoSql database</li>
  //         <li>
  //           Worked on internal tools for building dynamic applications /
  //           configurations
  //         </li>
  //         <li>Boostrap micro-service as Kestrel or IIS</li>
  //         <li style={{ color: "red" }}>Ask for more information</li>
  //       </ul>
  //     </Alert>
  //   );
  // }

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
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return (
    <>
      <Alert key="1" variant="warning">
        <strong>Not an exhaustive list -+ Under Contruction</strong>
      </Alert>
      <Container className="container-fluid">
        {plusMinusImgRoleButton()}
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
                    {explandCollapse(showDevelopment)} Tools and libraries
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
                    <ul>
                      <JustifyDiv>
                        <Button
                          key={6}
                          variant="info"
                          size={"sm"}
                          style={{ marginRight: "15px" }}
                          onClick={() => setShow3DPlug(!show3DPlug)}
                        >
                          {explandCollapse(!show3DPlug)} 3D Printing
                        </Button>
                      </JustifyDiv>
                      {show3DPlug ? (
                        <JustifyDiv>
                          <img
                            src={penHolder}
                            alt="3d printed pen holder"
                            className="img-fluid"
                          />
                          <img
                            src={collage}
                            alt="3d printed pen holder"
                            className="img-fluid"
                          />
                        </JustifyDiv>
                      ) : null}
                      <JustifyDiv>
                        <Button
                          key={6}
                          variant="info"
                          size={"sm"}
                          onClick={() => setShowRaspi(!showRaspi)}
                        >
                          {explandCollapse(!showRaspi)} Raspberri Pi
                        </Button>
                      </JustifyDiv>
                      {showRaspi ? (
                        <JustifyDiv>
                          <img src={raspbi} alt="raspi" className="img-fluid" />
                        </JustifyDiv>
                      ) : null}
                      <JustifyDiv>
                        <ul>
                          <li>Rockclimbing</li>
                          <li>Snowbarding</li>
                          <li>Hiking</li>
                          <li>Camping</li>
                        </ul>
                      </JustifyDiv>
                    </ul>
                  </Alert>
                ) : (
                  () => setShow3DPlug(!show3DPlug)
                )}
              </ul>
            </React.Fragment>
          </GridCol1Row1>
        </GridWrapper>
      </Container>
    </>
  );
}

export default App;
