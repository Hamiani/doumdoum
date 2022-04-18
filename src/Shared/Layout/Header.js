import React from "react";
import { Button, Col, Row } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import { PATHS } from "../../utils/constants";
import LEAR from "../../Shared/assets/lear.png";
import "./styles.css";
import { useHistory } from "react-router-dom";

const HeaderApp = () => {
  const { push } = useHistory();
  return (
    <Row
      style={{
        height: "100px",
        background: "#fafafa",
        paddingLeft: "1rem",
        paddingRight: "2rem"
      }}
      mode="horizontal"
      justify="space-between"
      align="middle"
    >
      <Col>
        <img alt="logo" height={75} width={200} src={LEAR} />
      </Col>
      <Col>
        <Button
          className="delete_button"
          onClick={() => push(PATHS.AUTH.LOGOUT)}
        >
          <LogoutOutlined />
          Sign out
        </Button>
      </Col>
    </Row>
  );
};

export const PublicHeader = () => (
  <Row
    style={{
      height: "100px",
      background: "#fafafa"
    }}
    mode="horizontal"
    justify="center"
    align="middle"
  >
    <Col>
      <img alt="logo" height={75} width={200} src={LEAR} />
    </Col>
  </Row>
);

export default HeaderApp;
