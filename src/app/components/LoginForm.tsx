"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Typography, Alert } from "@mui/material";
import CustomInput from "./CustomInput";
import { userMock } from "../mock/userMock";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const user = userMock.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      setError(null);
      console.log("Login successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <Typography component="h1" variant="h5" className="text-center">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <CustomInput
                margin="normal"
                required
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                {...field}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                className="w-full"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <CustomInput
                margin="normal"
                required
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...field}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                className="w-full"
              />
            )}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-3 mb-2 w-full"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
