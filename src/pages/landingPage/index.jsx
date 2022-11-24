import React from "react";
import LandingMain from "../../components/LandingMain";

import "./media.css";

function LandingPage({ setLogin }) {
  return (
    <div className="landingCont">
      <main className="landingMain overflowY">
        <LandingMain setLogin={setLogin}></LandingMain>
      </main>
    </div>
  );
}

export default LandingPage;
