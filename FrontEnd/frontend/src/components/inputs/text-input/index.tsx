import { textInputProps } from "./types";

export const TextInput = (props: textInputProps) => {
  const { value, placeholder, onChange } = props;

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="rounded border-1 p-1 w-full"
    />
  );
};
