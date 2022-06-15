import React, {useState} from "react";


const TextField = ({onChange, label, type = "text", name, value}) => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <div className={"mb-4"}>
            <label htmlFor={name}>{label}</label>
            <div className={"input-group has-validation"}>
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={"form-control"}
                />
                {type === "password" &&
                <button type="button" onClick={toggleShowPassword}
                        className="btn btn-outline-success">
                    {
                        <i className={"bi bi-eye" + (showPassword ? "" : "-slash")}></i>
                    }
                </button>}
            </div>
        </div>
    );
};

export default TextField;
