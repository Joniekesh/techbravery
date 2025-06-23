import { products } from "../../mockData";
import "./products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <h1>Our Utility Apps</h1>
      <div className="products-list">
        {products.map((item, index) => (
          <Link
            to={`/product/${item.id}`}
            state={item}
            className={index % 2 !== 0 ? "product orange" : "product"}
            key={item.id}
          >
            <span className="product-name">{item.name}</span>
            <img src={item.img} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
