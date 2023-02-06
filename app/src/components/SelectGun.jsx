import { guns } from "../utils/guns";

export function SelectGun({
  setSelectedGuns,
  selectedGuns,
}) {
  const removeKey = (key, { [key]: _, ...rest }) => rest;

  function handleWithUserSelection(item) {
    if (selectedGuns[item.name]) {
      setSelectedGuns((prev) => removeKey(item.name, prev));
    } else {
      setSelectedGuns({ ...selectedGuns, [item.name]: item });
    }
  };

  return guns.map((item, index) => {
    return (
      <div
        className="w-56 py-6 rounded-md flex flex-col items-center justify-center text-white hover:bg-[#34405f] transition-colors cursor-pointer"
        style={{ backgroundColor: selectedGuns[item.name] && "#34405f" }}
        onClick={() => handleWithUserSelection(item)}
        key={index}
      >
        <p className="font-bold">{item.name}</p>
        <img className="w-32" src={item.image} alt={item.name} />
        <p className="px-2 py-1 bg-[#00818A] rounded-md mt-5">
          Preço: {item.price}
        </p>
        <p className="px-2 py-1 mt-5 bg-[#DBEDF3] text-black rounded-md">
          Poder: {item.fire_power}
        </p>
      </div>
    );
  });
}
