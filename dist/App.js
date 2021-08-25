import React, { useState } from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Transition from "./components/Transition/transition";
// init icon lib
library.add(fas);
function App() {
    var _a = useState(true), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("h4", null, "\u6D4B\u8BD5Menu"),
            React.createElement(Menu, { defaultOpenSubMenus: ["3"] },
                React.createElement(MenuItem, null, "2323"),
                React.createElement(MenuItem, { disabled: true }, "211323"),
                React.createElement(MenuItem, null, "wowowowo"),
                React.createElement(SubMenu, { title: "下拉菜单" },
                    React.createElement(MenuItem, null, "\u5B50\u83DC\u53551"),
                    React.createElement(MenuItem, null, "\u5B50\u83DC\u53552"),
                    React.createElement(MenuItem, null, "\u5B50\u83DC\u53553"),
                    React.createElement(MenuItem, null, "\u5B50\u83DC\u53554"))),
            React.createElement(Button, { btnType: "primary", size: "lg", onClick: function () { return setShow(!show); } }, "toggle button")),
        React.createElement(Transition, { in: show, animation: "zoom-in-left", timeout: 300 },
            React.createElement("div", null,
                React.createElement("div", null, "3212423423"),
                React.createElement("div", null, "3212423423"),
                React.createElement("div", null, "3212423423"),
                React.createElement("div", null, "3212423423"))),
        React.createElement(Transition, { in: show, animation: "zoom-in-left", timeout: 300, wrapper: true },
            React.createElement(Button, null, "23232"))));
}
export default App;
