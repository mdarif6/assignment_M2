import "./Header.css";
import plug from "../asset/images/plugicon.svg";
export default function Header() {
  return (
    <div className="header-icons">
      <div className="burger-menu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="plug-logo">
        <img src={plug} alt="plug-logo" />
      </div>
    </div>
  );
}
