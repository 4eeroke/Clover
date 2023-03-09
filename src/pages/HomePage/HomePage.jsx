import Item from "./../../components/Item/Item";
import sliderIMG from "./../../assets/images/SliderIMG.png";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
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
