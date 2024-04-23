import { Link, Outlet } from "react-router-dom";

export default function CartPage() {
  const cart_products = [1, 2, 3, 4];
  return (
    <div className="flex flex-col gap-2">
      {cart_products.map((cart_productID) => (
        <Link key={cart_productID} to={`/cart/${cart_productID}`}>
          Cart Product No. {cart_productID}
        </Link>
      ))}

      <Outlet />
    </div>
  );
}
