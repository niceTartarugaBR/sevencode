import { useState } from "react";
import style from "../header/header.module.css";
import LogoMenu from "../../assets/img/logo-menu.svg";
import IconBars from "../../assets/img/menu-togle.svg";
import IconClose from "../../assets/img/menu-closer.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "#carrosell-home" },
    { name: "sobre", link: "#novos-projetos" },
    { name: "linguagem", link: "/" },
    { name: "Documentação", link: "/" },
  ];
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div>
          <a className={style.LogoA} href="/">
            <img src={LogoMenu} alt="logo sevencode" />
          </a>
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? IconClose : IconBars}
            id={style.menuIcons}
            alt="icon Menu"
          />
        </button>
        <nav className={style.navMenu}>
          <ul className={style.ulWrapper}>
            {links.map((link, index) => (
              <li className={style.navLi} key={link.name}>
                <a href={link.link} className={style.linksMenuLi} key={index}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className={style.navLiButton}>
              <a className={style.loginButton} href="#">
                login
              </a>
            </li>
            <li className={style.navLiButton}>
              <a className={style.registerButton} href="#">
                Registo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;