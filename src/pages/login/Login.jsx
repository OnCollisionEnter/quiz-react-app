import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  return (
    <div className="mh-100vh">
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;
