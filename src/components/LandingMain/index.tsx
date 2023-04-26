import React, { StaticLifecycle } from "react";
import "../../styles/globalStyles.css";
import "./landingMain.css";
import landingLogo from "../../assets/NuKenzieDark.svg";
import landingImg from "../../assets/illustration.svg";
import { tSetLogin } from "../../interfaces";

export interface ILandingMainProps {
  setLogin: tSetLogin;
}

const LandingMain = ({ setLogin }: ILandingMainProps) => {
  return (
    <>
      <div className="leftCont">
        <img src={landingLogo} alt="" />
        <h1 className="mainTitle">Centralize o controle das suas finanças</h1>
        <p>De forma rápida e segura</p>
        <button
          className="goToHome bigBtn"
          onClick={() => {
            setLogin(true);
          }}
        >
          Iniciar
        </button>
      </div>
      <div className="rightCont">
        <img src={landingImg} alt="" />
      </div>
    </>
  );
};

export default LandingMain;
