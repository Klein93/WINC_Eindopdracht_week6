import React from "react"
import allAssignmentNames from "./datafiles/AllAssignmentNames"
import MenuOption from "./MenuOption"

function DropMenu(props) {
    const assignmentSelectOptions = allAssignmentNames.map(assignmentName =>

        <MenuOption assignmentName={assignmentName} />)

    return (
        <div>
            <h2>Evaluations of assignments</h2>
            <select onChange={props.getEvaluations}>
                <option value="">--Select Assignment--</option>
                {assignmentSelectOptions}
            </select>
        </div>
    )
}

export default DropMenu