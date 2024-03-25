import React, {useState, useEffect} from "react";
import {PlusMinusDirection} from "./Common";
import {
    Button, Nav
} from "react-bootstrap";
import {
    NavContainer
} from "./styles";
import PlusMinusButtons from "./Components/PlusMinus";
import Portfolio from "./Components/Portfolio";

function App() {
    const [showExperience, setShowExperience] = useState(false);
    const [showDevelopment, setShowDevelopment] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showAspirations, setShowAspirations] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [allState, setAllState] = useState(PlusMinusDirection.None);
    const [showConversionTool, setShowConversionTool] = useState(PlusMinusDirection.None);

    function setAllCollapse() {
        setShowExperience(false);
        setShowDevelopment(false);
        setShowHobbies(false);
        setShowAspirations(false);
        setShowProjects(false);
        setShowEducation(false);
    }

    function setAllExpand() {
        setShowExperience(true);
        setShowDevelopment(true);
        setShowHobbies(true);
        setShowAspirations(true);
        setShowProjects(true);
        setShowEducation(true);
    }

    useEffect(() => {
        setAllState(PlusMinusDirection.None);
    }, [showAspirations, showDevelopment, showExperience, showProjects, showHobbies, showEducation]);

    useEffect(() => {
        if (allState === PlusMinusDirection.Expand) {
            setAllExpand();
        } else if (allState === PlusMinusDirection.Collapse) {
            setAllCollapse();
        } else {
            setAllState(PlusMinusDirection.None);
        }
    }, [allState]);

    useEffect(() => {
    }, [showConversionTool]);

    function setExpandCollapse(direction) {
        if (!direction) {
            return;
        }
        if (direction === PlusMinusDirection.Collapse) {
            setAllState(PlusMinusDirection.Collapse);
        } else if (PlusMinusDirection.Expand) {
            setAllState(PlusMinusDirection.Expand);
        } else {
            setAllState(PlusMinusDirection.None);
        }
    }

    function explandCollapse(state) {
        return state ? "-" : "+";
    }

    return (
        <React.Fragment>
            <NavContainer>
                <Nav>
                    <Nav.Item>{PlusMinusButtons(setExpandCollapse)}</Nav.Item>
                    <Nav.Item>Education:
                        <Button
                            variant="outline"
                            size={"lg"}
                            onClick={() => setShowEducation(!showEducation)}
                        >
                            <div>
                                <strong>
                                    {explandCollapse(showEducation)} Education
                                </strong>
                            </div>
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant="outline"
                            size={"lg"}
                            onClick={() => setShowDevelopment(!showDevelopment)}
                        >
                            <strong>
                                {explandCollapse(showDevelopment)} Tools / libraries
                            </strong>
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
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
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant="outline"
                            size={"lg"}
                            onClick={() => setShowAspirations(!showAspirations)}
                        >
                            <strong>
                                {explandCollapse(showAspirations)} Aspirations
                            </strong>
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant="outline"
                            size={"lg"}
                            onClick={() => {
                                setShowHobbies(!showHobbies);
                                setAllState(PlusMinusDirection.None);
                            }}
                        >
                            <strong>
                                {explandCollapse(showHobbies)} Extra Curricular / Hobbies
                            </strong>
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            variant="outline"
                            size={"lg"}
                            onClick={() => {
                                setShowConversionTool(!showConversionTool);
                                setAllState(PlusMinusDirection.None);
                            }}
                        >
                            <strong>
                                {explandCollapse(showHobbies)} Conversion Tool
                            </strong>
                        </Button>
                    </Nav.Item>
                </Nav>
            </NavContainer>
            <Portfolio/>
        </React.Fragment>
    );
}

export default App;