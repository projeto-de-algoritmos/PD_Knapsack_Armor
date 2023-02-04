import { useState } from "react";
import { armor } from "../utils/armor";
import { convertArmorNames } from "../utils/armorNamesConverter";

export function SelectArmor() {
  const [selectedItems, setSelectedItems] = useState({});

  const handleWithUserSelection = (key, item) => {
    if (selectedItems[key] == null) {
      setSelectedItems({ ...selectedItems, [key]: item });
    } else {
      if (JSON.stringify(selectedItems[key]) === JSON.stringify(item)) {
        delete selectedItems[key];
        setSelectedItems(selectedItems);
      } else {
        setSelectedItems({ ...selectedItems, [key]: item });
      }
    }
  };

  return Object.keys(armor.items).map((key, i) => {
    return (
      <div
        key={i}
        className="w-full max-w-3xl h-36 border border-white rounded-lg mt-8 ml-8 flex items-center justify-around p-2 relative"
      >
        <p className="absolute text-white -top-3 bg-[#283149] px-4 z-0">
          {convertArmorNames(key)}
        </p>
        {armor.items[key].map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor:
                  JSON.stringify(selectedItems[key]) === JSON.stringify(item)
                    ? "#404B69"
                    : "transparent",
              }}
              className={`w-48 h-fullhover:bg-[#404B69] hover:cursor-pointer flex flex-col items-center justify-center rounded-md z-10 transition-colors`}
              onClick={() => handleWithUserSelection(key, item)}
            >
              <section className="flex space-x-2 text-xs mb-1 text-white">
                <div className="px-3 bg-[#00818A] rounded-sm">
                  Peso: {item.weigth}
                </div>
                <div className="px-3 bg-[#DBEDF3] rounded-sm text-black">
                  Proteção: {item.protection}
                </div>
              </section>
              <img src={item.image} alt={item.name} className="w-[88px]" />
            </div>
          );
        })}
      </div>
    );
  });
}
