import React, {useState} from "react";
import Head from "next/head";
import frontend from "@/constants/Frontend";
import {hasValidationError,validationError,focusOnFeild,} from "@/helpers/GlobalHelpers";

const forgetpassword = () => {
    const [form, setForm] = useState({email: "",old_password: "",new_password: "",remember_me: false,otp: ""});
    const [errors, setErrors] = useState([]);
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
        window.location="/reset-password"
    };
    const emailRE = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const validate = () => {
        const newError = {};
        let positionFocus = "";

        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(!emailRE.test(form.email)){
            newError["email"] = "Enter a valid email";
            positionFocus = positionFocus || "email";
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
                        <h1>Forgot Password</h1>
                        <form onSubmit={onSubmit} autoComplete="off" className="login">
                            <div className="form-group">
                                <label className="label">Email</label>
                                <input type="text" className={hasValidationError(errors,"email") ? "has-input-error" : ""} name="email" value={form.email} onChange={onChange}/>
                                {hasValidationError(errors,"email") ? (<div className="error">{validationError(errors,"email")}</div>) : null}
                            </div>
                            <div className="submit-wrap"><button type="submit" className="btn-submit">Submit</button></div>
                            <div className="back-login">Back To <a className="link" href="/login">Login</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default forgetpassword;
