import React from 'react';
import  Container from "react-bootstrap/Container";
import {HeaderLine} from "../styles/styles";
const EducationDetails = () => {
    return (
      <Container>
        <HeaderLine>Education</HeaderLine>
        <ul>
          <li>Weber State University: 2011-2013 - BA Computer Science</li>
          <li>University Of Phoenix: 2010-2011 - Associates of Art</li>
        </ul>
      </Container>
    )
}

export default EducationDetails;