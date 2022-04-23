import React, { useState, useMemo, memo } from "react";
import {
  Table,
  Row,
  Col,
  Divider,
  Input,
  BackTop,
  Tag,
  Select,
  Tooltip,
  Button
} from "antd";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { CSVLink } from "react-csv";

import { AiFillFilter } from "react-icons/ai";
import { ExportOutlined } from "@ant-design/icons";

import className from "classnames";
import get from "lodash/get";
import isNil from "lodash/isNil";

import Loading from "../../../Shared/Loading";
import Empty from "../../../Shared/Empty";
import Unknown from "../../../Shared/Unknown";

import { isEvenNumber } from "../../../utils/helpers";

import "./style.css";

const { Option } = Select;

const renderStatus = (value) => {
  const status = {
    P: <Tag color={"geekblue"}>Purchased</Tag>,
    M: <Tag color={"success"}>Manufactured</Tag>
  };

  return status[value];
};

const columns = [
  {
    title: "Item Number",
    dataIndex: "itemNumber",
    key: "itemNumber",
    sorter: (a, b) => get(a, "itemNumber", "") - get(b, "itemNumber", "")
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) =>
      get(a, "description", "").localeCompare(get(b, "description", ""))
  },
  {
    title: "Groupe / Site",
    dataIndex: "group",
    key: "group",
    sorter: (a, b) => get(a, "group", "").localeCompare(get(b, "group", ""))
  },
  {
    title: "M/P",
    dataIndex: "status",
    key: "status",
    render: (status) => renderStatus(status.toUpperCase())
  },
  {
    title: "Item type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => get(a, "type", "").localeCompare(get(b, "type", ""))
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    sorter: (a, b) => get(a, "quantity", "") - get(b, "quantity", "")
  },
  {
    title: "location",
    dataIndex: "location",
    key: "location",
    sorter: (a, b) =>
      get(a, "location", "").localeCompare(get(b, "location", ""))
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => get(a, "id", "") - get(b, "id", "")
  }
];

const Filter = ({ data, search }) => {
  const filteredData = useMemo(
    () =>
      !isNil(search)
        ? data.filter(
            (item) =>
              (!isNil(get(item, "itemNumber", "")) &&
                get(item, "itemNumber", "")
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "description", "")) &&
                get(item, "description", "")
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "group", "")) &&
                get(item, "group", "")
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "status", "")) &&
                get(item, "status", "")
                  .toString()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "type", "")) &&
                get(item, "type", "")
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "location", "")) &&
                get(item, "location", "")
                  .toLowerCase()
                  .includes(search.toLowerCase())) ||
              (!isNil(get(item, "id", "")) &&
                get(item, "id", "")
                  .toLowerCase()
                  .includes(search.toLowerCase()))
          )
        : data,
    [search, data]
  );

  return (
    <Table
      rowKey={"id"}
      columns={columns}
      rowClassName={(_, index) =>
        className({
          "table-row-dark": isEvenNumber(index),
          "table-row-light": !isEvenNumber(index)
        })
      }
      showSorterTooltip={false}
      dataSource={filteredData}
      locale={{
        emptyText: <Empty description="No parts found" />
      }}
    />
  );
};

const RenderTable = ({
  promotionsQuery,
  search,
  selectFilter,
  setSelectFilter
}) => {
  const { idle, data, loading, errors } = promotionsQuery;
  if (errors) return <Unknown />;
  if (idle || loading) return <Loading />;
  return <Filter {...{ data, search, selectFilter, setSelectFilter }} />;
};

const View = ({ promotionsQuery, selectFilter, setSelectFilter }) => {
  const [search, setSearch] = useState(null);
  const { data, loading, errors } = promotionsQuery;

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <Tooltip title="Export data as a csv file">
            <CSVLink
              data={data}
              headers={columns.map(({ title, key }) => ({
                label: title,
                key
              }))}
              filename={`adjustements-${selectFilter}`}
            >
              <Button className="create_button" disabled={loading || errors}>
                <ExportOutlined />
                Export
              </Button>
            </CSVLink>
          </Tooltip>
          <Divider />
          <Row justify="space-between">
            <Col span={8}>
              <Input
                size="large"
                placeholder="Search ..."
                onChange={(_) => setSearch(_.target.value)}
              />
            </Col>

            <Col>
              <Select
                size="large"
                suffixIcon={<AiFillFilter />}
                style={{ width: 200 }}
                placeholder="Filter"
                onSelect={(value) => {
                  setSelectFilter(value);
                }}
                value={selectFilter}
              >
                <Option value="all">All</Option>
                <Option value="risks">Risk</Option>
                <Option value="obs">Obsolete</Option>
                <Option value="negatives">Negative</Option>
                <Option value="stckMax">Maximum stock </Option>
              </Select>
            </Col>
          </Row>
          <Divider />
          <RenderTable
            {...{ promotionsQuery, search, selectFilter, setSelectFilter }}
          />
        </Col>
      </Row>
      <BackTop>
        <FaArrowAltCircleUp size={30} color={"#b60505"} />
      </BackTop>
    </div>
  );
};

export default memo(View);
