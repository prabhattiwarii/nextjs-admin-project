import React, { useState } from "react";
import styled from "styled-components";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {barIcons} from "@/helpers/Icon";
import Image from "next/image";
import Link from "next/link";
const Wrap = styled.div`
    background:#367fa9;box-sizing:border-box;z-index:999;width:100%;display:flex;flex-direction:row;column-gap:${({showSidebar}) => (showSidebar ? '0px' : '70px')};align-items:center;position:relative;box-shadow:0px 3px 6px #00000029;transition:column-gap 0.3s ease-in-out;
    & .logo-wrap{
        display:flex;padding:${({showSidebar}) => (showSidebar ? '10px 5px' : '10px 15px')};align-items:center;column-gap:10px;color:${colors.white};font-size:20px;
        & .logo{width:40px;height:40px;}
        & .active{display:none;}
    }
    & .nav-wrap{
        display:flex;align-items:center;justify-content:space-between;flex:1;background:${colors.blue};z-index:1;
        & .navtoggle{
            margin-right:auto;display:flex;align-items:center;justify-content:center;padding:23px;border:none;background:transparent;cursor:pointer;
            &:hover{background:#367fa9;}
        }
        & .user-details{
            display:flex;align-items:center;column-gap:15px;cursor:pointer;padding:10px 20px;
            & .img-wrap{width:40px;height:40px;border-radius:20px;position:relative;overflow:hidden;background:${colors.white};}
            & .name-wrap{
                display:flex;flex-direction:column;
                & .name{color:${colors.white};font-size:18px;line-height:22px;text-transform:capitalize;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;}
            }
            &:hover{background:#367fa9;}
        }
        & .profile-info{
            position:absolute;right:0px;top:61px;width:280px;text-align:center;
            & .user-header{
                background:${colors.blue};height:175px;border-left:1px solid ${colors.white};
                & .image-wrap{
                    position:relative;width:90px;height:90px;margin:0 auto;
                    & .img{border-radius:50%;border:3px solid rgba(255,255,255,0.2);}
                }
                & .name{text-transform:uppercase;font-size:17px;color:${colors.white};margin:10px 0 0;}
            }
            & .user-footer{
                display:flex;justify-content:space-between;background:${colors.white} !important;padding:10px;
                & .btn{
                    border:1px solid #ddd;
                    & .link{
                        color:${colors.lightblack};font-size:14px;display: inline-block;padding:6px 12px;
                    }
                    &:hover{border-color:#adadad;background-color:#e7e7e7;}
                }
            }
        }
    }
`;
const Navbar = ({showSidebar,setShowSidebar,profile,showProfile}) => {
    
    return (
        <Wrap showSidebar={showSidebar}>
            <a className="logo-wrap" href={frontend.BASE_URL}><img className="logo" src="/assets/images/favicon.png" alt="" /> <span className={`${showSidebar ? "active" :""}`}>Anubhav</span></a>
            <div className="nav-wrap">
                <button type="button" className="navtoggle" onClick={() => setShowSidebar(!showSidebar)}>{barIcons({width:14,height:14,fill:colors.white})}</button>
                <div className="user-details" onClick={showProfile}>
                    <div className='img-wrap'>
                        <Image src="/assets/images/logged-user.jpg" alt="" layout="fill" objectFit="cover" fill/>
                    </div>
                    <div className="name-wrap">
                        <span className="name">Admin</span>
                    </div>
                </div>
                {profile && (
                    <div className="profile-info">
                        <div className="user-header">
                            <div className="image-wrap">
                                <Image src="/assets/images/logged-user.jpg" alt="" className="img" layout="fill"/>
                            </div>
                            <div className="name">ADMIN</div>
                        </div>
                        <div className="user-footer">
                            <div className="btn"><Link href="/admin/profile" className="link">Profile</Link></div>
                            <div className="btn"><Link href="/login" className="link">Sign out</Link></div>
                        </div>
                    </div>
                )}
            </div>
        </Wrap>
    );
}
export default Navbar;