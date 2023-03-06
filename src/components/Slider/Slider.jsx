import { NavLink } from "react-router-dom";
import style from "./Slider.module.css";
import sliderIMG from "./../../assets/images/SliderIMG.png"

const Slider = () => {
    return (
        <div className={style.slider}>
            <div className={style.sliderWrapper}>
                <img src={sliderIMG} className={style.sliderIMG} alt="" />
                <div className={style.dots}>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                </div>
            </div>
            
        </div>
    )
}

export default Slider;