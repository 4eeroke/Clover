import style from "./ItemPage.module.css";
import ItemIMG from "../../assets/images/SliderIMG.png";

import steam from "./../../assets/Social/steam.svg";
import origin from "./../../assets/Social/origin.svg";
import windows from "./../../assets/Social/windows.svg";
 
const ItemPage = () => {
    return (
        <div>
            <h1 className={style.title}>HOGWARTS LEGACY</h1>
            <div className={style.container}>
                <img className={style.img} src={ItemIMG} alt="" />
                <div className={style.all_info}>
                    <div className={style.textContent}>
                        <p className={style.gray}>Регион: <p className={style.white}>Россия</p></p>
                        <p className={style.gray}>Платформа: 
                        <img src={steam} alt="" />
                        <img src={origin} alt="" />
                        <img src={windows} alt="" />
                        </p>
                        <p className={style.gray}>Язык: <p className={style.white}>Русский (Интерфейс + Субтитры)</p></p>
                        <p className={style.gray}>Наличие: <p className={style.green}>Много</p></p>
                    </div>
                    
                    <div className={style.descriptionContent}>
                        <div className={style.description}>
                        Lorem ipsum dolor sit amet consectetur. 
                        Malesuada eu amet ultricies at orci. 
                        Nec lorem lacus morbi lorem at. 
                        Netus augue imperdiet sit sed. 
                        Blandit malesuada proin amet consectetur.
                        </div>
                        <div className={style.purple}>Подробнее</div>
                    </div>
                    
                    <div className={style.btns}>
                        <a href="#" className={btnBuy}>Купить</a>
                        <a href="#" className={btnCart}>Добавить в корзину</a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default ItemPage;