import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface ItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<ItemProps> = ({
  index,
  disabled,
  className,
  style,
  children,
}) => {
  const context = useContext(MenuContext);

  const classes = classNames("menu-item", classNames, {
    "is-disabled": disabled,
    "is-active": index === context.index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
