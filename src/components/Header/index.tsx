import "../../styles/globalStyles.css";
import "./header.css";
import headerLogo from "../../assets/NuKenzie.svg";
import { tSetLogin } from "../../interfaces";

interface iHeaderProps {
  setLogin: tSetLogin;
}

const Header = ({ setLogin }: iHeaderProps) => {
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
