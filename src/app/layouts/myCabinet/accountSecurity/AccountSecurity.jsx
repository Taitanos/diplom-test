import React from "react";
import s from "./AccountSecurity.module.css";
import acc from "../../../assets/images/avatar.jpg"
import {useNavigate} from "react-router-dom";

const AccountSecurity = () => {

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
                            <div>Новый пароль</div>
                            <div className={s.security_newpass}>Введите пароль</div>
                            <div>Подтверждение</div>
                            <div className={s.security_comfpass}>Введите пароль</div>
                            <div>Старый пароль</div>
                            <div className={s.security_oldpass}>Введите пароль</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountSecurity;