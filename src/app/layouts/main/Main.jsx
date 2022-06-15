import React from "react";
import s from "./Main.module.css";
import Cyprus from "../../assets/img/Cyprus.jpg";
import France from "../../assets/img/France.jpg";
import Spain from "../../assets/img/Spain.jpg";
import Thailand from "../../assets/img/Thailand.jpg";

const Main = () => {

    function handler(e) {
        alert(e.target.value);
    }

    return (
        <>
            <div className={s.container}>
                <form id={"submit"}>
                    <div className={s.search}>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Страна посещения"}/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Количество людей"}/>
                        </div>
                        <div>
                            <button>Поиск</button>
                        </div>
                        <div>
                            <button>Сброс</button>
                        </div>
                    </div>
                </form>
                <div className={s.countries}>
                    <div className={s.country}>
                        <div className={s.country_h3}>
                            <h3>Тайланд</h3>
                        </div>
                        <div>
                            <img className={s.country_icon} src={Thailand} alt={"Thailand"}/>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div className={s.country_h3}>
                            <h3>Испания</h3>
                        </div>
                        <div>
                            <img className={s.country_icon} src={Spain} alt={"Spain"}/>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div className={s.country_h3}>
                            <h3>Франция</h3>
                        </div>
                        <div>
                            <img className={s.country_icon} src={France} alt={"France"}/>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div className={s.country_h3}>
                            <h3>Кипр</h3>
                        </div>
                        <div>
                            <img className={s.country_icon} src={Cyprus} alt={"Cyprus"}/>
                        </div>
                    </div>
                </div>
                <div className={s.trips}>
                    <div className={s.story}>
                        <div className={s.story_header}>
                            <div className={s.story_author}>
                                Griffin Morgan
                            </div>
                            <div className={s.story_rating}>
                                Рейтинг 4.7*
                            </div>
                        </div>
                        <div className={s.story_title}>
                            Тропический парк Нонг Нуч
                        </div>
                        <div className={s.story_description}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Тропический парк Нонг Нуч - это почти 245 га
                            ботанических садов и различных местных достопримечательностей, расположенных недалеко от
                            курортного города Паттайя в Таиланде. Начало парка было положено в 1954 году, когда Нонг Нуч
                            Тансача купила этот участок земли для посадки фруктовой плантации. Но после посещения Европы
                            и любования зарубежными садами, она приняла решение превратить это место в тропический сад с
                            декоративными растениями. Парк был открыт для посетителей в 1980 году и носит имя его
                            владелицы. Вся территория сада отлично спланирована, по ней проходят пешеходные дорожки,
                            которые позволяют увидеть все уголки сада, расставлены скамейки, предусмотрены места для
                            отдыха. По парку можно прогуляться пешком, прокатиться на велосипедах, взятых в прокат, или
                            на открытых мини-автобусах. Вся коллекция растений, собранных в этом парке и многообразие
                            ландшафтного дизайна просто поражают. Читать дальше....
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;