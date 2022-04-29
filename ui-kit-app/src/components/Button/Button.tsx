import React, { FC } from "react";

export interface ButtonProps {
  color: string;
  isBig: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, color, isBig, ...props }) => {
  return (
    <button style={{ color }} {...props}>
      {children}
    </button>
  );
};

export default Button;
