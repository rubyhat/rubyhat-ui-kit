import React, { FC } from "react";
import "./input.css";

export interface InputProps {
  placeholder?: string;
  label: string;
  variant?: string;
  isBig?: boolean;
}

const Input: FC<InputProps> = ({
  isBig,
  placeholder,
  label,
  variant,
  ...props
}) => {
  const rootClasses = ["rh-input"];
  if (isBig) rootClasses.push("rh-input_big");
  if (variant) rootClasses.push(`rh-input_${variant}`);
  return (
    <label className="rh-input-label">
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
