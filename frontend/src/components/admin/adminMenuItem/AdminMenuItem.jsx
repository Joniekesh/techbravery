import "./adminMenuItem.scss";
import { Link, useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMenu } from "../../../redux/reducers/UtilsReducer";

const AdminMenuItem = ({ menu }) => {
  const { currentMenu } = useSelector((state) => state.utils);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (menu) => {
    dispatch(setCurrentMenu(menu));
    navigate(menu.url);
  };

  return (
    <div
      onClick={() => handleNavigate(menu)}
      className={
        currentMenu.id === menu.id
          ? "admin-menu-item admin-menu-active"
          : "admin-menu-item"
      }
    >
      <FiMapPin className="menu-icon" />
      <span className="menu-name">{menu.name}</span>
    </div>
  );
};

export default AdminMenuItem;
