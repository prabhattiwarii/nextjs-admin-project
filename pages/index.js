import React from "react";
import Head from "next/head";
import Frontend from "@/constants/Frontend";
import Login from "./login";

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>{`Login - ${Frontend.APP_NAME}`}</title>
                <link rel="icon" href="/assets/images/favicon.png"/>
            </Head>
           <Login/>
        </React.Fragment>
    );
}
export default Home;