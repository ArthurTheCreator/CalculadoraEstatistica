import { FaCalculator, FaChartBar, FaSortAmountDownAlt } from "react-icons/fa";

import { LeftSideProps } from "./types";
import { useState } from "react";

export const LeftSide = (props: LeftSideProps) => {
  const { onSelectCalculation } = props;
  const [selectedCard, setSelectedCard] = useState<string>("");

  const handleCardClick = (calculation: string) => {
    setSelectedCard(calculation);
    onSelectCalculation(calculation);
  };

  return (
    <div className="bg-primary w-1/2 h-screen flex flex-col justify-center items-center p-6 relative">
      <div className="flex flex-col gap-6 items-center justify-center text-center mb-12">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          Seja bem-vindo(a) ao Calculador de Moda, Média e Mediana
        </h1>
        <p className="text-white text-xl mb-8 drop-shadow-md">
          Selecione um cálculo no formulário à direita para começar.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div
          className={`flex flex-col items-center text-white text-lg font-semibold rounded-lg p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-36 ${
            selectedCard === "moda"
              ? "bg-blue-700 shadow-xl scale-90"
              : "bg-blue-600"
          }`}
          onClick={() => handleCardClick("moda")}
        >
          <FaCalculator className="text-4xl mb-2" />
          <span>Moda</span>
        </div>
        <div
          className={`flex flex-col items-center text-white text-lg font-semibold rounded-lg p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-36 ${
            selectedCard === "media"
              ? "bg-green-700 shadow-xl scale-90"
              : "bg-green-600"
          }`}
          onClick={() => handleCardClick("media")}
        >
          <FaChartBar className="text-4xl mb-2" />
          <span>Média</span>
        </div>
        <div
          className={`flex flex-col items-center text-white text-lg font-semibold rounded-lg p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-36 ${
            selectedCard === "mediana"
              ? "bg-purple-700 shadow-xl scale-90"
              : "bg-purple-600"
          }`}
          onClick={() => handleCardClick("mediana")}
        >
          <FaSortAmountDownAlt className="text-4xl mb-2" />
          <span>Mediana</span>
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-white text-center p-4 text-sm">
        <span>&copy; 2025 Todos os direitos reservados</span>
      </div>
    </div>
  );
};
