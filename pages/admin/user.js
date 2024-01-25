import React from "react";
import Head from "next/head";
import AdminLayout from "@/components/layout/AdminLayout";
import Frontend from "@/constants/Frontend";
import styled from "styled-components";
import colors from "@/constants/Colors";
import DataTable from "@/components/DataTable";

const Wrap = styled.div`
    & h1{margin:0;color:${colors.textblack};font-size:24px;padding:10px 20px;}
    & .section{
        & .box{
            padding:20px;
            & .top-wrap{
                display:flex;justify-content:space-between;align-items:center;padding:10px;background:${colors.blue};
                & .heading{color:${colors.white};font-size:16px;}
                & .add-btn{color:${colors.white};background:${colors.darkBlue};border:none;padding:0 10px;height:35px;border-radius:5px;}
            }
            & .body-wrap{
                & .field-wrap{display:flex;max-width:400px;width:100%;}
            }
        }
    }
`;
const user = () => {
  return (
    <React.Fragment>
        <Head>
            <meta charset="utf-8"/>
            <title>{`User - ${Frontend.APP_NAME}`}</title>
        </Head>
        <AdminLayout page="user">
            <Wrap>
                <h1 className="heading">User Lists</h1>
                <div className="section">
                    <div className="box">
                        <div className="top-wrap">
                            <div className="heading">USER LISTS</div>
                            <button className="add-btn" type="button">Add User</button>
                        </div>
                    </div>
                    <DataTable/>
                </div>
            </Wrap>
        </AdminLayout>
    </React.Fragment>
  )
}

export default user;