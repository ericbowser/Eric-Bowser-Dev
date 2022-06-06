import React from 'react';
import {useState, useEffect} from 'react';
// @ts-ignore
import penHolder from './penHolder.jpg';
import head from './head.jpg';
import styled from 'styled-components';
import {Container,  Button} from 'react-bootstrap';

const ImgWrapper = styled.div`
  padding: 50px 20px 20px 50px;
  border-top: 2px solid lightblue;
  /* border-left: 2px solid purple; */
  border-bottom: 2px solid black;
`;
const ContentContainer = styled.div`
  padding-top: 50px;
`;
const TextWrapper = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;
const JustifyDiv = styled.div`
  text-align: justify;
`;

const GridWrapper = styled.span`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const GridCol1 = styled.span`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
`;
const GridCol2 = styled.span`
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 3;
`;

function App() {
  const [showExperience, setShowExperience] = useState(false); 
  const [showDevelopment, setShowDevelpment] = useState(false); 
  const [showProjects, setShowProjects] = useState(false); 
  const [showAspirations, setShowAspirations] = useState(false); 
  
  useEffect(() => {
    console.log('gets here')
  }, [showExperience])

  const addText = (/** @type {string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined} */ text) => {
    return (
      <JustifyDiv>{text}</JustifyDiv>
    )
  };

  return (
      <Container className='fluid'>
        <h2>Eric Bowser - Software Engineer</h2>
        <GridWrapper>
        <GridCol1>
        <ImgWrapper>
         <div>
          <img src={head} alt='Eric Bowser' className='img-fluid rounded'/>
           </div> 
        </ImgWrapper>
        </GridCol1>
        <GridCol2>
        </GridCol2>
        </GridWrapper>
        
        <ContentContainer>
          <nav className='small'>
            <ul className='list-unstyled'>
              <li>
                <Button variant='outline'
                  size={'sm'}
                  onClick={() => setShowExperience(!showExperience)}
                >
                  <strong> 
                  + Experience
                  </strong>
                </Button>
                  {showExperience &&
                   <TextWrapper>
                      {addText('GoldPoint Systems: 2013-2015')}
                      { addText('C# back-end developer')}
                      {addText('SQL Server reports for financial data for origination clients')}
                  </TextWrapper>
                  }
              </li>
              <li>
                <Button 
                  variant='outline'
                  size={'sm'}
                  onClick={() => setShowDevelpment(!showDevelopment)}
                >
                  <strong> 
                    + Tools, libraries, and Platforms
                  </strong>
                </Button>
                  {showDevelopment ? (
                    <TextWrapper>
                      {addText('NET Framework, .NET core, C#')}
                       {addText('Visual Studio 2019/2022')}
                       {addText('Visual Studio Code')}
                       {addText('Microsoft SQL Server & Management Studio')}
                    </TextWrapper>) : null}
              </li>
              <li>
                <Button
                  variant='outline'
                  size={'sm'}
                  onClick={(() => setShowProjects(!showProjects) )}
                >
                  <strong> 
                    + Worthy of note work projects
                  </strong>
                </Button>
                {showProjects ? (
                <TextWrapper>
                  {addText('Implemented SumoLogic as factory pattern to log seperate instances of multi-threaded application')}
                  {addText('Contributed to a company sourced library of reusable React components')}
                  {addText('Migrated from postgresSQL to Cosmos or a NoSql database')}
                </TextWrapper>
                 ) : null}
              </li>
              <li>
                <Button variant='outline' size={'sm'}
                >
                  <strong> 
                    + Aspirations
                  </strong>
                </Button>
              </li>
              <li>
                <Button 
                  variant='outline'
                  size={'sm'}
                  onClick={() => setShowAspirations(!showAspirations)}
                >
                  <strong> 
                    + Extra Curricular / Hobbies
                  </strong>
                </Button>
                  {showAspirations ? (
                <ImgWrapper>
                  <div>
                    <img src={penHolder} alt='Eric Bowser' className='img-fluid rounded'/>
                  </div> 
                </ImgWrapper>
                    
                  ) : null}
              </li>
            </ul>
          </nav>
           </ContentContainer>
      </Container>
  );
}

export default App;
