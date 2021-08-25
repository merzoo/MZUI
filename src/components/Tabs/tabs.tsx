import classNames from "classnames";
import React from "react";

type TabType = "line" | "card";

interface TabsProps {
  defaultIndex: string;
  className?: string;
  style?: React.CSSProperties;
  type?: TabType;
  children: React.ReactNode;
  onSelect: (index: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  defaultIndex,
  className,
  style,
  type,
  children,
  onSelect,
}) => {
  const classes = classNames("merzoo-tabs", className, {
    [`tab-${type}`]: type,
  });

  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<{
        index?: string;
      }>;
      return React.cloneElement(childElement, {
        index: index.toString(),
      });
    });

  return (
    <ul className={classes} style={style}>
      {renderChildren}
    </ul>
  );
};

export default Tabs;
