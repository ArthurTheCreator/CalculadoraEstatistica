import { ChangeEvent } from "react";

export type selectInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
