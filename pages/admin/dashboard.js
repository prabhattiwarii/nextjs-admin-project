import React from "react";
import Head from "next/head";
import styled from "styled-components";

import frontend from "@/constants/Frontend";
import AdminLayout from "@/components/layout/AdminLayout";
const Wrap = styled.div`
    & h1{text-align:center;}
`;

const Dashboard = () => {
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8"/>
                <title>{`Dashboard - ${frontend.APP_NAME}`}</title>
            </Head>
            <AdminLayout page="dashboard">
                <Wrap>
                    dashboard
                </Wrap>
            </AdminLayout>
        </React.Fragment>
    );
}
export default Dashboard;