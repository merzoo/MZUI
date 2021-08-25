import React from "react";
declare type TabType = "line" | "card";
interface TabsProps {
    defaultIndex: string;
    className?: string;
    style?: React.CSSProperties;
    type?: TabType;
    children: React.ReactNode;
    onSelect: (index: string) => void;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
