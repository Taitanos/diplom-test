import React, {useEffect, useState} from "react";
import s from "./AccountMain.module.css";
import acc from "../../../assets/images/avatar.jpg"
import {useNavigate} from "react-router-dom";
import api from "../../../api";

const AccountMain = () => {

    const [user, setUser] = useState()
    const navigate = useNavigate()
    const handleChangePage = (str) => {
        navigate(str)
    }

    useEffect(() => {
        api.user.fetchAll().then((data) => setUser(data))
    }, [])

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
                            <div className={s.info_nickname}>{user && user.nickname}</div>
                            <div className={s.info_lastname}>{user && user.lastName}</div>
                            <div className={s.info_firstname}>{user && user.name}</div>
                            <div className={s.info_mail}>{user && user.mail}</div>
                            <div className={s.info_birthday}>{user && user.birthday}</div>
                            <div className={s.info_gender}>{user && user.sex}</div>
                            <div className={s.info_phone}>{user && user.phone}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountMain;