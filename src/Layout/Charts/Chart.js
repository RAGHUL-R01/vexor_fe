import React, { useState } from 'react'
import { Chart as ChartJS, scales } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

ChartJS.register();
export const options = {
    scales: {
        x: {
            grid: { display: false },
        },
        y: {
            grid: { display: false }
        }
    }
}
export default function Chart() {
    const [State, setState] = useState([10, 20, 2, 8, 15]);
    function Generate_random_num() {
        let Temp_var = [...State];
        Temp_var.shift(); //remove first char in array
        console.log(Temp_var)
        Temp_var.push(Math.floor(Math.random() * 10) + 1);
        setState(Temp_var)
        console.log(Temp_var)
    }
    // setInterval(() => Generate_random_num(), 4000);

    const data = {
        labels: ["Avatar", "John Wick", "The Last Hope", "POC", "Maari"],
        datasets: [
            {
                label: "Number of tickets booked per minute",
                data: State,
                borderColor: ["blue"],
                borderWidth: '3',
                padding: '4px'
            }
        ]
    }
    return (
        <div><Line data={data} options={options} /></div>
    )
}
