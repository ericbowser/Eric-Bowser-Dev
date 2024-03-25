import {AlertSubHeader, TextWrapper} from "../styles";
import Card from 'react-bootstrap/Card'
import head3 from "../images/head.jpg";
import ericDocx from "../files/E.R.B-Resume.docx";
import docx from "../icons/docxIcon.ico";
import React from "react";

const MyCard = () => (
    <Card className={'bg-custom-color'}>
        <Card.Title style={{backgroundColor: "aliceblue"}}>
            <AlertSubHeader style={{textAlign: "center"}}>
                <TextWrapper>
                    Eric Ryan Bowser - Software Engineer
                </TextWrapper>
            </AlertSubHeader>
        </Card.Title>
        <Card.Body>
            <Card.Img variant={"top"} src={head3} />
            <Card.Text>
                <TextWrapper>
                    <div>Contact Information:</div>
                    <div>Mobile: 435-494-8030</div>
                </TextWrapper>
                <div>
                    <a href={"mailto:ericryanbowser@gmail.com"}>ericryanbowser@gmail.com</a>
                </div>
                <div>
                    <a href={"https://github.com/ericbowser"}>GitHub</a>
                </div>
                <div>
                    <Card.Text>Eric Bowser Resume</Card.Text>
                    <a href={ericDocx} download>
                        <Card.Img
                            variant="top"
                            src={docx}
                            style={{width: "25%", height: "25%"}}
                        />
                    </a>
                </div>
            </Card.Text>
        </Card.Body>
    </Card>
);
export default MyCard;