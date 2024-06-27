import { useContext, memo } from "react";
import { icons } from "lucide-react";
import Context from "../Context";

function Product({ product }) {
  const { addToBundle, removeFromBundle, countInBundle, isBundleBuilt } =
    useContext(Context);
  const LucideIcon = icons[product.icon];

  return (
    <div
      className={`product ${
        product.featured
          ? "w-full xl:w-1/2"
          : "max-[480px]:w-full w-1/2 xl:w-1/4"
      }`}
    >
      <div className="m-3 p-4 text-center bg-white opacity-75 hover:opacity-100 shadow">
        <h5>{product.name}</h5>
        <LucideIcon
          size={96}
          strokeWidth={0.5}
          color="gray"
          className="mx-auto mt-1"
        />
        <span className="mt-1">${(product.price / 100).toFixed(2)}</span>
        <div className="flex justify-center items-center">
          <button
            className="remove-product bg-gray-100 w-8 h-8 rounded-full font-bold flex justify-center items-center hover:bg-gray-300"
            onClick={removeFromBundle(product)}
          >
            <icons.Minus size={12} strokeWidth={2.5} />
          </button>
          <span
            className={`flex justify-center items-center m-2 w-12 h-12 rounded-full ${
              countInBundle(product) > 0
                ? "bg-orange-300"
                : isBundleBuilt
                ? "bg-gray-300"
                : "bg-teal-300"
            } count-in-bundle`}
          >
            {countInBundle(product)}
          </span>
          <button
            className="add-product bg-gray-100 w-8 h-8 rounded-full font-bold flex justify-center items-center hover:bg-gray-300"
            onClick={addToBundle(product)}
          >
            <icons.Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Product);
