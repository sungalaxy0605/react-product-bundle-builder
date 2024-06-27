import Pack from "./Pack";

function Packs({ packData }) {
  return (
    <section className="w-full lg:w-2/3 pack-list">
      <div className="flex flex-wrap justify-center">
        {packData.map((pack) => (
          <Pack pack={pack} key={pack.packName} />
        ))}
      </div>
    </section>
  );
}

export default Packs;
