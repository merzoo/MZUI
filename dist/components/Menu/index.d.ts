import { FC } from "react";
import { MenuProps } from "./menu";
import { ItemProps } from "./menuItem";
import { SubMenuProps } from "./subMenu";
export declare type InternalMenuProps = FC<MenuProps> & {
    Item: FC<ItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const MenuComponent: InternalMenuProps;
export default MenuComponent;
