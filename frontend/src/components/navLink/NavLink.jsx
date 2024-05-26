import "./navLink.scss";
import { Link, useLocation } from "react-router-dom";
import { combinedData } from "../../utils/menuData";

const NavLink = ({ link, index }) => {
  const location = useLocation();

  const active = location.pathname;

  return (
    <div className="navLink">
      <Link
        to={link.url}
        className={link.url === active ? "link active" : "link"}
      >
        {link.name}
      </Link>

      <div className="lists">
        <div className="listsContainer">
          {combinedData[index]?.type !== "technology" ? (
            combinedData[index]?.data.map((item) => (
              <Link to={combinedData[index]?.url} className="listItem">
                {item.name}
              </Link>
            ))
          ) : (
            <div className="dropdownList">
              {combinedData[index]?.data.map((technology) => (
                <div className="dropdownListItem">
                  <span key={technology.id} className="name">
                    {technology.name}
                  </span>
                  <>
                    {technology.data.map((item) => (
                      <span className="title" key={item.id}>
                        <Link to={item?.url}>{item.name}</Link>
                      </span>
                    ))}
                  </>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavLink;
