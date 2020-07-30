import React from "react"
import Diagram from "./Diagram"
import allStudentNames from "./datafiles/AllStudentNames"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RoutesPerStudent(props) {
    const allRoutes = allStudentNames.map(studentName =>

        <Route path={"/" + studentName}>
            <Diagram title={props.title} categories={props.categories} moeilijkdata={props.moeilijkEvaluaties} leukdata={props.leukEvaluaties} />

        </Route>

    )
    return (
        <div>
            {allRoutes}
        </div>
    )
}

export default RoutesPerStudent