import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps & {
  isFullWidth?: boolean;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      fullWidth={props.isFullWidth ?? true}
      {...props}
    />
  );
};

export default CustomInput;
