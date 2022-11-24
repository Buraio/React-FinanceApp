import "../../styles/globalStyles.css";
import "./header.css";
import headerLogo from "../../assets/NuKenzie.svg";

const Header = ({ setLogin }) => {
  return (
    <header className="homeHeader">
      <div>
        <img id="logoImg" src={headerLogo} alt="" />
        <button
          id="goToLandingPage"
          className="smallBtn btnHover"
          onClick={() => {
            setLogin(false);
          }}
        >
          Inicio
        </button>
      </div>
    </header>
  );
};

export default Header;
