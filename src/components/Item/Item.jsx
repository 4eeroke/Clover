import { NavLink } from "react-router-dom";
import style from "./Item.module.css";
import sliderIMG from "./../../assets/images/SliderIMG.png";

import steam from "./../../assets/Social/steam.svg";
import origin from "./../../assets/Social/origin.svg";
import windows from "./../../assets/Social/windows.svg";

const Item = () => {
    return (
        <NavLink className={style.wrapperItem}>
            <img src={sliderIMG} alt="" />
            <div className={style.itemText}></div>
            <p className={style.itemTitle}>HOGWARTS LEGACY</p>
            <p className={style.itemTags}>Экшен, Приключение</p>
            <div className={style.itemSocials}>
                <img src={steam} className={style.itemSocial} alt="" />
                <img src={origin} className={style.itemSocial} alt="" />
                <img src={windows} className={style.itemSocial} alt="" />
            </div>
            <p className={style.itemPrice}>2799₽</p>
        </NavLink>
    )
}

export default Item;