import React, { useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {hasValidationError,validationError,focusOnFeild,} from "@/helpers/GlobalHelpers";

const Wrap = styled.div`
max-width:${frontend.width};width:100%;margin:0 auto;padding:40px 20px;height:100vh;display:flex;align-items:center;position:relative;
& .signup-wrap{
    display:flex;max-width:1000px;width:100%;margin:0 auto;min-height:450px;overflow:hidden;border-radius:10px;box-shadow:${colors.shadow} 0px 0px 3px;
    & .banner-wrap{width:50%;background:url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg);background-repeat:no-repeat;background-size:cover};
    & .form-wrap{
        & .logo{width:40px;margin:0 auto;}
        width:50%;padding:30px;display:flex;flex-direction:column;justify-content:center;
        & h1{font-size:32px;color:${colors.black};text-align:center;margin:0 0 20px;}
        & .signup{
            display:flex;flex-direction: column;align-items: center;
            & .remember-wrap{
                display:flex;align-items:center;column-gap:10px;justify-content:space-between;
                & .remember{
                    display:flex;align-items:center;column-gap:8px;cursor:pointer;
                    & label{font-size:16px;color:${colors.black};cursor:pointer;}
                }
                & .forgot-wrap{
                    & .link{
                        color:${colors.darkBlue};text-decoration:underline;
                        &:hover{text-decoration:underline;}
                    }
                }
            }
            & .submit-wrap{
                display:flex;justify-content:center;
                & .btn-submit{font-size:16px;color:${colors.white};background:${colors.textblack};height:40px;padding:0 25px;display:flex;align-items:center;justify-content:center;border:none;border-radius:5px;cursor:pointer;}
            }
            & .back-login{
                margin:20px 0 0;
                & .link{
                    color:${colors.blue};
                    &:hover{text-decoration:underline;}
                }
            }
        }
    }
}
`;

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
            <Wrap>
                <div className="signup-wrap">
                    <div className="banner-wrap" />
                    <div className="form-wrap">
                        <img className="logo" src="/assets/images/favicon.png" alt="logo"/>
                        <h1>Forgot Password</h1>
                        <form onSubmit={onSubmit} autoComplete="off" className="signup">
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
            </Wrap>
        </React.Fragment>
    );
};

export default forgetpassword;
