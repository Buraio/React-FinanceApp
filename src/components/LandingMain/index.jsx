import React from "react";
import "../../styles/globalStyles.css";
import "./landingMain.css";

const LandingMain = ({ setLogin }) => {
  return (
    <>
      <div className="leftCont">
        <img src="../../src/assets/NuKenzieDark.svg" alt="" />
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
        <img src="../../src/assets/illustration.svg" alt="" />
      </div>
    </>
  );
};

export default LandingMain;
