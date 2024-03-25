import {Button} from "react-bootstrap";
import {PlusMinusDirection} from "../Common";
import React from "react";

const PlusMinusButtons = (setExpandCollapse = () => {
}) => (
    <div>
        <Button
            key="2895"
            variant="outlineButton"
            size="lg"
            alt="plus"
            onClick={() => setExpandCollapse(PlusMinusDirection.Expand)}
        >
            <span style={{fontSize: "34pt"}}>+</span>
        </Button>
        <Button
            key="88997"
            variant="OulineButton"
            size="lg"
            alt="minus"
            onClick={() => setExpandCollapse(PlusMinusDirection.Collapse)}
        >
            <span style={{fontSize: "34pt"}}>-</span>
        </Button>
    </div>
);
export default PlusMinusButtons;