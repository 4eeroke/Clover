import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/Logo.svg";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.footerInner}>
                    <img src={logo} className={style.logoFooter} alt="" />
                    <div className={style.footerContent}>
                        <div className={style.logoDate}>2017-2023 CloverStore</div>
                        <div className={style.logoText}>
                            Все упомянутые товарные знаки, названия игр и компаний, логотипы, материалы являются собственностью соответствующих владельцев.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;