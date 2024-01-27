import React from "react";
import styled from "styled-components";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {barIcons} from "@/helpers/Icon";
import Image from "next/image";
const Wrap = styled.div`
    background:#367fa9;box-sizing:border-box;z-index:999;width:100%;display:flex;flex-direction:row;column-gap:${({showSidebar}) => (showSidebar ? '0px' : '70px')};align-items:center;position:relative;box-shadow:0px 3px 6px #00000029;transition:column-gap 0.3s ease-in-out;
    & .logo-wrap{
        display:flex;padding:${({showSidebar}) => (showSidebar ? '10px 5px' : '10px 15px')};align-items:center;column-gap:10px;color:${colors.white};font-size:20px;
        & .logo{width:40px;height:40px;}
        & .active{display:none;}
    }
    & .nav-wrap{
        display:flex;align-items:center;justify-content:space-between;flex:1;background:${colors.blue};z-index:1;padding:10px 20px;
        & .navtoggle{margin-right:auto;display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer;}
        & .user-details{
            display:flex;align-items:center;column-gap:15px;cursor:pointer;
            & .img-wrap{width:40px;height:40px;border-radius:20px;position:relative;overflow:hidden;background:${colors.white};}
            & .name-wrap{
                display:flex;flex-direction:column;
                & .name{color:${colors.white};font-size:18px;line-height:22px;text-transform:capitalize;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;}
            }
        }
    }
`;
const Navbar = ({showSidebar,setShowSidebar}) => {
    return (
        <Wrap showSidebar={showSidebar}>
            <a className="logo-wrap" href={frontend.BASE_URL}><img className="logo" src="/assets/images/favicon.png" alt="" /> <span className={`${showSidebar ? "active" :""}`}>Anubhav</span></a>
            <div className="nav-wrap">
                <button type="button" className="navtoggle" onClick={() => setShowSidebar(!showSidebar)}>{barIcons({width:14,height:14,fill:colors.white})}</button>
                <div className="user-details">
                    <div className='img-wrap'>
                        <Image src="" alt="" layout="fill" objectFit="cover" fill/>
                    </div>
                    <div className="name-wrap">
                        <span className="name">Admin</span>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}
export default Navbar;