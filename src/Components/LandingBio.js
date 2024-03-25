import React from 'react';
import styled from 'styled-components';
import head from '../images/head.jpg';

// Styled components
const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10%;
`;

const PhotoPlaceholder = styled.div`
    img {
        width: 200px; /* Adjust based on your preference */
        height: 200px; /* Adjust to maintain aspect ratio */
        border-radius: 20%; /* Creates a circle shape */
        object-fit: cover; /* Ensures the image covers the space without stretching */
        margin-bottom: 20px;
    }
`;

const Introduction = styled.div`
    h1 {
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        max-width: 600px;
    }
`;

const LandingBio = () => {
    return (
        <LandingPageContainer>
            {/* Photo Placeholder */}
            <PhotoPlaceholder>
                <img src={head} alt="Your Name"/>
            </PhotoPlaceholder>

            {/* Introduction Text */}
            <Introduction>
                <h1>Hello, I'm Eric</h1>
                <p>Welcome to my portfolio!
                    I'm a Software Engineer with a passion for building new and exciting technologies.
                    Here you'll find projects I've worked on, my skills, and a bit more about me.
                    I'm excited to share my journey with you.
                </p>
            </Introduction>
        </LandingPageContainer>
    );
};

export default LandingBio;
