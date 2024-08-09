import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps & {
  isfullwidth?: boolean;
};

/**
 * CustomInput component for form fields, supports refs with React.forwardRef.
 */
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return (
      <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={props.isfullwidth ?? true}
        inputRef={ref}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
