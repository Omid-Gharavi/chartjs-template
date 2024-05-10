import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardBody } from '@nextui-org/react';
import { useSelector } from 'react-redux';

Chartjs.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
});

const ChartLine = () => {
    const data = useSelector(state => state.data)

    const options = {
        responsive: true,
        hoverRadius: 6,
        hoverBackgroundColor: 'orange',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x',
        },
        plugins: {
            tooltip: {
                enabled: true,
            },
            filler: {
                propagate: false,
                drawTime: 'beforeDatasetsDraw',
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                },
            },
        },
    };

    return (
        <Card className="grow-[1]">
            <CardBody>
                <Line
                    datasetIdKey="id"
                    options={options}
                    data={data}
                    onClick={(e) => {
                        console.log(e);
                    }}
                />
            </CardBody>
        </Card>
    );
};

export default ChartLine;