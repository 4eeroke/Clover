import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../assets/Logo.svg";
import arrowIcon from "../assets/icons/Arrow.svg";
import closeIcon from "../assets/icons/Close.svg";
import cartIcon from "../assets/icons/Cart.svg";
import searchIcon from "../assets/icons/search.svg";

const Header = () => {
    return (
        <header>
            <div className={style.HeaderUp}>

                <NavLink to={"/"}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </NavLink>
                <nav className={style.navUp}>
                    <NavLink className={style.NavLink} to={"#"}>Отзывы</NavLink>
                    <NavLink className={style.NavLink} to={"#"}>Гарантии</NavLink>
                    <NavLink className={style.NavLink} to={"#"}>Поддержка</NavLink>
                </nav>
                <div>
                    <NavLink className={style.btnHeader} to={"auth"}>Войти</NavLink>
                </div>

            </div>

            <div className={style.HeaderDown}>
                <nav className={style.navUp}>
                    <NavLink className={style.NavLinkCatalogue} to={"#"}>Каталог<img src={arrowIcon} alt="" /></NavLink>
                    <NavLink className={style.NavLink} to={"#"}>Скидки</NavLink>
                    <NavLink className={style.NavLinkPurple} to={"#"}>Бесплатно</NavLink>
                    <NavLink className={style.NavLink} to={"#"}>Пополнить Steam</NavLink>
                </nav>
                <input className={style.HeaderSearch} type="text" placeholder="Поиск"/>
                <img src={cartIcon} alt="" />
            </div>
            
        </header>
    )
}

export default Header;
