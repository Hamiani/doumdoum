import React from "react";
import { Row, Col, Divider, Upload } from "antd";

import file1 from "../../Shared/assets/T2AN0167.xlsx";
import file2 from "../../Shared/assets/T2SC0246.xlsx";

const defaultFileList = [
  {
    uid: "1",
    name: "Inventory adjustment",
    status: "done",
    url: file1
  },
  {
    uid: "2",
    name: "Mouvement de stock scrap",
    status: "done",
    url: file2
  }
];

const Documents = () => (
  <div className="container__antd p-top-20">
    <h1 className="h1">Documents</h1>
    <Divider />
    <Row justify="center">
      <Col span={24}>
        <Upload
          showUploadList={{
            showDownloadIcon: true,
            showPreviewIcon: false,
            showRemoveIcon: false
          }}
          style={{ width: "500px" }}
          defaultFileList={defaultFileList}
          listType="picture-card"
        />
      </Col>
    </Row>
  </div>
);

export default Documents;
