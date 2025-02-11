import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-green-500">${product.price}</p>
      <Link to={`/product/${product._id}`} className="text-blue-500">View</Link>
    </div>
  );
};

export default ProductCard;
