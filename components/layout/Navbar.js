import React from "react";
import styled from "styled-components";
import colors from "@/constants/Colors";
import frontend from "@/constants/Frontend";
import {barIcons} from "@/helpers/Icon";
const Wrap = styled.div`
    background:${colors.dark};padding-right:40px;box-sizing:border-box;z-index:999;width:100%;display:flex;flex-direction:row;justify-content:space-between;column-gap:20px;align-items:center;position:relative;box-shadow:0px 3px 6px #00000029;
    & .logo-wrap{display:flex;padding:15px;}
    & .navtoggle{margin-right:auto;display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer;}
    & .user-details{
        display:flex;align-items:center;column-gap:15px;cursor:pointer;
        & .img-wrap{width:40px;height:40px;border-radius:20px;position:relative;overflow:hidden;}
        & .name-wrap{
            display:flex;flex-direction:column;
            & .name{color:${colors.white};font-size:18px;line-height:22px;text-transform:capitalize;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;}
        }
    }
`;
const Navbar = ({showSidebar,setShowSidebar}) => {
    return (
        <Wrap>
            <a className="logo-wrap" href={frontend.BASE_URL}></a>
            <button type="button" className="navtoggle" onClick={() => setShowSidebar(!showSidebar)}>{barIcons({width:22,height:22})}</button>
            <div className="user-details dropdown">
                <div className='img-wrap'>
                    {/* <Image src={currentUser.picture ? `${currentUser.picture}?size=50*50` : `${c.BASE_URL}/assets/images/user.png`} alt={currentUser.name} layout="fill" objectFit="cover" fill/> */}
                </div>
                <div className="name-wrap">
                    <span className="name">Admin</span>
                </div>
            </div>
        </Wrap>
    );
}
export default Navbar;