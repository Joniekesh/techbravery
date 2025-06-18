import { products } from "../../mockData";
import "./products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <h1>Our Utility Products</h1>
      <div className="products-list">
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            state={item}
            className="product"
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
