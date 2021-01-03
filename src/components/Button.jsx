import React from "react"

const Button = (props) => {
    return (
        <button disabled={props.shouldHide} className={"btn btn-"+props.color+" btn-block shadow"} onClick={props.runFunction}>
           { props.text}
        </button>
    )
}

export default Button;