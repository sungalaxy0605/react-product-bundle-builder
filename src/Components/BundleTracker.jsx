import { useContext } from "react";
import { icons } from "lucide-react";
import Context from "../Context";

function BundleTracker() {
  const { bundle, isBundleBuilt, bundleTotal, discountTotal, bundleItemLimit } =
    useContext(Context);

  return (
    <section className="w-full lg:w-1/3 bundle-tracker">
      <div className="w-[280px] md:w-1/3 lg:w-1/4 xl:w-1/5 my-6 shadow rounded-md lg:fixed mx-auto">
        <div className="bg-teal-500 text-white text-center p-1 rounded-t-md">
          <div className="h-32 border border-white rounded-md p-3 flex flex-col justify-center align-center">
            <h2 className="uppercase text-xl">Build Your Pack</h2>
            <p className="mt-2">
              <span className="line-through bundle-total-price">
                ${(bundleTotal / 100).toFixed(2)}
              </span>
              <span className="ml-2">${(discountTotal / 100).toFixed(2)}</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-b-md ">
          <div className="flex flex-wrap justify-center items-center py-2 border-b">
            {Array(bundleItemLimit)
              .fill()
              .map((v, idx) => {
                if (bundle[idx]) {
                  const bundleProduct = bundle[idx];
                  const LucideIcon = icons[bundleProduct.icon];
                  return (
                    <div
                      key={`${bundleProduct.sku}-${idx}`}
                      className="flex justify-center align-center border border-gray-200 p-2 m-2 min-w-[48px] min-h-[48px]"
                    >
                      <LucideIcon size={24} strokeWidth={1.5} color="black" />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={idx}
                      className="border border-gray-200 p-2 m-2 min-w-[48px] min-h-[48px]"
                    ></div>
                  );
                }
              })}
          </div>
          <div className="p-3">
            <button
              className={`w-full h-8 text-white uppercase rounded cursor ${
                isBundleBuilt
                  ? "bg-orange-600 active:bg-gray-300 hover:bg-gray-400"
                  : "bg-gray-300"
              }`}
              disabled={!isBundleBuilt}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BundleTracker;
