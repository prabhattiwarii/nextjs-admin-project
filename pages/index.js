import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "@/components/layout/AdminLayout";
import frontend from "@/constants/Frontend";
const Wrap = styled.div`
    & h1{text-align:center;}
`;

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>{frontend.APP_NAME}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Wrap>
                    <h1>Home</h1>
                </Wrap>
            </Layout>
            
        </React.Fragment>
    );
}
export default Home;