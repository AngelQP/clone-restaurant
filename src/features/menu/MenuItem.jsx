import { formatCurrency } from "../../utils/helpers.js";

export const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const isInCart = false;

  return (
    <div className="rounded-lg bg-white p-2 text-center shadow transition-all hover:shadow-lg">
      <img
        src={imageUrl}
        alt={name}
        className="mx-auto mb-2 w-24 rounded-full"
      />
      <div>
        <h3 className="font-medium">{name}</h3>

        {soldOut ? (
          <p className="text-gray-400">Sold Out!</p>
        ) : (
          <p className="text-orange-600">{formatCurrency(unitPrice)}</p>
        )}

        <p className="line-clamp-1 text-sm opacity-50">
          {ingredients?.join(", ")}
        </p>
      </div>

      {isInCart && (
        <div className="mt-2 flex items-center justify-center gap-2">
          <button className="rounded-lg bg-gray-50 px-3 pb-1 pt-0.5 text-xl text-gray-600 transition-all hover:bg-gray-100">
            -
          </button>
          <div className="mx-2">2</div>
          <button className="rounded-lg bg-orange-400 px-3 pb-1 pt-0.5 text-xl text-white transition-all hover:bg-orange-500">
            +
          </button>
        </div>
      )}

      {!soldOut && !isInCart && (
        <button className="mt-2 w-full rounded bg-gray-50 py-1 text-gray-600 transition-all hover:bg-gray-100">
          Add to Cart
        </button>
      )}
    </div>
  );
};
