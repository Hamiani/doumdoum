import { Card, Col, Divider, Row } from "antd";
import React from "react";
import Donut from "../Charts/Donut";
import Pie from "../Charts/Pie";
import BarGroup from "../Charts/BarGroup";
import Column from "../Charts/Column";
import BasicColumn from "../Charts/BasicColumn";

const View = () => {
  return (
    <div className="container__antd p-top-30">
      <Col span={24}>
        <Row justify="space-between">
          <Col span={11}>
            <Column />
          </Col>
          <Col span={11}>
            <BasicColumn />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="bottom">
          <Col span={24}>
            <BarGroup />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="bottom">
          <Col span={11}>
            <Pie />
          </Col>
          <Col span={11}>
            <Donut />
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default View;
