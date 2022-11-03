import React from "react";
import {Alert} from "react-bootstrap";
import {MarginDiv} from "../Styles/styles";

const Aspirations = () => {
    return (
        <MarginDiv>
            <Alert variant={'info'}>Aspirations</Alert>
            <ul>
                <li>
                    Full stack engineer looking for a new opportunity to take software engineering
                    practice to the next level by working at a great company that values their
                    employees, in all aspects, to become a refined engineer by enabling trust and
                    empowering hard work with collaboration in a psychologically safe environment.
                    <MarginDiv>
                        <li>
                            Foster many facets of development to further refine character by creating positive
                            relationships to evolve career to the next level in an environment where innovation
                            and creativity are embraced.
                        </li>
                    </MarginDiv>
                </li>
            </ul>
        </MarginDiv>
    )
};

export default Aspirations;