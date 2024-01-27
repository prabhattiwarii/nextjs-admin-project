import React,{useState} from "react";
import Head from "next/head";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {passHideIcon,passShowIcon} from "@/helpers/Icon";
import {hasValidationError,validationError,focusOnFeild} from "@/helpers/GlobalHelpers";

const Register = () => {
    const [form, setForm] = useState({phone: "", password: "", remember_me: false});
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
        setForm({phone: "", password: "", remember_me: false});
    }
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        if(!form.phone || !form.phone.trim()){
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        }else if(form.phone.length < 10){
            newError["phone"] = "please Enter a valid number";
            positionFocus = positionFocus || "phone";
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
                <title>{`Register — ${frontend.APP_NAME}`}</title>
            </Head>
                <div className="wrap">
                    <div className="signup-wrap">
                        <div className="banner-wrap"/>
                        <div className="form-wrap">
                            <h1>Register</h1>
                            <form onSubmit={onSubmit} autoComplete="off" className="login">
                                <div className="form-group">
                                    <label className="label">Name</label>
                                    <input type="text" className={hasValidationError(errors,"phone") ? "has-input-error" : ""} name="phone" value={form.phone} onChange={onChange}/>
                                    {hasValidationError(errors,"phone") ? (<div className="error">{validationError(errors,"phone")}</div>) : null}
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
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                </div>
                                <div className="submit-wrap">
                                    <button type="submit" className="btn-submit">Register</button>
                                </div>
                                <div className="bottom-wrap">Already have an account? <a href="/login" className="link">Login</a></div>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
export default Register;