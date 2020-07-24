import allAssignmentNames from "./allAsignmentNames"
//import { VictoryBar } from "victory"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup, VictoryZoomContainer } from "victory";
import React from "react"


function Diagram(props) {
    return (
        <div className="diagram">
            <h3>{props.title}</h3>
            <div className="legenda">
                <div className="difficultyLegenda">difficulty rating</div>
                <div className="enjoymentLegenda">enjoyment rating</div>
            </div>
            <VictoryChart
                width={800}
                height={2000}
                domainPadding={50}
                theme={VictoryTheme.material}
                containerComponent={<VictoryZoomContainer allowZoom={true} />}
            >
                <VictoryGroup horizontal
                    offset={10}
                    style={{ data: { width: 10 } }}
                    colorScale={["tomato", "gold"]}
                >
                    <VictoryBar
                        categories={{ x: props.categories }}
                        data={props.leukdata}

                    />
                    <VictoryBar
                        categories={{ x: props.categories }}
                        data={props.moeilijkdata}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    )
}

export default Diagram