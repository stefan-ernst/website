import 'animate.css';
import '../public/fonts.css';
import { DokzProvider } from 'dokz'

export default function MyApp({ Component, pageProps }) {
    return <DokzProvider docsRootPath='pages/docs' headerLogo={<img src='/Realigned_Single.svg' width='100px' />}>
        <Component {...pageProps} />
    </DokzProvider>
}