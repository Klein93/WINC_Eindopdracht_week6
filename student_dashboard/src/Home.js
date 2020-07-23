
import Diagram from "./Diagram"
//import { VictoryBar } from "victory"
import React from "react"

function Home(props) {
    return (
        <div>
            <Diagram leukdata={props.leukdata} moeilijkdata={props.moeilijkdata} />
        </div>
    )
}

export default Home