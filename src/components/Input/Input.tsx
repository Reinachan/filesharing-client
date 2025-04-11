import style from "./Input.module.css";

import type { ChangeEvent } from "react";

interface BasicInput {
  type: "date" | "datetime-local" | "file";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  checked?: undefined;
  placeholder?: undefined;
}

interface CheckboxInput {
  type: "checkbox";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  checked?: boolean;
  placeholder?: undefined;
}

interface TextOrPasswordInput {
  type?: "text" | "password";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  checked?: undefined;
  placeholder?: string;
}

type InputProps = BasicInput | CheckboxInput | TextOrPasswordInput;

export default function Input({
  type = "text",
  id,
  disabled,
  required,
  value,
  checked,
  placeholder,
  onChange,
}: InputProps) {
  if (type === "checkbox") {
    return (
      <input
        type={type}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={style.input}
      />
    );
  }
  if (type === "text") {
    return (
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={style.input}
      />
    );
  }
  if (type === "password") {
    return (
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={style.input}
      />
    );
  }
  return (
    <input
      type={type}
      id={id}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
      className={style.input}
    />
  );
}
