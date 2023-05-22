import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export function OwnerPageSalesChart({labels, sales}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: '요일별 총 매출',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: '요일',
                data: sales,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
