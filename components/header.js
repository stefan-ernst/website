import Head from "next/head";
import Styles from "./styles";

export default function Header({title, description}) {
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/iconblue.png"/>
                <title>Realigned Technologies {title ? `: ${title}` : ''}</title>
                <meta
                    name="description"
                    content={description}/>
                <meta
                    name="og:description"
                    content={description}/>
                <meta
                    name="og:title"
                    content={title}/>
                <script async defer data-domain="realignedtechnologies.com" src="https://collect.realignedtechnologies.com/js/index.js"></script>
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