import styled from "styled-components";
import colors from "@/constants/Colors";
import {dashboardIcon,userIcon,moneyIcon, settingIcon} from "@/helpers/Icon";
import Image from "next/image";
import Link from "next/link";
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
    & .menu{
        font-size:14px;color:${colors.lightBlue};display:flex;align-items:center;column-gap:10px;padding:13px 15px;border-radius:6px;cursor:pointer;
        &.active{
            color:${colors.white};background:${colors.lightDark};position:relative;
            &::before{content:"";position:absolute;height:42px;width:3px;background:${colors.blue};left:0;}
        }
        &:hover{
            color:${colors.white};background:${colors.lightDark};
            & svg{fill:${colors.white};}
        }
        & .active{display:none;}
    }
`;
const Sidebar = ({page,showSidebar}) => {
    const navbar = [
        {name:"Dashboard",link:"/admin/dashboard",icon:dashboardIcon,activeItem:"dashboard"},
        {name:"User",link:"/admin/user",icon:userIcon,activeItem:"user"},
        {name:"Games",link:"/admin/game",icon:moneyIcon,activeItem:"game"},
        {name:"Games Result",link:"/admin/game-result",icon:moneyIcon,activeItem:"game-result"},
        {name:"Manage User Request",link:"/admin/user-request",icon:userIcon,activeItem:"user-requests"},
        {name:"Settings",link:"/admin/setting",icon:settingIcon,activeItem:"setting"}
    ]
    return (
        <Wrap showSidebar={showSidebar}>
            <Link href="/" className={`user-info ${showSidebar ? "active-user" :""}`}>
                <div className="info-img">
                    <Image src="" alt="" layout="fill" objectFit="cover" fill/>
                </div>
                <span className={`info-name ${showSidebar ? "active" :""}`}>Anubhav</span>
            </Link>
            {navbar && navbar.map((nav,index) => (
                <Link key={index} className={`menu ${(page == nav.activeItem ? "active" : "")}`} href={nav.link}>
                    {nav.icon({width:16,height:16,fill:colors.lightBlue})}
                    <span className={`${showSidebar ? "active" :""}`}>{nav.name}</span>
                </Link> 
            ))}
        </Wrap>
    );
}
export default Sidebar;