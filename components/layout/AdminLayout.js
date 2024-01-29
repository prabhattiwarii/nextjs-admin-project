import {useState} from "react"
import styled from "styled-components";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";

const Wrap = styled.div`
    box-sizing:border-box;display:flex;flex-direction:column;min-height:100vh;
    & .admin-layout-wrap{
        width:100%;min-height:calc(100vh - 77px);display:flex;
        & .layout-content{box-sizing:border-box;width:100%;background:rgb(236, 240, 245);}
    }
`;
const AdminLayout = (props) => {
    const [showSidebar,setShowSidebar] = useState(null);
    const toggleSidebar = (value) => {
        setShowSidebar(value);
    }
    const [profile,setProfile] = useState(false);
    const showProfile = () => {
        setProfile(!profile);
    }
    return (
        <>
            <Wrap>
                <Navbar showSidebar={showSidebar} setShowSidebar={toggleSidebar} profile={profile} setProfile={setProfile} showProfile={showProfile}/>
                <div className="admin-layout-wrap" onClick={() => setProfile(false)}>
                    <Sidebar page={props.page} showSidebar={showSidebar} setShowSidebar={toggleSidebar}/>
                    <div className="layout-content">{props.children}</div>
                </div>
            </Wrap>
        </>
    );
}
export default AdminLayout;