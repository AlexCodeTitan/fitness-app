import { FC, InputHTMLAttributes } from "react";
import { FormGroup } from "./FormInput.styles";

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      {label && <label>{label}</label>}
      <input {...otherProps} />
    </FormGroup>
  );
};

export default FormInput;
