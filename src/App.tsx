import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Transition from "./components/Transition/transition";

// init icon lib
library.add(fas);

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h4>测试Menu</h4>

        <Menu defaultOpenSubMenus={["3"]}>
          <MenuItem>2323</MenuItem>
          <MenuItem disabled>211323</MenuItem>
          <MenuItem>wowowowo</MenuItem>
          <SubMenu title={"下拉菜单"}>
            <MenuItem>子菜单1</MenuItem>
            <MenuItem>子菜单2</MenuItem>
            <MenuItem>子菜单3</MenuItem>
            <MenuItem>子菜单4</MenuItem>
          </SubMenu>
        </Menu>
        <Button btnType="primary" size="lg" onClick={() => setShow(!show)}>
          toggle button
        </Button>
      </header>

      <Transition in={show} animation="zoom-in-left" timeout={300}>
        <div>
          <div>3212423423</div>
          <div>3212423423</div>
          <div>3212423423</div>
          <div>3212423423</div>
        </div>
      </Transition>
      <Transition in={show} animation="zoom-in-left" timeout={300} wrapper>
        <Button>23232</Button>
      </Transition>
    </div>
  );
}

export default App;
