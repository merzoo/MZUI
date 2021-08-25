import classNames from "classnames";
import React from "react";
var Tabs = function (_a) {
    var _b;
    var defaultIndex = _a.defaultIndex, className = _a.className, style = _a.style, type = _a.type, children = _a.children, onSelect = _a.onSelect;
    var classes = classNames("merzoo-tabs", className, (_b = {},
        _b["tab-" + type] = type,
        _b));
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            return React.cloneElement(childElement, {
                index: index.toString(),
            });
        });
    };
    return (React.createElement("ul", { className: classes, style: style }, renderChildren));
};
export default Tabs;
