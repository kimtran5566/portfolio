import Footer from "components/Footer/FooterRegisterLogin";
import HeaderLogin from "components/Header/HeaderLogin";
import Login from "components/Login/Login";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <HeaderLogin />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
