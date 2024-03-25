import {GridCol1Row1, GridCol2Row1, GridWrapper, StyledContainer} from "../styles";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Tools from "./Tools";
import Aspirations from "./Aspirations";
import Experience from "./Experience";
import ConversionTool from "../ConversionTool/ConversionTool";
import MyCard from "./MyCard";
import React from "react";

const Portfolio = () => {
    <StyledContainer>
        <GridWrapper>
            <GridCol2Row1>
                {showEducation ? <Education/> : null}
                {showHobbies ? <Hobbies/> : null}
                {showDevelopment ? <Tools/> : null}
                {showAspirations ? <Aspirations/> : null}
                {showExperience ? <Experience/> : null}
                {showConversionTool ? <ConversionTool/> : null}
            </GridCol2Row1>
            <br/>
            <br/>
            <GridCol1Row1>
                <MyCard/>
            </GridCol1Row1>
        </GridWrapper>
    </StyledContainer>
}

export default Portfolio;