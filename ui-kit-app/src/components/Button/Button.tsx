import React, { FC } from "react";
import "./button.css";

export interface ButtonProps {
  isBig?: boolean;
  variant?: string;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, isBig, variant, ...props }) => {
  const rootClasses = ["rh-button"];
  if (isBig) rootClasses.push("rh-button_big");
  if (variant) rootClasses.push(`rh-button_${variant}`);
  return (
    <button className={rootClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
