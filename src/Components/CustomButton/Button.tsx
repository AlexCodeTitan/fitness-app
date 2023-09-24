import React from "react";
import { ButtonContainer } from "./Button.styles";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonProps {
  customType?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  customType,
  children,
  width,
  ...otherProps
}) => {
  return (
    <ButtonContainer {...otherProps} customType={customType} width={width}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
