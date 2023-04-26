import React from "react";
import LandingMain from "../../components/LandingMain";

import "./media.css";

export interface IPageProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function LandingPage({ setLogin }: IPageProps) {
  return (
    <div className="landingCont">
      <main className="landingMain overflowY">
        <LandingMain setLogin={setLogin}></LandingMain>
      </main>
    </div>
  );
}

export default LandingPage;
