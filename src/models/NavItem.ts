import { IconType } from "react-icons";

export interface NavItem {
    label: string;
    route: string;
    icon?: IconType;
    counter?: number;
}
