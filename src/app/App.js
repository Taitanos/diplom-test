import React from "react";
import s from "./App.module.css";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Main from "./layouts/main/Main";
import Countries from "./components/countries/Сountries";
import Trip from "./layouts/trip/Trip";
import Login from "./components/login/Login";
import SearchApartment from "./layouts/SearchApartment";

function App() {
    return (
        <div className={s.main}>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/countries"} element={<Countries/>}/>
                <Route path={"/search"}>
                    <Route path={":apartmentId"} element={<SearchApartment/>}/>
                    <Route path={""} element={<SearchApartment/>}/>
                </Route>
                <Route path={"/trip"} element={<Trip/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;