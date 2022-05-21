import React from "react";
import s from "./apartment.module.css";
import aparts from "./images/aparts.jpg";

const Apartment = () => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <div className={s.header_main}>
                    <div className={s.header_main_title}>Главная</div>
                    <div className={s.header_main_title}>Поиск</div>
                    <div className={s.header_main_title}>Страны</div>
                    <div className={s.header_main_title}>Путешествия</div>
                </div>
                <div className={s.header_login}>Личный кабинет</div>
            </div>
            <div className={s.container}>
                <div className={s.apart}>
                    <div className={s.apart_info}>
                        <div className={s.apart_info_data}>
                            <div className={s.apart_info_person}>
                                Информация о арендодателе (рейтинг/имя)
                            </div>
                            <div className={s.apart_info_search}>
                                Инофрмация о поиске
                            </div>
                            <div className={s.apart_info_price}>
                                Информация о цене за время пребывания
                            </div>
                            <div className={s.apart_info_button}>
                                <button>Забронировать</button>
                            </div>
                        </div>
                        <div>
                            <img className={s.apart_info_image} src={aparts} alt="Значок"/>
                        </div>
                    </div>
                    <div className={s.apart_description}>
                        тут идет описание
                    </div>
                    <div className={s.apart_reviews}>
                        отзывы об апартамент
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartment;