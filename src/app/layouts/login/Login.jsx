import React, {useState} from "react";
import {useParams} from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import AccountMain from "../myCabinet/accountMain/AccountMain";


const Login = ({data, handleChange, handleCheckBoxChange, handleSubmit, auth}) => {

    const {type} = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const toggleFormType = () => {
        setFormType((prevState) => prevState === "register" ? "login" : "register");
    }


    return (
        <>
            {auth === false ?
                <div className="container mt-5 min-vh-100">
                    <div className="row">
                        <div className={"col-md-6 offset-md-3 shadow p-4"}>

                            <h3 className={"mb-4 text-white"}>Login</h3>
                            <LoginForm data={data} handleChange={handleChange} handleCheckBoxChange={handleCheckBoxChange}
                                       handleSubmit={handleSubmit}/>
                        </div>
                    </div>
                </div> : <AccountMain />


            }

        </>
    );
};

export default Login;
