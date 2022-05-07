import React from "react";
import { Column } from "@ant-design/plots";
import { Card } from "antd";
const data = [
  {
    type: "TEST1",
    sales: 27
  },
  {
    type: "TEST1",
    sales: 25
  },
  {
    type: "TEST3",
    sales: 18
  },
  {
    type: "TEST4",
    sales: 15
  },
  {
    type: "TEST5",
    sales: 10
  },
  {
    type: "TEST6",
    sales: 5
  }
];
const config = {
  data,
  xField: "type",
  yField: "sales",
  color: "#19CDD7",
  label: {
    // 可手动配置 label 数据标签位置
    position: "middle",
    // 'top', 'bottom', 'middle',
    // 配置样式
    style: {
      fill: "#FFFFFF",
      opacity: 0.6
    }
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false
    }
  },
  meta: {
    type: {
      alias: "type"
    },
    sales: {
      alias: "sales"
    }
  }
};
const BasicColumn = () => {
  return (
    <Card
      className="card-class"
      title={<h1 className="h1 text-center">Storage capacity </h1>}
    >
      <Column {...config} />
    </Card>
  );
};

export default BasicColumn;
