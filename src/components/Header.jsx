import MenuItem from "./MainItem";
import "./Header.css";
import Avatar from "./Avatar";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <Icon icon="charm:menu-hamburger" className="mobile" />
        <MenuItem title={"All"} className="mobile" />
        <MenuItem title={"Images"} />
      </div>
      <Avatar />
    </div>
  );
}
