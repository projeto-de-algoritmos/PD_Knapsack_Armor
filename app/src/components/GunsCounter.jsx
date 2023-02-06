import { countSelectedGunsValue } from "../utils/countSelectedGunsValue";

export function GunsCounter({selectedGuns, randomMaxWeight}){
    return(
        <div className="flex ml-10 text-white space-x-6">
            <p className="text-xl bg-[#00818A] px-3 py-1 mt-5 rounded-md">Valor atual: {countSelectedGunsValue(selectedGuns)}</p>
            <p className="text-xl bg-red-500 px-3 py-1 mt-5 rounded-md">Valor máximo: {randomMaxWeight}</p>
        </div>
    )
}