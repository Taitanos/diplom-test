import React from "react";
import {Link} from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = ({auth, name, outToggleAuth}) => {


    return (
        <div className={s.header}>
            <div className={s.header_main}>
                <Link className={s.header_main_title} to={"/"}>Главная</Link>
                <Link className={s.header_main_title} to={"/search"}>Поиск</Link>
                <Link className={s.header_main_title} to={"/countries"}>Страны</Link>
                <Link className={s.header_main_title} to={"/trip"}>Путешествия</Link>
            </div>

            {/*<Link className={s.header_login} to={"/login"}>*/}
            {/*    Личный кабинет*/}
            {/*</Link>*/}

            <Link to={"/login"}>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Личный Кабинет</button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Переключатель выпадающего списка</span>
                    </button>
                    <ul className="dropdown-menu">
                        <Link className={"dropdown-item"} to={"/"}>Главная</Link>
                        <Link className={"dropdown-item"} to={"/search"}>Поиск</Link>
                        <Link className={"dropdown-item"} to={"/countries"}>Страны</Link>
                        <Link className={"dropdown-item"} to={"/trip"}>Путешествия</Link>
                        <Link className={"dropdown-item"} to={"/login"}>Личный Кабинет</Link>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <Link className="dropdown-item" to={"/login"} onClick={outToggleAuth}>Выйти из аккаунта</Link>
                    </ul>
                </div>
            </Link>

            {auth && <div>{name}</div>}

        </div>
    );
};

export default NavBar;
