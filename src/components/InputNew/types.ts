import { ChangeEvent } from "react";

export interface InputProps {
  name: string,
  placeholder: string,
  type?: string,
  label?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  error?: string
}