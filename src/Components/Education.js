import React from 'react';
import {Alert} from 'react-bootstrap';
import {AlertHeader, MarginDiv} from "../Styles/styles";

const EducationDetails = () => {
    return (
        <MarginDiv>
            <AlertHeader>Education</AlertHeader>
            <ul>
                <li>Weber State University: 2011-2013 - BA Computer Science</li>
                <li>University Of Phoenix: 2010-2011 - Associates of Art</li>
            </ul>
        </MarginDiv>
    )
}

export default EducationDetails;