import Product from "./Product";

function Pack({ pack }) {
  return (
    <div className="pt-6 w-5/6 xl:w-[800px]">
      <h3 className="text-center text-3xl uppercase my-6">{pack.packName}</h3>
      <div className="flex flex-wrap justify-center">
        {pack.packItems.map((product) => (
          <Product product={product} key={product.sku} />
        ))}
      </div>
    </div>
  );
}

export default Pack;
