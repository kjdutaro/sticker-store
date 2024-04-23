import { Link } from "react-router-dom";

export default function CartPage() {
  const products = [1, 2, 3, 4];
  return (
    <div>
      {products.map((product) => (
        <Link key={product} to={`/carts/${product}`}>
          Product No. {product}
        </Link>
      ))}
    </div>
  );
}
