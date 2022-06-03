import React from "react";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/CheckBoxField";

const LoginForm = ({data, handleChange, handleCheckBoxChange, handleSubmit}) => {


    return (
        <>
            <form onSubmit={handleSubmit} className={"text-white"}>
                <TextField
                    onChange={handleChange}
                    name={"email"}
                    label={"Электронная почта"}
                    value={data.email}
                />
                <TextField
                    onChange={handleChange}
                    name={"name"}
                    label={"Имя"}
                    value={data.name}
                />
                <TextField
                    onChange={handleChange}
                    name={"password"}
                    type={"password"}
                    label={"Пароль"}
                    value={data.password}
                />
                <CheckBoxField
                    value={data.stayOn}
                    onChange={handleCheckBoxChange}
                    name={"stayOn"}
                >
                    Оставаться в системе
                </CheckBoxField>
                <button type={"submit"} className={"btn btn-primary w-100 mx-auto"}>Submit</button>
            </form>
        </>
    );
};

export default LoginForm;
