"use client";

import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { pieChartData, pieChartOptions } from "./chartData";


ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"pie"> = pieChartOptions as ChartOptions<"pie">;

export default function ChartComponent() {
    return (
        <div className="max-w-xs mx-auto">
            <Pie data={pieChartData} options={options} />
        </div>
    );
}