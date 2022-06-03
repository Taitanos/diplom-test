import React from "react";
import s from "./AccountLease.module.css";
import aparts from "../../../assets/images/aparts.jpg";
import {useNavigate} from "react-router-dom";


const AccountLease = () => {

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
                        <div className={s.account_header}>
                            <div className={s.account_rentapart}>
                                Аренда
                            </div>
                            <div className={s.account_passapart}>
                                Сдача
                            </div>
                        </div>
                        <div className={s.account_rent}>
                            <div className={s.search_apart}>
                                <div>
                                    <img className={s.search_icon} src={aparts} alt="Значок"/>
                                </div>
                                <div className={s.search_main}>
                                    <div className={s.search_title}>
                                        Арендатор: Emery Hall
                                    </div>
                                    <div className={s.search_description}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Рядом с железнодорожной станцией
                                        BTS Thong Lo sky 300 метров. Центр удобной жизни. Уютная однокомнатная квартира
                                        будет полностью оборудована.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountLease;