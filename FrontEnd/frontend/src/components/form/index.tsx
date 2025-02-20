import React, { useState } from "react";

import { Button } from "../button";
import { TextInput } from "../inputs/text-input";
import { formProps } from "./types";

// import { toast } from "react-toastify";

export const Form = (props: formProps) => {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);

  const { selectedCalculation } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const regex = /^(\d+(\.\d+)?)(,\s*\d+(\.\d+)?)*$/;
    // if (!regex.test(value)) {
    //   toast.error("Por favor, insira os números separados por vírgulas.");
    //   return;
    // }

    const newNumbers = value.split(",").map((val) => parseFloat(val.trim()));
    setNumbers(newNumbers);

    if (selectedCalculation === "media") {
      const media =
        newNumbers.length > 0
          ? newNumbers.reduce((sum, num) => sum + num, 0) / newNumbers.length
          : 0;
      setResult(media);
    }
  };

  const handleClear = () => {
    setResult(null);
    setValue("");
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-[40rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div>
          <span className="block text-2xl mb-2">
            Preencha os campos corretamente
          </span>
        </div>
        <div>
          <p className="text-gray-600 text-base">
            Preencha os campos abaixo com os valores necessários para calcular a{" "}
            {selectedCalculation}. Certifique-se de fornecer todos os números
            corretamente para obter o resultado.
          </p>
        </div>
        <div>
          <label className="block text-gray-700 text-lg mb-2">
            Insira os números (separados por virgula)
          </label>
          <TextInput
            value={value}
            placeholder="Digite aqui..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <span>
            Resultado da operação:{" "}
            {result !== null ? result : "Nenhum resultado"}
          </span>
        </div>

        <div className="flex gap-6">
          <Button
            type="submit"
            background={
              selectedCalculation === ""
                ? "bg-red-700"
                : selectedCalculation === "moda"
                ? "bg-blue-700 "
                : selectedCalculation === "media"
                ? "bg-green-700 "
                : "bg-purple-700 "
            }
          >
            Enviar
          </Button>
          <Button background="bg-red-700" onClick={handleClear}>
            Limpar
          </Button>
        </div>
      </div>
    </form>
  );
};
