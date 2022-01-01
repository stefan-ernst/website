import Head from "next/head";
import Styles from "./styles";
import {NextSeo} from "next-seo";

export default function Header({title, description, canonical}) {
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/iconblue.png"/>
                <title>Realigned Technologies {title ? `: ${title}` : ''}</title>
            </Head>
            <NextSeo
                title={title}
                description={description}
                canonical={canonical}
                openGraph={{
                    title: title,
                    description: description,
                    url: canonical,
                    locale: 'en',
                    site_name: 'Realigned Technologies',
                }}
            />
            <style jsx>{`
            .container {
              min-height: 100vh;
            }
            `}</style>

            <Styles/>

        </>
    )
}