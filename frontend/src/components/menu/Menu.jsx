import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Menu = ({ setOpenMenu }) => {
  return (
    <div className="menu">
      <div className="container" data-aos="fade-left">
        <span onClick={() => setOpenMenu((prev) => !prev)}>X</span>
        Menu Content
      </div>
    </div>
  );
};

export default Menu;
