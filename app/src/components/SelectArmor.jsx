import { armor } from "../utils/armor";
import { convertArmorNames } from "../utils/armorNamesConverter";

export function SelectArmor() {
  return Object.keys(armor.items).map((key, i) => {
    return (
      <div
        key={i}
        className="w-full max-w-3xl h-36 border border-white rounded-lg mt-8 ml-8 flex items-center justify-around p-2 relative"
      >
        <p className="absolute text-white -top-3 bg-[#404258] px-4 z-0">{convertArmorNames(key)}</p>
        {armor.items[key].map((item, index) => {
            return(
                <div key={index} className="w-48 h-full hover:bg-[#383a4e] hover:cursor-pointer flex items-center justify-center rounded-md z-10">
                    <img src={item.image} alt={item.name} className="w-24"/>
                </div>
            )
        })}
      </div>
    );
  });
}
