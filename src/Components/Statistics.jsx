import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const Statistics = [
  {
    subject: "Assignment 1",
    A: 58,

    fullMark: 60,
  },
  {
    subject: "Assignment 2",
    A: 59,

    fullMark: 60,
  },
  {
    subject: "Assignment 3",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 4",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 5",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 6",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 7",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 8",
    A: 60,

    fullMark: 60,
  },
];

export default function App() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="page-title">Statistics</h1>
      </div>
      <RadarChart
        className="mx-auto mb-20"
        cx={300}
        cy={250}
        outerRadius={150}
        width={800}
        height={500}
        data={Statistics}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 60]} />
        <Radar
          name="Assignment Marks of Sohag Rana"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </div>
  );
}
