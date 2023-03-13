import Item from "./../../components/Item/Item";

import style from "./HomePage.module.css";
import Slider from "./../../components/Slider/Slider.jsx";

const HomePage = () => {
  return (
    <div className="container">
        <Slider />
      <div className={style.items}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className={style.subscribe}>
            <p className={style.subscribeTitle}>Подписка на рассылку</p>
            <div className={style.subscribeInputs}>
                <input className={style.subscribe_inputEmail} type="email" placeholder="Email"/>
                <input className={style.subscribe_inputSubmit} type="submit" value="Отправить"/>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
