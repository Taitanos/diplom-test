import React, {useState} from "react";
import s from "./App.module.css";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Main from "./layouts/main/Main";
import Countries from "./components/countries/Сountries";
import Trip from "./layouts/trip/Trip";
import Login from "./layouts/login/Login";
import SearchApartment from "./layouts/SearchApartment";
import AccountLease from "./layouts/myCabinet/accountLease/AccountLease";
import AccountTrip from "./layouts/myCabinet/accountTrip/AccountTrip";
import AccountSecurity from "./layouts/myCabinet/accountSecurity/AccountSecurity";

function App() {

    const [data, setData] = useState({email: "", password: "", stayOn: false, name: ""});
    const [auth, setAuth] = useState(false);

    const handleChange = ({target}) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleCheckBoxChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }


    const inToggleAuth = () => {
        setAuth(true);
    }
    const outToggleAuth = () => {
        setData({email: "", password: "", stayOn: false, name: ""})
        setAuth(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        inToggleAuth()
        console.log(data.name);
    }

    return (
        <div className={s.main}>
            <NavBar auth={auth} name={data.name} outToggleAuth={outToggleAuth}/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/countries"} element={<Countries/>}/>
                <Route path={"/search"}>
                    <Route path={":apartmentId"} element={<SearchApartment/>}/>
                    <Route path={""} element={<SearchApartment/>}/>
                </Route>
                <Route path={"/trip"} element={<Trip/>}/>


                <Route path={"/login"}>
                    <Route path={""} element={<Login auth={auth} data={data} handleChange={handleChange}
                                                     handleCheckBoxChange={handleCheckBoxChange}
                                                     handleSubmit={handleSubmit}/>}/>
                    <Route exact path={"arenda"} element={<AccountLease/>}/>
                    <Route exact path={"trip"} element={<AccountTrip/>}/>
                    <Route exact path={"security"} element={<AccountSecurity/>}/>
                </Route>


                {/*<Route path={"/login"} element={<Login auth={auth} data={data} handleChange={handleChange} handleCheckBoxChange={handleCheckBoxChange} handleSubmit={handleSubmit}/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;