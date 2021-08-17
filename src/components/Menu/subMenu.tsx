import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { ItemProps } from "./menuItem";
import { CSSTransition } from "react-transition-group";
import Icon from "../Icon/icon";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
  disabled,
}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as string[];
  const isOpen =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [open, setOpen] = useState(isOpen);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": open,
    "is-vertical": context.mode === "vertical",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};

  const mouseEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const classes = classNames("merzoo-submenu", {
      "menu-opened": open,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<ItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error("Warning: Submenu has a child which is not MenuItem!");
      }
    });
    return (
      <CSSTransition
        in={open}
        classNames="zoom-in-top"
        timeout={300}
        appear
        unmountOnExit
      >
        <ul className={classes}>{childrenComponent}</ul>
      </CSSTransition>
    );
  };

  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon
          className="arrow-icon"
          icon="angle-down"
          theme="danger"
          size="1x"
        ></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
