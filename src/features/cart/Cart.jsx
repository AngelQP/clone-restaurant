import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const Cart = () => {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <button className="text-orange-600 font-medium">&larr; Back to menu</button>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}˜
      </ul>

      <div className="mt-6 space-x-2">
        <Link
          to="/order/new"
          className="rounded bg-orange-600 px-4 py-2 font-medium text-white"
        >
          Order pizzas
        </Link>

        <Link className="rounded bg-slate-100 px-4 py-2 font-medium text-slate-600">
          Clear cart
        </Link>
      </div>
    </div>
  );
};

export default Cart;
