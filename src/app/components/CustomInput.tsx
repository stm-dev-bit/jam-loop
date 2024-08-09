import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps & {
  isfullwidth?: boolean;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      fullWidth={props.isfullwidth ?? true}
      {...props}
    />
  );
};

export default CustomInput;
