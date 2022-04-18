import React from "react";
import { Form, Row, Col, Input, Card, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import "./style.css";

const { Item } = Form;
const { Password } = Input;

const View = ({ onSubmit }) => {
  const [form] = Form.useForm();
  return (
    <div className="container_antd p-top-100">
      <Row justify="center">
        <Col span={8}>
          <Card
            className="card-class"
            title={<h1 className="login-title text-center">Me Connecter</h1>}
          >
            <Form
              onFinish={onSubmit}
              form={form}
              layout="vertical"
              requiredMark={false}
            >
              <Row>
                <Col span={24}>
                  <Item
                    name="username"
                    rules={[{ required: true, message: "Required" }]}
                  >
                    <Input
                      placeholder={"Identifiant"}
                      size="large"
                      className="login-input"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Item
                    name="password"
                    rules={[{ required: true, message: "Required" }]}
                  >
                    <Password
                      placeholder={"Mot de passe"}
                      className="login-input"
                      size="large"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Item>
                </Col>
              </Row>
              <Button className="login-button " htmlType="submit">
                Connection
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default View;
