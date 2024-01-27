import React,{useState} from "react";
import Head from "next/head";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {passHideIcon,passShowIcon} from "@/helpers/Icon";
import {hasValidationError, validationError,focusOnFeild} from "@/helpers/GlobalHelpers";
const Login = () => {
    const [form, setForm] = useState({email: "", password: "", remember_me: false});
    const [errors,setErrors] = useState([]);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const onChange = (e) => {
        const {name,value} = e.target;
        setForm((prevState) => ({...prevState,[name]: value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(submitting){
            return;
        }
        if(!validate()){
            return;
        }
        setForm({email: "", password: "", remember_me: false});
        window.location = "/admin/dashboard"
    }
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
        if(!form.password || !form.password.trim()){
            newError["password"] = "Required";
            positionFocus = positionFocus || "password";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    return (
        <React.Fragment>
            <Head>
                <title>{`Login — ${frontend.APP_NAME}`}</title>
            </Head>
                <div className="wrap">
                    <div className="login-wrap">
                        <div className="banner-wrap"/>
                        <div className="form-wrap">
                            <img className="logo" src="/assets/images/favicon.png" alt="logo"/>
                            <h1>Login</h1>
                            <form onSubmit={onSubmit} autoComplete="off" className="login">
                                <div className="form-group">
                                    <label className="label">Email</label>
                                    <input type="text" className={hasValidationError(errors,"email") ? "has-input-error" : ""} name="email" value={form.email} onChange={onChange}/>
                                    {hasValidationError(errors,"email") ? (<div className="error">{validationError(errors,"email")}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <label className="label">Password</label>
                                    <div className="password-wrap">
                                        <input type={passwordVisible ? "text" : "password"} className={hasValidationError(errors,"password") ? "has-input-error" : ""} name="password" value={form.password} onChange={onChange}/>
                                        <button onClick={() => setPasswordVisible(!passwordVisible)} type="button" className="pass-eye">
                                            {passwordVisible ? (
                                                passHideIcon({width:18,height:18,fill:colors.black})
                                            ) : (
                                                passShowIcon({width:18,height:18,fill:colors.black})
                                            )}                                            
                                        </button>
                                    </div>
                                    {hasValidationError(errors,"password") ? (<div className="error">{validationError(errors,"password")}</div>) : null}
                                </div>
                                <div className="remember-wrap">
                                    <div className="remember">
                                        <input type="checkbox" id="remember" name="remember" value="1" onChange={onChange}/>
                                        <label htmlFor="remember">Remembered Device</label>
                                    </div>
                                    <div className="forgot-wrap">
                                        <a href="/forget-password" className="link">Forgot Password ?</a>
                                    </div>
                                </div>
                                <div className="submit-wrap">
                                    <button type="submit" className="btn-submit">Login</button>
                                </div>
                                <div className="bottom-wrap">Don't have an account? <a href="/register" className="link">Register</a></div>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
export default Login;