import React from "react";
import { Divider, Layout, Menu } from "antd";
import { MdDashboard } from "react-icons/md";
import { HiAdjustments } from "react-icons/hi";
import { FaRecycle, FaTrashRestore } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { useHistory, useLocation } from "react-router";
import get from "lodash/get";

import { PATHS } from "../../utils/constants";
import "./styles.css";
const { Sider } = Layout;

const SELECTED_KEY = {
  [PATHS.HOME]: {
    key: [PATHS.HOME]
  },
  [PATHS.SCRAP.LIST]: {
    key: [PATHS.SCRAP.LIST]
  },
  [PATHS.ADJUSTEMENT.LIST]: {
    key: [PATHS.ADJUSTEMENT.LIST]
  },
  [PATHS.CYCLE_COUNT.LIST]: {
    key: [PATHS.CYCLE_COUNT.LIST]
  }
};

const SubscriberSider = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const selectedKey = get(SELECTED_KEY[pathname], "key") || [];
  const selectedStyle = { background: "rgb(0, 65, 70)", color: "white" };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#fafafa"
      }}
    >
      <Menu
        style={{
          background: "#fafafa"
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKey}
      >
        <Menu.Divider style={{ background: "#f2f2f2" }} />
        <Menu.Item
          key={PATHS.HOME}
          icon={<MdDashboard size={20} color="rgb(64 79 86)" />}
          onClick={() => push(PATHS.HOME)}
          style={PATHS.HOME === selectedKey ? selectedStyle : null}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key={PATHS.SCRAP.LIST}
          icon={<FaTrashRestore size={20} color="rgb(64 79 86)" />}
          onClick={() => push(PATHS.SCRAP.LIST)}
          style={PATHS.SCRAP.LIST === selectedKey ? selectedStyle : null}
        >
          SCRAP
        </Menu.Item>
        <Menu.Item
          key={PATHS.ADJUSTEMENT.LIST}
          icon={<HiAdjustments size={20} color="rgb(64 79 86)" />}
          onClick={() => push(PATHS.ADJUSTEMENT.LIST)}
          style={PATHS.ADJUSTEMENT.LIST === selectedKey ? selectedStyle : null}
        >
          Adjustement
        </Menu.Item>
        <Menu.Item
          key={PATHS.CYCLE_COUNT.LIST}
          icon={<FaRecycle size={20} color="rgb(64 79 86)" />}
          onClick={() => push(PATHS.CYCLE_COUNT.LIST)}
          style={PATHS.CYCLE_COUNT.LIST === selectedKey ? selectedStyle : null}
        >
          Cycle count
        </Menu.Item>
        <Menu.Divider style={{ background: "#f2f2f2" }} />
        <Menu.Item
          key={"1"}
          icon={<HiDocument size={20} color="rgb(64 79 86)" />}
          // onClick={() => push(PATHS.CYCLE_MOUNT.LIST)}
          /*  style={
              PATHS.CYCLE_MOUNT.LIST === selectedKey ? selectedStyle : null
            } */
        >
          Documents
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SubscriberSider;
