import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { attributes, react as Privacy } from '../_posts/privacy.md';

export default function Blog() {

    return (
        <>
            <Header />
            <div className='grid-container content'>
                <Nav />

                <main className='Main'>
                    <p className='Document'>
                        <Privacy />
                    </p>
                </main>

                <Footer />
            </div>
        </>
    );
}