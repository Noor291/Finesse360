import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, DoughnutController } from 'chart.js';

// Register the controllers and elements
Chart.register(DoughnutController, ArcElement, CategoryScale);

export default function Charts() {
    const subjects = [
        { name: 'Budgeting', marks: 40 },
        { name: 'Saving', marks: 70 },
        { name: 'Investing', marks: 60 },
        { name: 'Debt Management', marks: 0 },
        { name: 'Retirement Planning', marks: 100 },
    ];

    const generateDoughnutData = (subject) => ({
        labels: [subject.name, 'Remaining'],
        datasets: [
            {
                data: [subject.marks, 100 - subject.marks],
                backgroundColor: ['#C06014', '#F3F4ED'],
                hoverBackgroundColor: ['#C06014', '#F3F4ED']
            }
        ]
    });

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex">
                {subjects.slice(0, 3).map((subject) => {
                    const doughnutData = generateDoughnutData(subject);
                    return (
                        <div key={subject.name} className="w-48 h-48 mx-4 my-8">
                            <h3 className="text-xl text-[#424642] font-semibold text-center mb-2">{subject.name}</h3>
                            <Doughnut data={doughnutData} />
                        </div>
                    )
                })}
            </div>
            <div className="flex">
                {subjects.slice(3).map((subject) => {
                    const doughnutData = generateDoughnutData(subject);
                    return (
                        <div key={subject.name} className="w-48 h-48 mx-4 my-8">
                            <h3 className="text-xl text-[#424642] font-semibold text-center mb-2">{subject.name}</h3>
                            <Doughnut data={doughnutData} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
