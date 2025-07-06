import { useSelector } from "react-redux";
import "./adminHeader.scss";

const AdminHeader = () => {
  const { currentMenu } = useSelector((state) => state.utils);

  return (
    <div className="admin-header">
      <div className="admin-header-wrapper">
        <h2>{currentMenu?.name}</h2>
        <div className="ad-right-container">
          <span>Admin</span>
          <img src="/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
