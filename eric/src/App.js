import React from "react";
import { useState, useEffect } from "react";
import head from "./images/head.jpg";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

const ImgWrapper = styled.span`
  padding: 30px 20px 20px 0;
  margin-left: 50px;
`;
const ContentContainer = styled.div`
  padding-top: 10px;
`;
const TextWrapper = styled.div`
  margin: 5px 0 0 10px;
  font-size: 12pt;
`;
const JustifyDiv = styled.div`
  text-align: justify;
`;

const GridWrapper = styled.span`
  display: grid;
  grid-gap: 50px;
  row-gap: 20px;
  grid-template-columns: 50% 50%;
  @media only screen and (max-width: 500px) {
    ul {
      padding: 5px 15px 10px 10px;
    }
    display: inline;
    line-height: 1;
  }
`;
const GridCol1Row1 = styled.span`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
`;
const GridCol2Row1 = styled.span`
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 3;
`;

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
    showExperience,
  ]);

  function GoldPointInfo() {
    return (
      <div>
        {addText("GoldPoint Systems: 2013-2015", true)}
        {addText("Role: C# back-end developer and SQL data analyst")}
        {addText(
          "SQL Server reports for financial data for origination clients"
        )}
        {addText(
          "System.Drawing library for rendering unique reports for clients"
        )}
        {addText("Worked on some internal tools to build up client database")}
      </div>
    );
  }
  function WTWInfo() {
    return (
      <>
        {addText("2016 - Present", true)}
        {addText("Willis Towers Watson")}
        {addText("Role: Full-stack Developer / Engineer")}
        {addText("React JS Front-End and C# / .NET back-end")}
        <ul>{addText("Private healthcare exhange website")}</ul>
        <ul>Micro-services and RESTFull APIs</ul>
        <ul>Healthcare standards from complaince standpoint</ul>
        <ul>Carrier file transformations and delivery</ul>
      </>
    );
  }

  const addText = (text = "", bold = false) => {
    return (
      <ul>
        {bold ? (
          <strong>
            <ul>{text}</ul>
          </strong>
        ) : (
          <li>{text}</li>
        )}
      </ul>
    );
  };
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
    <Container className="fluid">
      <h2 style={{ color: "indigo", margin: "25px 0px 50px 50px" }}>
        Eric Bowser - Software Engineer
      </h2>
      <GridWrapper>
        <GridCol2Row1>
          <ContentContainer>
            <ImgWrapper>
              <Container style={{ "margin-left": "50px" }}>
                <img
                  src={head}
                  alt="Eric Bowser"
                  className="img-fluid rounded"
                />
                <div>Contact Information:</div>
                <div>Mobile: 435-494-8030</div>
                {addLink(
                  "mailto:ericryanbowser@gmail.com",
                  "ericryanbowser@gmail.com",
                  "Eric's Email Address"
                )}
                {addLink(
                  "https://github.com/ericbowser",
                  "Github",
                  "Github for Eric Bowser"
                )}
              </Container>
            </ImgWrapper>
          </ContentContainer>
        </GridCol2Row1>
        <GridCol1Row1>
          <ContentContainer>
            <ul>
              <Button
                variant="outline"
                size={"sm"}
                onClick={() => setShowExperience(!showExperience)}
              >
                <strong>{explandCollapse(showExperience)} Experience</strong>
              </Button>
              {showExperience ? (
                <div>
                  <TextWrapper>{GoldPointInfo()}</TextWrapper>
                  <TextWrapper>{WTWInfo()}</TextWrapper>
                </div>
              ) : null}
            </ul>
          </ContentContainer>
          <ContentContainer>
            <ul>
              <Button
                variant="outline"
                size={"sm"}
                onClick={() => setShowDevelpment(!showDevelopment)}
              >
                <strong>
                  {explandCollapse(showDevelopment)} Tools, libraries, and
                  Platforms
                </strong>
              </Button>
              {showDevelopment ? (
                <TextWrapper>
                  {addText("NET Framework, .NET core, C#")}
                  {addText("Visual Studio 2019/2022")}
                  {addText("Visual Studio Code")}
                  {addText("Microsoft SQL Server & Management Studio")}
                </TextWrapper>
              ) : null}
            </ul>
          </ContentContainer>
          <ContentContainer>
            <ul>
              <Button
                variant="outline"
                size={"sm"}
                onClick={() => setShowProjects(!showProjects)}
              >
                <strong>
                  {explandCollapse(showProjects)} Worthy of note work projects
                </strong>
              </Button>
              {showProjects ? (
                <TextWrapper>
                  {addText(
                    "Implemented SumoLogic as factory pattern to log seperate instances of multi-threaded application"
                  )}
                  {addText(
                    "Contributed to a company sourced library of reusable React components"
                  )}
                  {addText(
                    "Migrated from postgresSQL to Cosmos or a NoSql database"
                  )}
                </TextWrapper>
              ) : null}
            </ul>
          </ContentContainer>
          <ContentContainer>
            <ul>
              <Button
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
                  {addText("3D Printing")}
                  {addText("Raspberri Pi")}
                  {addText("Rockclimbing")}
                  {addText("Snowbarding / Skiing")}
                  {addText("Hiking and Camping")}
                </ul>
              ) : null}
            </ul>
          </ContentContainer>
        </GridCol1Row1>
      </GridWrapper>
    </Container>
  );
}

export default App;
