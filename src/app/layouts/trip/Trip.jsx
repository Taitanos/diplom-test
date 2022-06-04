import React from "react";
import s from "./Trip.module.css";


const Trip = () => {
    return (
        <>
            <div className={s.container}>
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
                <div className={s.trips}>
                    <div className={s.story}>
                        <div className={s.story_header}>
                            <div className={s.story_author}>
                                Julia Autinto
                            </div>
                            <div className={s.story_rating}>
                                Рейтинг 4.5*
                            </div>
                        </div>
                        <div className={s.story_title}>
                            Путешествие к храму Изумрудного Будды в Бангкоке
                        </div>
                        <div className={s.story_description}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Туристы обычно заезжают в Бангкок по дороге
                            в Паттайю или останавливаются здесь всего на день-два на обратном пути из Пхукета или Самуи.
                            Бытует мнение, что больше чем два дня в столице Таиланда делать нечего, и туристов здесь ждёт
                            только масштабный шопинг и ночные заведения с сомнительными шоу. Вот и я, побывав в Бангкоке
                            4 года назад и посетив здесь несколько рынков и злачную улицу под названием Каосан-роуд, подумала,
                            что увидела всё. И, в очередной раз собираясь в Бангкок в командировку, совсем не надеялась
                            открыть для себя что-то новое в этом городе. Читать дальше....
                        </div>
                    </div>
                </div>
                <div className={s.trips}>
                    <div className={s.story}>
                        <div className={s.story_header}>
                            <div className={s.story_author}>
                                Julia Autinto
                            </div>
                            <div className={s.story_rating}>
                                Рейтинг 4.5*
                            </div>
                        </div>
                        <div className={s.story_title}>
                            Отпуск на Самуи
                        </div>
                        <div className={s.story_description}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Это было мое первое путешествие в Тайланд,
                            вначале августа на 2 недели. Многие из моих знакомых с воодушевлением рассказывали какое это
                            потрясающе красивое место... Но я позволю себе с ними не согласится. Безусловно, есть пейзажи,
                            заслуживающие внимания, но особой красоты мне найти все же не удалось. Думаю, что
                            "за красотой" следует съездить в Китай.... Но тем не менее, я совершенно не жалею о поездке,
                            впечатлений море. Это хороший вариант для смены обстановки.  Читать дальше....
                        </div>
                    </div>
                </div>
                <div className={s.pages}>Страницы 1 2 3 .... n</div>
            </div>
        </>
    )
}

export default Trip;