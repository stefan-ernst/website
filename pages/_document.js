import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TypographyStyle } from "react-typography";
import typography from "../typography";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <TypographyStyle typography={typography} />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument