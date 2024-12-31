import React, { useState } from "react";
import Button from "../../components/button/Button";
import { login } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await login(values.email, values.password);
    navigate('/')
  };
  return (
    <div className="flex flex-col items-center gap-5 ">
      <input
        className="w-full max-w-72 h-11 p-5"
        onChange={handleChange}
        name="email"
        value={values.email}
        type="email"
        placeholder="ingresa tu email"
      />
      <input
        className="w-full max-w-72 h-11 p-5"
        onChange={handleChange}
        name="password"
        value={values.password}
        type="password"
        placeholder="ingresa tu password"
      />
      <Button onClick={handleLogin}>Ingresar</Button>
    </div>
  );
};

export default LoginPage;
