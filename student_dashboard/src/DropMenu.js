import React from "react"
import allAssignmentNames from "./allAsignmentNames"
import MenuOption from "./MenuOption"

function DropMenu(props) {
    const assignmentSelectOptions = allAssignmentNames.map(assignmentName =>

        <MenuOption assignmentName={assignmentName} />)

    return (
        <select onChange={props.getEvaluations}>
            <option value="">--Select Assignment--</option>
            {assignmentSelectOptions}
        </select>
    )
}

export default DropMenu