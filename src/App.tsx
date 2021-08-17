import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>测试Menu</h4>
        <Menu mode="vertical" defaultOpenSubMenus={["3"]}>
          <MenuItem>2323</MenuItem>
          <MenuItem disabled>211323</MenuItem>
          <MenuItem>wowowowo</MenuItem>
          <SubMenu title="下拉菜单">
            <MenuItem>子菜单1</MenuItem>
            <MenuItem>子菜单2</MenuItem>
            <MenuItem>子菜单3</MenuItem>
            <MenuItem>子菜单4</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
