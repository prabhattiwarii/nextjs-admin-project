import React, {useState} from "react";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {passHideIcon,passShowIcon} from "@/helpers/Icon";
import {hasValidationError,validationError,focusOnFeild} from "@/helpers/GlobalHelpers";
import Head from "next/head";

const Resetpassword = () => {
    const [form, setForm] = useState({new_password: "",confirm_password: "",remember_me: false,});
    const [errors, setErrors] = useState([]);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const onChange = (e) => {
        const {name,value} = e.target;
        setForm((prevState) => ({...prevState,[name]: value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) {
            return;
        }
        if (!validate()) {
            return;
        }
        window.location="/login"
    };
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        if(!form.new_password || !form.new_password.trim()){
            newError["new_password"] = "Required";
            positionFocus = positionFocus || "new_password";
        }else if (form.new_password.length < 6) {
            newError["new_password"] = "Password must be at least 6 characters long";
            positionFocus = positionFocus || "new_password";
        }
        if(!form.confirm_password || !form.confirm_password.trim()){
            newError["confirm_password"] = "Required";
            positionFocus = positionFocus || "confirm_password";
        }else if (form.confirm_password !== form.new_password) {
            newError["confirm_password"] = "Wrong Password";
            positionFocus = positionFocus || "confirm_password";
        }     
        setErrors(newError);

        if (positionFocus) {
            focusOnFeild(positionFocus);
            return false;
        }

        return true;
    };


    return (
        <React.Fragment>
            <Head>
                <title>{`Register — ${frontend.APP_NAME}`}</title>
            </Head>
            <div className="wrap">
                <div className="signup-wrap">
                    <div className="banner-wrap" />
                    <div className="form-wrap">
                        <img className="logo" src="/assets/images/favicon.png" alt="logo"/>
                        <h1>Reset Password</h1>
                        <form onSubmit={onSubmit} autoComplete="off" className="login">
                            <div className="form-group">
                                <label className="label">New Password</label>
                                <div className="password-wrap">
                                    <input type={passwordVisible ? "text" : "password"} className={hasValidationError(errors, "new_password") ? "has-input-error" : ""} name="new_password" value={form.new_password} onChange={onChange} />
                                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button" className="pass-eye">
                                        {passwordVisible ? (
                                            passHideIcon({ width: 18, height: 18, fill: colors.black })
                                        ) : (
                                            passShowIcon({ width: 18, height: 18, fill: colors.black })
                                        )}
                                    </button>
                                </div>
                                {hasValidationError(errors, "new_password") ? (<div className="error">{validationError(errors, "new_password")}</div>) : null}
                            </div>
                            <div className="form-group">
                                <label className="label">Confirm Password</label>
                                <div className="password-wrap">
                                    <input type={passwordVisible ? "text" : "password"} className={hasValidationError(errors, "confirm_password") ? "has-input-error" : ""} name="confirm_password" value={form.confirm_password} onChange={onChange} />
                                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button" className="pass-eye">
                                        {passwordVisible ? (
                                            passHideIcon({ width: 18, height: 18, fill: colors.black })
                                        ) : (
                                            passShowIcon({ width: 18, height: 18, fill: colors.black })
                                        )}
                                    </button>
                                </div>
                                {hasValidationError(errors, "confirm_password") ? (<div className="error">{validationError(errors, "confirm_password")}</div>) : null}
                            </div>
                            <div className="submit-wrap">
                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resetpassword;
