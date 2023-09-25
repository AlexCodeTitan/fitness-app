import React from "react";
import { ButtonContainer } from "./Button.styles";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonProps {
  customType?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({
  customType,
  children,
  size,
  ...otherProps
}) => {
  return (
    <ButtonContainer {...otherProps} $customType={customType} size={size}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
