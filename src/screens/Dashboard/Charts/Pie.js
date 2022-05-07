import React from "react";
import { Pie } from "@ant-design/plots";
import { Card } from "antd";

const data = [
  {
    type: "TEST1",
    value: 27
  },
  {
    type: "TEST2",
    value: 25
  },
  {
    type: "TEST3",
    value: 18
  },
  {
    type: "TEST4",
    value: 15
  },
  {
    type: "TEST5",
    value: 10
  },
  {
    type: "TEST6",
    value: 5
  }
];
const config = {
  appendPadding: 10,
  color: ["#0081a7", "#00afb9", "#fdfcdc", "#fed9b7", "#f07167", "#bc6c25"],
  data,
  angleField: "value",
  colorField: "type",
  radius: 0.9,
  label: {
    type: "inner",
    offset: "-30%",
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: "center"
    }
  },
  interactions: [
    {
      type: "element-active"
    }
  ]
};
const PieChart = () => {
  return (
    <Card
      className="card-class"
      title={<h1 className="h1 text-center">Les negatives </h1>}
    >
      <Pie {...config} />
    </Card>
  );
};
export default PieChart;
