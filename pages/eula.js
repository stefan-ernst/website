import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import { attributes, react as Eula } from '../_posts/eula.md';

export default function Blog() {

    return (
        <>
            <Header description="End user license agreement for Realigned Technologies apps" />
            <div className='grid-container content'>
                <Navigation />

                <main className='Main'>
                    <div className='Document'>
                        <Eula />
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}