import Head from "next/head";
import Styles from "./styles";
import Menu from "./menu";
import {useState} from "react";

export default function Header() {
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/iconblue.png"/>
                <title>Realigned Technologies</title>
                <meta
                    name="description"
                    content="This is the website of Realigned Technologies Ltd. Realigned Technologies provides consulting services in Switzerland in like development consulting,
                    Atlassian Consulting, as well as software development services."/>
            </Head>
            <style jsx>{`
            .container {
              min-height: 100vh;
            }
            `}</style>

            <Styles/>

        </>
    )
}