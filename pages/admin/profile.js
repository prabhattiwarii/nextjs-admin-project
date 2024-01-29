import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "@/components/layout/AdminLayout";
import frontend from "@/constants/Frontend";
import colors from "@/constants/Colors";
import Image from "next/image";

const Wrap = styled.div`
    & .heading{background:${colors.white};margin:0;padding:10px 20px;font-size:24px;color:${colors.textblack};text-transform:uppercase;margin:0 0 20px;}
    & .details-wrap{
        display:flex;padding:0 20px;
        & .box{
            flex:0 0 25%;padding:0 15px 0 0;
            & .profile{
                background:${colors.white};box-shadow:1px 0px 5px 2px ${colors.shadow};display:flex;align-items:center;flex-direction:column;border-top:3px solid ${colors.blue};border-radius:3px;padding:10px;
                & .image-wrap{
                    position:relative;width:100px;height:100px;border-radius:50%;background:${colors.white};
                    & .img{border-radius:50%;border: 3px solid #d2d6de;padding:3px;}
                }
                & .name{text-transform:uppercase;margin:5px 0 10px;font-size:21px;color:${colors.textblack};}
                & .number{font-size:14px;color:${colors.lightblack};margin:0 0 10px;}
            }
        }
        & .profile-info{
            flex:0 0 75%;padding:0 0 0 15px;
            & .box-2{
                box-shadow:1px 0px 5px 2px ${colors.shadow};
                & .head{background:${colors.blue};text-transform:uppercase;color:${colors.white};padding:10px;}
                & .form{
                    background:${colors.white};padding:10px 25px;
                    & .field-group{
                        margin:0 0 15px;
                        & .label{font-weight:600;margin:0 0 5px;}
                        & .input:focus-visible{border-color:${colors.blue};}
                    }
                    & .btn-wrap{
                        text-align:right;
                        & .btn{font-size:14px;padding:6px 12px;background:${colors.darkBlue};color:${colors.white};border:none;line-height:1.42857143;cursor:pointer;border-radius:4px;}
                    }
                }
            }
        }
    }

    @media(max-width:991px){
        & .details-wrap{
            flex-direction:column;row-gap:20px;
            & .box{padding:0;}
            & .profile-info{padding:0;}
        }
    }
    `;

const profile = () => {
  return (
    <React.Fragment>
            <Head>
                <title>{`Profile - ${frontend.APP_NAME}`}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Wrap>
                    <h1 className="heading">Admin</h1>
                    <div className="details-wrap">
                        <div className="box">
                            <div className="profile">
                                <a href="/" className="image-wrap">
                                    <Image src="/assets/images/logged-user.jpg" alt="" layout="fill" className="img"/>
                                </a>
                                <div className="name">Admin</div>
                                <div className="number">999292922</div>
                            </div>
                        </div>
                        <div className="profile-info">
                            <div className="box-2">
                                <div className="head">Profile information</div>
                                <form className="form" autoComplete="off">
                                    <div className="field-group">
                                        <label className="label" htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className="input"/>
                                    </div>
                                    <div className="field-group">
                                        <label className="label" htmlFor="phone">Phone</label>
                                        <input type="text" id="phone" name="phone" className="input"/>
                                    </div>
                                    <div className="field-group">
                                        <label className="label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="input"/>
                                    </div>
                                    <div className="btn-wrap">
                                        <button type="submit" className="btn">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Wrap>
            </Layout>
        </React.Fragment>
  )
}

export default profile