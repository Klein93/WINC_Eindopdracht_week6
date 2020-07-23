import allAssignmentNames from "./allAsignmentNames"
//import { VictoryBar } from "victory"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory";
import React from "react"


function Diagram(props) {
    return (
        <div>
            <h1>Student Dashboard Winc Academy</h1>
            <VictoryChart
                width={800}
                height={3000}
                domainPadding={50}
                theme={VictoryTheme.material}
            >
                <VictoryGroup horizontal
                    offset={10}
                    style={{ data: { width: 6 } }}
                    colorScale={["tomato", "gold"]}
                >
                    <VictoryBar
                        categories={{ x: allAssignmentNames }}
                        data={props.leukdata}

                    />
                    <VictoryBar
                        categories={{ x: allAssignmentNames }}
                        data={props.moeilijkdata}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    )
}

export default Diagram