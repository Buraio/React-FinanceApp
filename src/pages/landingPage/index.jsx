import React from "react";
import LandingMain from "../../components/LandingMain";

function LandingPage({ setLogin }) {
  return (
    <main className="landingMain">
      <LandingMain setLogin={setLogin}></LandingMain>
    </main>
  );
}

export default LandingPage;
