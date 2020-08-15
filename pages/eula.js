import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { attributes, react as Eula } from '../_posts/eula.md';

export default function Blog() {

    return (
        <>
            <Header />
            <div className='grid-container content'>
                <Nav />

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