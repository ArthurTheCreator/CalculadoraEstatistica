import { selectInputProps } from "./types";

export const SelectInput = (props: selectInputProps) => {
  const { value, onChange } = props;

  return (
    <select
      name="calculo"
      id="calculo"
      className="rounded border-1 p-1 w-full"
      value={value}
      onChange={onChange}
    >
      <option value="moda">Moda</option>
      <option value="media">Média</option>
      <option value="mediana">Mediana</option>
    </select>
  );
};
