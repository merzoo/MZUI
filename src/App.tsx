import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Primary} autoFocus>
          Hello
        </Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello Danger</Button>
        <Button
          btnType={ButtonType.Link}
          target="_blank"
          href="//www.baidu.com"
        >
          Hello Link
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>
          Hello Link
        </Button>
      </header>
    </div>
  );
}

export default App;
