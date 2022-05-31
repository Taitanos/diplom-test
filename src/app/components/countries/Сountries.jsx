import React from "react";
import s from "./Сountries.module.css";
import Cyprus from "../../assets/img/Cyprus.jpg";
import France from "../../assets/img/France.jpg";
import Italy from "../../assets/img/Italy.jpg";
import Spain from "../../assets/img/Spain.jpg";
import Thailand from "../../assets/img/Thailand.jpg";

const Countries = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.countries}>
                    <div className={s.country}>
                        <div>
                            <img className={s.country_icon} src={Cyprus} alt={"Cyprus"}/>
                        </div>
                        <div className={s.country_text}>
                            <div className={s.country_text_title}>
                                <h1>Кипр</h1>
                            </div>
                            <div className={s.country_text_descriptions}>
                                <p>
                                    Республика Кипр — островное государство на Среднем Востоке (хотя вне
                                    географических критериев может считаться частью Европы), в восточной части
                                    Средиземного моря. Член Европейского союза с 1 мая 2004 года.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div>
                            <img className={s.country_icon} src={Spain} alt={"Spain"}/>
                        </div>
                        <div className={s.country_text}>
                            <div className={s.country_text_title}>
                                <h1>Испания</h1>
                            </div>
                            <div className={s.country_text_descriptions}>
                                <p>
                                    Испания, официально Королевство Испания — трансконтинентальное суверенное
                                    государство в Южной Европе, имеющее часть территорий в Африке.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div>
                            <img className={s.country_icon} src={Italy} alt={"Italy"}/>
                        </div>
                        <div className={s.country_text}>
                            <div className={s.country_text_title}>
                                <h1>Италия</h1>
                            </div>
                            <div className={s.country_text_descriptions}>
                                <p>
                                    Италия, официальное название — Итальянская Республика — государство в Южной
                                    Европе, в центре Средиземноморья. Входит в Европейский союз и НАТО с момента их
                                    создания, является третьей по величине экономикой еврозоны.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div>
                            <img className={s.country_icon} src={Thailand} alt={"Thailand"}/>
                        </div>
                        <div className={s.country_text}>
                            <div className={s.country_text_title}>
                                <h1>Тайланд</h1>
                            </div>
                            <div className={s.country_text_descriptions}>
                                <p>
                                    Таиланд, официальное название — Королевство Таиланд, до 1939 и в 1945—1949 годах
                                    Сиам — государство в Юго-Восточной Азии, расположенное в юго-западной части
                                    полуострова Индокитай и в северной части полуострова Малакка.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.country}>
                        <div>
                            <img className={s.country_icon} src={France} alt={"France"}/>
                        </div>
                        <div className={s.country_text}>
                            <div className={s.country_text_title}>
                                <h1>Франция</h1>
                            </div>
                            <div className={s.country_text_descriptions}>
                                <p>
                                    Франция, официальное название — Французская Республика, — трансконтинентальное
                                    государство, включающее основную территорию в Западной Европе и ряд заморских
                                    регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство,
                                    братство», её принцип — правление народа, народом и для народа.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Countries;
