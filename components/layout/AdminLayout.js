import {useState} from "react"
import styled from "styled-components";
import colors from "@/constants/Colors";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
const Wrap = styled.div`
    background:${colors.background};box-sizing:border-box;display:flex;flex-direction:column;min-height:100vh;
    & .admin-layout-wrap{
        width:100%;min-height:calc(100vh - 77px);display:flex;
        & .layout-content{box-sizing:border-box;width:100%;}
    }
`;
const AdminLayout = (props) => {
    const [showSidebar,setShowSidebar] = useState(null);
    const toggleSidebar = (value) => {
        setShowSidebar(value);
    }
    return (
        <>
            <Wrap>
                <Navbar showSidebar={showSidebar} setShowSidebar={toggleSidebar}/>
                <div className="admin-layout-wrap">
                    <Sidebar page={props.page}/>
                    <div className="layout-content">{props.children}</div>
                </div>
            </Wrap>
        </>
    );
}
export default AdminLayout;