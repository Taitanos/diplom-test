import React from "react";
import s from "./AccountTrip.module.css";
import {useNavigate} from "react-router-dom";

const AccountTrip = () => {

    const navigate = useNavigate()
    const handleChangePage = (str) => {
        navigate(str)
    }

    return (
        <div className={s.account_main}>
            <div className={s.container}>
                <div className={s.account_bar}>
                    <div className={s.bar_main} onClick={() => handleChangePage("/login")} role={"button"}>Данные</div>
                    <div className={s.bar_lease} onClick={() => handleChangePage("/login/arenda")}
                         role={"button"}>Аренда/Сдача
                    </div>
                    <div className={s.bar_trip} onClick={() => handleChangePage("/login/trip")}
                         role={"button"}>Путешествия
                    </div>
                    <div className={s.bar_security} onClick={() => handleChangePage("/login/security")}
                         role={"button"}>Безопасность
                    </div>
                </div>
                <div className={s.account_data}>
                    <div className={s.trips}>
                        <div className={s.story}>
                            <div className={s.story_header}>
                                <div className={s.story_author}>
                                    Тукарев Николай
                                </div>
                                <div className={s.story_rating}>
                                    Рейтинг 4.5*
                                </div>
                            </div>
                            <div className={s.story_title}>
                                Тропический парк Нонг Нуч
                            </div>
                            <div className={s.story_description}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Тропический парк Нонг Нуч - это почти
                                245 га
                                ботанических садов и различных местных достопримечательностей, расположенных недалеко от
                                курортного города Паттайя в Таиланде. Начало парка было положено в 1954 году, когда Нонг
                                Нуч
                                Тансача купила этот участок земли для посадки фруктовой плантации. Но после посещения
                                Европы
                                и любования зарубежными садами, она приняла решение превратить это место в тропический
                                сад с
                                декоративными растениями. Парк был открыт для посетителей в 1980 году и носит имя его
                                владелицы. Вся территория сада отлично спланирована, по ней проходят пешеходные дорожки,
                                которые позволяют увидеть все уголки сада, расставлены скамейки, предусмотрены места для
                                отдыха. По парку можно прогуляться пешком, прокатиться на велосипедах, взятых в прокат,
                                или
                                на открытых мини-автобусах. Вся коллекция растений, собранных в этом парке и
                                многообразие
                                ландшафтного дизайна просто поражают. Читать дальше....
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountTrip;