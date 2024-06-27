import { useState, useEffect } from "react";
import "./App.css";

import Context from "./Context.jsx";
import packData from "./packData";
import Packs from "./Components/Packs";
import BundleTracker from "./Components/BundleTracker";

const bundleItemLimit = 3;

function App() {
  const [isBundleBuilt, setIsBundleBuilt] = useState(false);
  const [bundle, setBundle] = useState([]);
  const [bundleTotal, setBundleTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);

  const addToBundle = (product) => (e) => {
    if (bundle.length == bundleItemLimit) return;
    setBundle((prev) => [...prev, product]);
  };

  const removeFromBundle = (product) => (e) => {
    if (bundle.length === 0) return;
    const idx = bundle.findIndex(
      (bundleProduct) => bundleProduct.sku == product.sku
    );
    if (idx === -1) return;
    setBundle((prevBundle) => {
      const newBundle = [...prevBundle];
      newBundle.splice(idx, 1);
      return newBundle;
    });
  };

  const countInBundle = (product) => {
    return bundle?.filter((item) => item.sku === product.sku).length || 0;
  };

  useEffect(() => {
    const total = bundle.reduce(
      (currentTotal, bundleProduct) => currentTotal + bundleProduct.price,
      0
    );
    setBundleTotal(total);
    setIsBundleBuilt(bundle.length == bundleItemLimit ? true : false);

    if (bundle?.length > 0) {
      setDiscountTotal(total - 500);
    } else {
      setDiscountTotal(0);
    }
  }, [bundle]);

  return (
    <Context.Provider
      value={{
        addToBundle,
        removeFromBundle,
        countInBundle,
        bundleItemLimit,
        bundle,
        isBundleBuilt,
        bundleTotal,
        discountTotal,
      }}
    >
      <main className="min-w-[360px] min-h-screen bg-gray-100">
        <div className="flex flex-wrap">
          <Packs packData={packData} />
          <BundleTracker />
        </div>
      </main>
    </Context.Provider>
  );
}

export default App;
