import React from "react";
import "../assets/css/PageStructure.css"

const PageStructure = props => {
    const { titulo } = props;

    return (
        <div className="mainPage">
                <div className="header">
                    <h1>{titulo}</h1>
                </div>
                {props.children}
        </div>
    )
}

export default PageStructure;