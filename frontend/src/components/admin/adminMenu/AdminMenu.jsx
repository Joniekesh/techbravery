import "./adminMenu.scss";
import { adminMenu } from "../../../mockData";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import AdminMenuItem from "../adminMenuItem/AdminMenuItem";
import ThemeSwitcher from "../../themeSwitcher/ThemeSwitcher";

const AdminMenu = () => {
  return (
    <div className="admin-menu">
      <div className="admin-menu-wrapper">
        {adminMenu.map((menu) => (
          <AdminMenuItem key={menu.id} menu={menu} />
        ))}
        {/* <div className="ad-theme-switcher">
          <ThemeSwitcher />
        </div> */}
      </div>
    </div>
  );
};

export default AdminMenu;
