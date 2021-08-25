var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import Transition from "../Transition/transition";
import Icon from "../Icon/icon";
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children, disabled = _a.disabled;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpen = index && context.mode === "vertical"
        ? openedSubMenus.includes(index)
        : false;
    var _b = useState(isOpen), open = _b[0], setOpen = _b[1];
    var classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": open,
        "is-vertical": context.mode === "vertical",
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === "vertical"
        ? {
            onClick: handleClick,
        }
        : {};
    var mouseEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderChildren = function () {
        var classes = classNames("merzoo-submenu", {
            "menu-opened": open,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: index + "-" + i,
                });
            }
            else {
                console.error("Warning: Submenu has a child which is not MenuItem!");
            }
        });
        return (React.createElement(Transition, { in: open, animation: "zoom-in-top", timeout: 300 },
            React.createElement("ul", { className: classes }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, mouseEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { className: "arrow-icon", icon: "angle-down" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
