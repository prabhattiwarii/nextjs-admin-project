import React from "react";
import Head from "next/head";
import styled from "styled-components";
import frontend from "@/constants/Frontend";
import AdminLayout from "@/components/layout/AdminLayout";
import {poewIcon, rsIcon, settingIcon, userIcon} from "@/helpers/Icon";
import colors from "@/constants/Colors";
const Wrap = styled.div`
    padding:10px 20px;
    .dashboard-wrap{
        display:flex;flex-wrap:wrap;column-gap:30px;row-gap:20px;
        & .item{
            width:calc(33.33% - 20px);display:flex;background:${colors.white};box-shadow:0 1px 1px ${colors.shadow};
            & .icon{padding:20px;}
            & .redbg{background:#dd4b39},
            & .greenbg{background:#00a65a},
            & .orangebg{background:#f39c12},
            & .skybg{background:#00c0ef}
            & .info{
                padding:5px 10px;flex:1;
                & .name{font-size:14px;color:${colors.textblack};text-transform:uppercase;margin:0 0 3px;}
                .total{font-size:18px;color:${colors.textblack};font-weight:600;}
            }
        }
    }
`;

const Dashboard = () => {
    const dashboardData = [
        {id:1,title:"portal users",total:"6",icon:rsIcon,className:"redbg"},
        {id:2,title:"total users",total:"193",icon:userIcon,className:"greenbg"},
        {id:3,title:"new users",total:"0",icon:userIcon,className:"orangebg"},
        {id:4,title:"cpu traffic",total:"26%",icon:settingIcon,className:"skybg"},
        {id:5,title:"total games",total:"8",icon:poewIcon,className:"redbg"}
    ]
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8"/>
                <title>{`Dashboard - ${frontend.APP_NAME}`}</title>
            </Head>
            <AdminLayout page="dashboard">
                <Wrap>
                    <div className="dashboard-wrap">
                        {dashboardData.map((item) => (
                            <div className="item" key={item.id}>
                                <div className={`icon ${item.className}`}>{item.icon({width:45,height:45,fill:colors.white})}</div>
                                <div className="info">
                                    <div className="name">{item.title}</div>
                                    <div className="total">{item.total}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrap>
            </AdminLayout>
        </React.Fragment>
    );
}
export default Dashboard;