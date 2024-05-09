import { useState } from 'react';
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
import { fakeData } from '@/data/fakeData';

import { Card, CardBody } from '@nextui-org/react';

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
    const [chartData, setChartData] = useState(fakeData);

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

    const onClick = () => {
        const updatedData = {
            ...chartData,
            datasets: chartData.datasets.map((data) => {
                if (data.label === 'Belgium') {
                    return { ...data, hidden: !data.hidden };
                }
                return data;
            }),
        };
        setChartData(updatedData);
    };

    return (
        <Card className="grow-[1]">
            <CardBody>
                <Line
                    datasetIdKey="id"
                    options={options}
                    data={chartData}
                    onClick={(e) => {
                        console.log(e);
                    }}
                />
                <button onClick={onClick}>click</button>
            </CardBody>
        </Card>
    );
};

export default ChartLine;