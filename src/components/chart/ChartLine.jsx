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
import { useEffect } from 'react';

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

    useEffect(() => {
        console.log(data.datasets.map(value => value.data.map(values => values)))
    }, [])


    const options = {
        scales: {
            y: {
                min: 1000000,
                max: 800000000000,
                ticks: {
                    stepSize: 10000000000,
                    callback: (value) => {
                        if (value >= 1000000000) {
                            return `${Math.floor(value / 1000000000)}bn`; // Formatting in milliards
                        } else if (value >= 1000000) {
                            return `${Math.floor(value / 1000000)}m`; // Formatting in millions
                        }
                        return value;
                    },
                },
            },
        },
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
        }
    };

    return (
        <Card className="grow-[1]" >
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
        </Card >
    );
};

export default ChartLine;