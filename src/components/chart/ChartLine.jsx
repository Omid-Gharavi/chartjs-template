import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend,
    Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"
// import zoomPlugin from 'chartjs-plugin-zoom';
import { fakeData } from "@/data/fakeData";

import { Card, CardBody } from "@nextui-org/react";

Chartjs.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
})

const ChartLine = () => {
    const options = {
        responsive: true,
        hoverRadius: 6,
        hoverBackgroundColor: 'orange',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            filler: {
                propagate: false,
                drawTime: 'beforeDatasetsDraw'
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                }
            }
        },
        // maintainAspectRatio: false,
    };

    return (
        <Card className="w-full">
            <CardBody>
                <Line options={options} data={fakeData} height={100}></Line>
            </CardBody>
        </Card>
    )
}

export default ChartLine