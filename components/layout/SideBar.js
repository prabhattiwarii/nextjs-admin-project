import styled from "styled-components";
import colors from "@/constants/Colors";
import {dashboardIcon,userIcon,moneyIcon, settingIcon, arrowIcon} from "@/helpers/Icon";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
const Wrap = styled.div`
    background:${colors.dark};box-sizing:border-box;max-width:230px;width:100%;display:flex;flex-direction:column;padding:15px 0;box-shadow:0px 3px 6px #00000029;
    max-width:${({showSidebar}) => (showSidebar ? '50px' : '230px')};transition:max-width 0.3s ease;
    & .user-info{
        display:flex;align-items:center;column-gap:15px;padding:15px;
        & .info-img{width:40px;height:40px;border-radius:20px;position:relative;overflow:hidden;background:${colors.white};}
        & .info-name{color:${colors.white};font-weight:600;line-height:36px;text-transform:uppercase;font-size:14px;}
        & .active{display:none;}
    }
    & .active-user{
        padding:10px;
        & .info-img{width:30px;height:30px;}
    }
    & .nav-wrap{
        & .menu{
            font-size:14px;color:${colors.lightBlue};display:flex;align-items:center;column-gap:10px;padding:13px 15px;cursor:pointer;position:relative;
            &.active{
                color:${colors.white};background:${colors.lightDark};position:relative;
                &::before{content:"";position:absolute;height:42px;width:3px;background:${colors.blue};left:0;}
            }
            & .iccon{position:absolute;right:19px;transition:transform .5s ease;}
            & .dropnav{transform:rotate(90deg);}
            &:hover{
                color:${colors.white};background:${colors.lightDark};
                & svg{fill:${colors.white};}
            }
            & .active{display:none;}
        }
        & .menu-item{
            background:#2c3b41;padding:6px 15px;
            &.active{
                color:${colors.white};background:#2c3b41;
                &::before{display:none;}
            }
            &:hover{
                background:#2c3b41;
                & svg{fill:${colors.white};}
            }
        }
    }
`;
const Sidebar = ({page,showSidebar}) => {
    const [showNav,setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    const navbar = [
        {name:"Dashboard",link:"/admin/dashboard",icon:dashboardIcon,activeItem:"dashboard"},
        {name:"User",link:"javascript:void(0)",icon:userIcon,activeItem:"user",iccon:arrowIcon,
            childData:[
                {id:1,name:"Refrances",link:"/admin/refrances",icon:moneyIcon,activeItem:""},
                {id:2,name:"Users",link:"/admin/user",icon:userIcon,activeItem:"user"},
                {id:3,name:"Entry Users",link:"/admin/entry-users",icon:moneyIcon,activeItem:""},
                {id:4,name:"Ledger",link:"/admin/ledger",icon:moneyIcon,activeItem:""},
                {id:5,name:"Len Den",link:"/admin/len-den",icon:moneyIcon,activeItem:""},
                {id:6,name:" Refrance Ledger",link:"/admin/refrance-ledger",icon:moneyIcon,activeItem:""}
            ]},
        {name:"Games",link:"/admin/game",icon:moneyIcon,activeItem:"game"},
        {name:"Games Result",link:"/admin/game-result",icon:moneyIcon,activeItem:"game-result",},
        {name:"Manage User Request",link:"/admin/user-request",icon:userIcon,activeItem:"user-requests"},
        {name:"Settings",link:"/admin/setting",icon:settingIcon,activeItem:"setting"}
    ]
    return (
        <Wrap showSidebar={showSidebar}>
            <div className={`user-info ${showSidebar ? "active-user" : ""}`}>
                <div className="info-img">
                    <Image src="/assets/images/logged-user.jpg" alt="" layout="fill" objectFit="cover" fill />
                </div>
                <span className={`info-name ${showSidebar ? "active" : ""}`}>Anubhav</span>
            </div>
            {navbar &&
                navbar.map((nav, index) => (
                    <div key={index} className="nav-wrap">
                        {nav.link === "javascript:void(0)" ? (
                            <div className={`menu ${(page == nav.activeItem ? "active" : "")}`} onClick={toggleNav} style={{ cursor: "pointer" }}>
                                {nav.icon({ width: 16, height: 16, fill: colors.lightBlue })}<span className={`${showSidebar ? "active" : ""}`}>{nav.name}</span>
                                {!showSidebar ? (
                                    nav.iccon && (
                                        <span className={`iccon ${showNav ? "dropnav" : ""}`} onClick={toggleNav}>{nav.iccon({width:20,height:20})}</span>
                                    )
                                ) : ""}
                            </div>
                        ) : (
                            <Link className={`menu ${(page == nav.activeItem ? "active" : "")}`} href={nav.link}>{nav.icon({width:16,height:16,fill:colors.lightBlue})}
                                <span className={`${showSidebar ? "active" : ""}`}>{nav.name}</span>
                                {nav.iccon && (
                                    <span className={`iccon ${showNav ? "dropnav" : ""}`} onClick={toggleNav}>{nav.iccon({width:20,height:20})}</span>
                                )}
                            </Link>
                        )}
                        {showNav && 
                            nav.childData?.map((nav) => (
                                <Link key={nav.id} className={`menu menu-item ${(page == nav.activeItem ? "active" : "")}`} href={nav.link}>
                                    {nav.icon({width:16,height:16,fill:colors.lightBlue})}<span className={`${showSidebar ? "active" : ""}`}>{nav.name}</span>
                                </Link>
                            ))}
                    </div>
                ))}
        </Wrap>
    );
}
export default Sidebar;