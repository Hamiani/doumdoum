import React from "react";
import { Button, Card, Result } from "antd";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { PATHS } from "../../utils/constants";
import "./style.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="notFound">
      <Card title={<h1 className="text-center">Page not found</h1>}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button
              className="text-center back_button"
              onClick={() => history.push(PATHS.HOME)}
            >
              <ArrowLeftOutlined />
              go back
            </Button>
          }
        />
      </Card>
    </div>
  );
};

export default NotFound;
