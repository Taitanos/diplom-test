import React from "react";
import {Link} from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={s.header}>
            <div className={s.header_main}>
                <Link className={s.header_main_title} to={"/"}>Главная</Link>
                <Link className={s.header_main_title} to={"/search"}>Поиск</Link>
                <Link className={s.header_main_title} to={"/countries"}>Страны</Link>
                <Link className={s.header_main_title} to={"/trip"}>Путешествия</Link>
            </div>
            <Link className={s.header_login} to={"/login"}>Личный кабинет</Link>
        </div>
    );
};

export default NavBar;
