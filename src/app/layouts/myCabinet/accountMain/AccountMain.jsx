import React from "react";
import s from "./AccountMain.module.css";
import acc from "../../../assets/images/avatar.jpg"
import {useNavigate} from "react-router-dom";

const AccountMain = () => {

    const navigate = useNavigate()
    const handleChangePage = (str) => {
        navigate(str)
    }

    return (
        <div>
            <div className={s.account_main}>
                <div className={s.container}>
                    <div className={s.account_bar}>
                        <div className={s.bar_main} onClick={() => handleChangePage("/login")} role={"button"}>Данные</div>
                        <div className={s.bar_lease} onClick={() => handleChangePage("/login/arenda")} role={"button"}>Аренда/Сдача</div>
                        <div className={s.bar_trip} onClick={() => handleChangePage("/login/trip")} role={"button"}>Путешествия</div>
                        <div className={s.bar_security} onClick={() => handleChangePage("/login/security")} role={"button"}>Безопасность</div>
                    </div>
                    <div className={s.account_data}>
                        <div className={s.account_logo}>
                            <img className={s.account_avatar} src={acc} alt="Аватар"/>
                            <div className={s.account_rating}>
                                <div>Рейтинг: 5.0</div>
                                <div>Бонусы: 1250</div>
                            </div>
                        </div>
                        <div className={s.account_information}>
                            <div className={s.info_nickname}>Nickname</div>
                            <div className={s.info_lastname}>Фамилия</div>
                            <div className={s.info_firstname}>Имя</div>
                            <div className={s.info_mail}>Почта</div>
                            <div className={s.info_birthday}>Дата рождения</div>
                            <div className={s.info_gender}>Пол</div>
                            <div className={s.info_phone}>Телефон</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountMain;