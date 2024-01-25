import React from "react";
import Head from "next/head";
import styled from "styled-components";
// import Layout from "@/components/layout/Layout";
import frontend from "@/constants/Frontend";
const Wrap = styled.div`
    & h1{text-align:center;}
`;

const Result = () => {
    return (
        <React.Fragment>
            <Head>
                <title>{`Results — ${frontend.APP_NAME}`}</title>
            </Head>
            {/* <Layout> */}
                <Wrap>
                    <h1>Result</h1>
                </Wrap>
            {/* </Layout> */}
            
        </React.Fragment>
    );
}
export default Result;