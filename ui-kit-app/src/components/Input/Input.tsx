import React, { FC } from "react";
import "./input.css";

export interface InputProps {
  placeholder: string;
  label: string;
  color: string;
  isBig?: boolean;
}

const Input: FC<InputProps> = ({
  color,
  isBig,
  placeholder,
  label,
  ...props
}) => {
  const rootClasses = ["rh-input"];
  if (isBig) rootClasses.push("rh-input_big");
  return (
    <label>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        className={rootClasses.join(" ")}
        {...props}
      />
    </label>
  );
};

export default Input;
