import React, { FC } from "react";
import "./button.css";

export interface ButtonProps {
  color: string;
  isBig?: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, color, isBig, ...props }) => {
  const rootClasses = ["rh-button"];
  if (isBig) rootClasses.push("rh-button_big");
  return (
    <button className={rootClasses.join(" ")} style={{ color }} {...props}>
      {children}
    </button>
  );
};

export default Button;
