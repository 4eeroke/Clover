import style from "./Subscribe.module.css";

const Subscribe = () => {
    return (
        <div className={style.subscribe}>
            <p className={style.subscribeTitle}>Подписка на рассылку</p>
            <div className={style.inputs}>
                <input className={style.inputEmail} type="email" placeholder="Email"/>
                <input className={style.inputSubmit} type="submit" value="Отправить"/>
            </div>
        </div>
    )
}

export default Subscribe;