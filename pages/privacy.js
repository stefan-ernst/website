import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { attributes, react as Privacy } from '../_posts/privacy.md';

export default function Blog() {

    return (
        <>
            <Header description="Privacy Policy for Realigned Technologies website and apps" />
            <div className='grid-container'>
                <Nav />

                <main className='Main'>
                    <p className='Content'>
                        <div className={'flex text blog'}>
                        <Privacy />
                        <br />
                        </div>
                    </p>
                </main>

                <Footer />
            </div>
        </>
    );
}