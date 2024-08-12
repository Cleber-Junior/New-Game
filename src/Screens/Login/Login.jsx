import React from "react";
import "./Styles.css";
import Logo from "../../Img/icon_dark.png";

const Login = () => {
  return (
    <div className="screen">
      <div className="container">
        <div className="div_logo">
          <img className="img" src={Logo} alt="Logo New Game" />
          <h2>New Game</h2>
        </div>
        <div className="div_form">
          <form action="">
            <label htmlFor="">Email</label>
            <div className="inputs">
              <input type="text" size={"40"} name="email" id="email" />
            </div>
            <label htmlFor="">Senha</label>
            <div className="inputs">
              <input type="password" size={"40"} name="pass" id="pass" />
            </div>
          </form>
        </div>
        <div className="div_sign"></div>
      </div>
    </div>
  );
};

export default Login;
