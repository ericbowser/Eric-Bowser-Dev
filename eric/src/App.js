import React from "react";
import { useState, useEffect } from "react";
import head from "./images/head.jpg";
import { Container, Button, Alert } from "react-bootstrap";
import {
  GridCol1Row1,
  GridCol2Row1,
  JustifyDiv,
  GridWrapper,
  TextWrapper,
} from "./styles";

function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showDevelopment, setShowDevelpment] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAspirations, setShowAspirations] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);

  useEffect(() => {}, [
    showExperience,
    showDevelopment,
    showAspirations,
    showExperience,
    showHobbies,
  ]);

  function GoldPointInfo() {
    return (
      <Alert key={"success"} variant={"success"}>
        <ul>
          <li>GoldPoint Systems: 2013-2015", true</li>
          <li>Role: C# back-end developer and SQL data analyst</li>
          <li>SQL Server reports for financial data for origination clients</li>
          <li>
            System.Drawing library for rendering unique reports for clients
          </li>
          <li>Worked on some internal tools to build up client database</li>
        </ul>
      </Alert>
    );
  }
  function WTWInfo() {
    return (
      <Alert key={"info"} variant={"info"}>
        <li>2016 - Present</li>
        <li>Willis Towers Watson</li>
        <li>Role: Full-stack Developer / Engineer</li>
        <li>React JS Front-End and C# / .NET back-end</li>
        <li>Private healthcare exhange website</li>
        <li>Micro-services and RESTFull APIs</li>
        <li>Healthcare standards from complaince standpoint</li>
        <li>Carrier file transformations and delivery</li>
      </Alert>
    );
  }
  function toolsAndLibraries() {
    return (
      <Alert key={"99"} variant={"info"}>
        NET Framework, .NET core, C# Visual Studio 2019/2022 Visual Studio Code
        Microsoft SQL Server Github Source Control JetBrains Rider Postman / API
        Requests
      </Alert>
    );
  }

  function getProjectInfo() {
    return (
      <Alert key="123" variant="info">
        {`Implemented SumoLogic as factory pattern to log seperate instances of multi-threaded application
      Contributed to a company sourced library of reusable React components
      Migrated from postgresSQL to Cosmos or a NoSql database`}
      </Alert>
    );
  }
  // const addText = (text = "", bold = false, color = "black") => {
  //   return (
  //     <ul style={{ fontFamily: "monospace", color }}>
  //       {bold ? (
  //         <strong>
  //           <ul>{text}</ul>
  //         </strong>
  //       ) : (
  //         <li>{text}</li>
  //       )}
  //     </ul>
  //   );
  // };
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

  return (
    <Container className="container-fluid">
      <GridWrapper>
        <GridCol2Row1>
          <h6 style={{ color: "indigo", margin: "25px 0px 50px 50px" }}>
            Eric Bowser - Software Engineer
            {addLink(
              "mailto:ericryanbowser@gmail.com",
              "ericryanbowser@gmail.com",
              "Eric's email address",
              true
            )}
            {addLink(
              "https://github.com/ericbowser",
              "Github",
              "Github for Eric Bowser",
              true
            )}
            <img src={head} alt="Eric Bowser" className="img-fluid thumbnail" />
            <div>Contact Information:</div>
            <div>Mobile: 435-494-8030</div>
          </h6>
        </GridCol2Row1>

        <GridCol1Row1>
          <React.Fragment>
            <ul>
              <Button
                variant="outline"
                size={"sm"}
                onClick={() => setShowExperience(!showExperience)}
              >
                <strong>{explandCollapse(showExperience)} Experience</strong>
              </Button>
              {showExperience ? (
                <React.Fragment>
                  <div>
                    <TextWrapper>{GoldPointInfo()}</TextWrapper>
                  </div>
                  <div>
                    <TextWrapper>{WTWInfo()}</TextWrapper>
                  </div>
                </React.Fragment>
              ) : null}
            </ul>
          </React.Fragment>
          <React.Fragment>
            <ul>
              <Button
                key={123}
                variant="outline"
                size={"sm"}
                onClick={() => setShowDevelpment(!showDevelopment)}
              >
                <strong>
                  {explandCollapse(showDevelopment)} Tools, libraries and
                  Platforms
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
                key={456}
                variant="outline"
                size={"sm"}
                onClick={() => setShowProjects(!showProjects)}
              >
                <strong>
                  {explandCollapse(showProjects)} Worthy of note work projects
                </strong>
              </Button>
              {showProjects ? (
                <React.Fragment>{getProjectInfo()}</React.Fragment>
              ) : null}
            </ul>
          </React.Fragment>
          <React.Fragment>
            <ul>
              <Button
                key={687}
                variant="outline"
                size={"sm"}
                onClick={() => setShowHobbies(!showHobbies)}
              >
                <strong>
                  {explandCollapse(showHobbies)} Extra Curricular / Hobbies
                </strong>
              </Button>
              {showHobbies ? (
                <ul>
                  <li>3D Printing</li>
                  <li>Raspberri Pi</li>
                  <li>Rockclimbing</li>
                  <li>Snowbarding / Skiing</li>
                  <li>Hiking and Camping</li>
                </ul>
              ) : null}
            </ul>
          </React.Fragment>
        </GridCol1Row1>
      </GridWrapper>
    </Container>
  );
}

export default App;
