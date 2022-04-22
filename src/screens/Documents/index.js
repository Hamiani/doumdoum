import React from "react";
import { Row, Col, Progress } from "antd";

const Documents = () => (
  <div className="container__antd p-top-20">
    <h1>In progress</h1>
    <Row justify="center">
      <Col span={24}>
        <Progress percent={50} status="active" />
      </Col>
    </Row>
  </div>
);

export default Documents;
