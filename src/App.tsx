import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>测试Menu</h4>
        <Menu mode="vertical">
          <MenuItem index={0}>2323</MenuItem>
          <MenuItem index={1}>wowowowo</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
