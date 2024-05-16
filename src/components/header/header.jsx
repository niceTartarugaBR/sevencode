import style from "../header/header.module.css";
import LogoMenu from "../../assets/img/logo-menu.svg";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <a className={style.logo} href="/">
                    <buttom>
                        <img src={LogoMenu} alt="logo sevencode" />
                    </buttom>
                </a>
                <nav className={style.navWrapper}>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Linguagem</li>
                        <li>Documentação</li>
                        <li className={style.navLiButton}>
                            <a className={style.loginbutton} href="">
                                Login
                            </a>
                        </li>
                        <li className={style.navLiButton}>
                            <a className={style.registerbutton} href="">
                                Registro
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;