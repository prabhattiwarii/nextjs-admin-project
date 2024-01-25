import styled from "styled-components";
import colors from "@/constants/Colors";
import { dashboardIcon, userIcon } from "@/helpers/Icon";
const Wrap = styled.div`
    background:${colors.dark};box-sizing:border-box;max-width:230px;width:100%;display:flex;flex-direction:column;row-gap:6px;padding:15px;box-shadow:0px 3px 6px #00000029;
    & .menu{
        font-size:16px;color:${colors.lightBlue};display:flex;align-items:center;column-gap:10px;padding:13px;border-radius:6px;cursor:pointer;
        &.active{color:${colors.white};background:${colors.dark};}
        &:hover{
            color:${colors.white};background:${colors.lightDark};
            & svg{fill:${colors.white};}
        }
    }
`;
const Sidebar = ({page}) => {
    return (
        <Wrap>
            <a className={`menu ${(page == "dashboard" ? "active" : "")}`} href="/admin/dashboard">
                {dashboardIcon({width:20,height:20,fill:colors.lightBlue})}
                <span>Dashboard</span>
            </a> 
            <a className={`menu ${(page == "user" ? "active" : "")}`} href="/admin/user">
                {userIcon({width:20,height:20,fill:colors.lightBlue})}
                <span>User</span>
            </a> 
        </Wrap>
    );
}
export default Sidebar;