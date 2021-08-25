import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
var MenuComponent = Menu;
MenuComponent.Item = MenuItem;
MenuComponent.SubMenu = SubMenu;
export default MenuComponent;
