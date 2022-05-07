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
  data,
  angleField: "value",
  colorField: "type",
  color: ["#0081a7", "#00afb9", "#fdfcdc", "#fed9b7", "#f07167", "#bc6c25"],
  radius: 1,
  innerRadius: 0.6,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "center",
      fontSize: 14
    }
  },
  interactions: [
    {
      type: "element-selected"
    },
    {
      type: "element-active"
    }
  ],
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      content: ""
    }
  }
};
const DonutChart = () => {
  return (
    <Card
      className="card-class"
      title={<h1 className="h1 text-center">Rolls storage capacity </h1>}
    >
      <Pie {...config} />
    </Card>
  );
};

export default DonutChart;
