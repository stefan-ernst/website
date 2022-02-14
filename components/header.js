import Head from "next/head";
import Styles from "./styles";
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

export default function Header({title, description}) {

    const canonical = 'https://realignedtechnologies.com/' + useRouter().asPath;

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
                    type: 'website',
                    images: [
                        {
                            url: 'https://realignedtechnologies.com/images/OG1.png',
                            width: 1200,
                            height: 630,
                            alt: 'Realigned Technologies'
                        }
                    ]
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