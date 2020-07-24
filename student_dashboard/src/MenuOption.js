import React from "react"

function MenuOption(props) {
    return (
        <option value={props.assignmentName}>{props.assignmentName}</option>
    )
}

export default MenuOption