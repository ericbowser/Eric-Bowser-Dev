import React from 'react';
import {useState, useEffect} from 'react';
// @ts-ignore
import erb from './erb.jpg';
import styled from 'styled-components';
import {Card, Image, Container, Figure, Button} from 'react-bootstrap';

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

function App() {
  const [showExperience, setShowExperience] = useState(false); 

  useEffect(() => {
    console.log('gets here')
  }, [showExperience])

  return (
      <Container className='fluid'>
        <h2>Eric Bowser - Software Engineer</h2>
        <ImgWrapper>
         <div>
          <img src={erb} alt='Eric Bowser' className='img-fluid rounded'/>
           </div> 
        </ImgWrapper>
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
                  {showExperience &&
                   <TextWrapper>kjalkkljjklas</TextWrapper>
                  }
                </Button>
              </li>
              <li>
                <Button variant='outline' size={'sm'}
                >
                  <strong> 
                    + Tools, libraries, and Platforms
                  </strong>
                </Button>
              </li>
              <li>
                <Button variant='outline' size={'sm'}
                >
                  <strong> 
                    + Worthy of note work projects
                  </strong>
                </Button>
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
                <Button variant='outline' size={'sm'}
                >
                  <strong> 
                    + Extra Curricular / Hobbies
                  </strong>
                </Button>
              </li>
            </ul>
          </nav>
           </ContentContainer>
      </Container>
  );
}

export default App;
