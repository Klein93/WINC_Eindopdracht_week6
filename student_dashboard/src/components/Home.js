import Diagram from "./Diagram"
import React from "react"

function Home(props) {
    return (
        <div>
            <Diagram categories={props.categories} title={props.title} leukdata={props.leukdata} moeilijkdata={props.moeilijkdata} />
        </div>
    )
}

export default Home