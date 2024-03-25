import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import LandingBio from "./Components/LandingBio";
import styled from "styled-components";

const StyledP = styled.p`
 color: #0ae448;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <StyledP className={'class="text-[#ff6347] bg-[#ff6347]"'}>Hello Tailwind</StyledP>
        <LandingBio/>
    </StrictMode>
);

export default root;