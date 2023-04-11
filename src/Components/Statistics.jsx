import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Statistics = [
  {
    subject: "Assignment 1",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 2",
    A: 58,

    fullMark: 60,
  },
  {
    subject: "Assignment 3",
    A: 60,

    fullMark: 60,
  },
  {
    subject: "Assignment 4",
    A: 58,

    fullMark: 60,
  },
  {
    subject: "Assignment 5",
    A: 53,

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
    <RadarChart
      className="mx-auto"
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={Statistics}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 60]} />
      <Radar
        name="Shaikat Roy"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
