import { useEffect, useState } from "react";
import { GunsCounter } from "./components/GunsCounter";
import { guns } from "./utils/guns";
import { randomizeGunValue } from "./utils/randomizeGunValue";
import { SelectGun } from "./components/SelectGun";
import { countSelectedGunsValue } from "./utils/countSelectedGunsValue";
import { knapsack } from "./utils/knapsack";
import looserImage from "./assets/is_fortnite_dead.jpg";
import victory_royale from "./assets/victory_royale.jpg";

randomizeGunValue(guns);

const renderResultScreen = (bool) => {
  const victory_message =
    "Você selecionou os melhores itens para a missão e agora a humanidade pode descansar em paz. Parabéns!";
  const loose_message =
    "Infelizmente você não selecionou os melhores armamentos para a missão";
  return (
    <div className="w-full h-full bg-[#283149] absolute">
      <div className="flex h-full items-center justify-center flex-col text-white">
        <img
          src={bool ? victory_royale : looserImage}
          alt="Img"
          className="rounded-md max-w-4xl w-full"
        />
        <h2 className="mt-5 text-3xl max-w-3xl text-center">
          {bool ? victory_message : loose_message}
        </h2>
        <button
          className="p-3 text-3xl mt-2 bg-[#00818A] rounded-md"
          onClick={() => window.location.reload(false)}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

function App() {
  const [selectedGuns, setSelectedGuns] = useState({});
  const [maxWeightError, setMaxWeigthError] = useState(false);
  const [randomMaxWeight, setRandomMaxWeight] = useState();
  const [knapsackResult, setKnapsackResult] = useState();

  const handleWithRandomization = () => {
    let maxValue = 0;
    let minValue = 100;

    for (let i in guns) {
      if (guns[i].price < minValue) minValue = guns[i].price;

      maxValue += guns[i].price;
    }

    setRandomMaxWeight(
      Math.ceil(Math.random() * (maxValue / 1.5 - minValue) + minValue * 1.5)
    );
  };

  const handleResult = () => {
    let resultArray = [];

    for (let obj in selectedGuns) {
      resultArray.push(selectedGuns[obj]);
    }

    return (
      JSON.stringify(resultArray) === JSON.stringify(knapsackResult["subset"])
    );
  };

  useEffect(() => {
    handleWithRandomization();
  }, [knapsackResult]);

  useEffect(() => {
    if (countSelectedGunsValue(selectedGuns) > randomMaxWeight)
      setMaxWeigthError(true);
    else setMaxWeigthError(false);
  }, [randomMaxWeight, selectedGuns]);

  return (
    <div className="w-screen h-screen flex flex-col p-5 justify-center items-center">
      {knapsackResult && renderResultScreen(handleResult())}
      <p className="text-white text-2xl max-w-5xl ml-8 text-center">
        Você está em uma missão especial e precisa selecionar as armas que vão
        te dar o maior poder de fogo possível pelo máximo de dinheiro que
        possui, escolha cuidadosamente!
      </p>
      {maxWeightError && (
        <p className="text-red-500">Limite máximo ultrapassado!</p>
      )}
      <div className="flex p-10 border border-white m-5 space-x-11 rounded-md flex-wrap justify-center">
        <SelectGun
          selectedGuns={selectedGuns}
          setSelectedGuns={setSelectedGuns}
          setMaxWeigthError={setMaxWeigthError}
        />
      </div>
      <GunsCounter
        selectedGuns={selectedGuns}
        randomMaxWeight={randomMaxWeight}
      />
      <button
        onClick={() => setKnapsackResult(knapsack(guns, randomMaxWeight))}
        className="mt-4 bg-[#DBEDF3] border-none px-2 text-2xl rounded-sm hover:opacity-90 transition-opacity disabled:bg-slate-500"
        disabled={maxWeightError}
      >
        Enviar
      </button>
    </div>
  );
}

export default App;
