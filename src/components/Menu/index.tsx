import { FC } from "react";

import Menu, { MenuProps } from "./menu";
import MenuItem, { ItemProps } from "./menuItem";
import SubMenu, { SubMenuProps } from "./subMenu";

export type InternalMenuProps = FC<MenuProps> & {
  Item: FC<ItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const MenuComponent = Menu as InternalMenuProps;

MenuComponent.Item = MenuItem;
MenuComponent.SubMenu = SubMenu;

export default MenuComponent;
