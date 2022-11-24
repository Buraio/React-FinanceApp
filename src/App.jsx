import { useState } from "react";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

function App() {
  const [isLogged, setLogin] = useState(false);

  return (
    <div className="App">
      {isLogged ? (
        <HomePage setLogin={setLogin}></HomePage>
      ) : (
        <LandingPage setLogin={setLogin}></LandingPage>
      )}
    </div>
  );
}

export default App;
