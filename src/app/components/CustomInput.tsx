import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps;

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return <TextField fullWidth {...props} />;
};

export default CustomInput;
