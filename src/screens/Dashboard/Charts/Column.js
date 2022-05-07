import React from "react";
import { Column } from "@ant-design/plots";
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
const paletteSemanticRed = "#DDB27C";
const brandColor = "#19CDD7";
const config = {
  data,
  xField: "type",
  yField: "value",
  seriesField: "",
  Text: <h1>Situation des composants Sew & fip</h1>,
  color: ({ type }) => {
    if (type === "TEST1" || type === "TEST5") {
      return paletteSemanticRed;
    }

    return brandColor;
  },
  label: {
    content: (originData) => {
      const val = parseFloat(originData.value);

      if (val < 0.05) {
        return (val * 100).toFixed(1) + "%";
      }
    },
    offset: 10
  },
  legend: false,
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false
    }
  }
};
const ColumnChart = () => {
  return (
    <Card
      className="card card-class"
      title={
        <h1 className="h1 text-center">Situation des composants Sew & Fip</h1>
      }
    >
      <Column {...config} />
    </Card>
  );
};
export default ColumnChart;
