import React from "react";
import s from "./search.module.css";
import aparts from "./images/aparts.jpg";

function handler(e) {
    alert(e.target.value);
}

const Search = () => {
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
                <form id={"submit"}>
                    <div className={s.search}>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input type="number"/>
                        </div>
                        <div>
                            <button>Поиск</button>
                        </div>
                    </div>
                </form>
                <div className={s.search_aparts}>
                    <div className={s.search_apart}>
                        <div>
                            <img className={s.search_icon} src={aparts} alt="Значок"/>
                        </div>
                        <div className={s.search_main}>
                            <div className={s.search_title}>
                                Арендатор: Emery Hall
                            </div>
                            <div className={s.search_description}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Рядом с железнодорожной станцией BTS Thong Lo sky 300 метров. Центр удобной жизни. Уютная однокомнатная квартира будет полностью оборудована.
                            </div>
                        </div>
                    </div>
                    <div className={s.search_apart}>
                        <div>
                            <img className={s.search_icon} src={aparts} alt="Значок"/>
                        </div>
                        <div className={s.search_main}>
                            <div className={s.search_title}>
                                Арендатор: Joan Slash
                            </div>
                            <div className={s.search_description}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Компактная квартира до 3 в историческом центре Пальмы. Полностью отремонтирован в 2020 году. Полный мелких деталей, предназначенных для комфорта. Идеально подходит для долгосрочной и краткосрочной аренды.
                            </div>
                        </div>
                    </div>
                    <div className={s.search_apart}>
                        <div>
                            <img className={s.search_icon} src={aparts} alt="Значок"/>
                        </div>
                        <div className={s.search_main}>
                            <div className={s.search_title}>
                                Арендатор: Nathanael Barnes
                            </div>
                            <div className={s.search_description}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наслаждайтесь легким доступом к такси, всего в 3 минутах ходьбы находится станция Pak Nam Skytrain, откуда можно добраться до самых популярных направлений.
                            </div>
                        </div>
                    </div>
                    <div className={s.search_apart}>
                        <div>
                            <img className={s.search_icon} src={aparts} alt="Значок"/>
                        </div>
                        <div className={s.search_main}>
                            <div className={s.search_title}>
                                Арендатор: Nathanael Barnes
                            </div>
                            <div className={s.search_description}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наслаждайтесь легким доступом к такси, всего в 3 минутах ходьбы находится станция Pak Nam Skytrain, откуда можно добраться до самых популярных направлений.
                            </div>
                        </div>
                    </div>
                    <div className={s.pages}>Страницы 1 2 3 .... n </div>
                </div>
            </div>
        </div>
    )
}

export default Search;