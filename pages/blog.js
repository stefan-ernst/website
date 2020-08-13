import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Blog() {

    return (
        <>
            <Header />
            <div className='grid-container '>
                <Nav />

                <main className='Main'>
                    <div className='Hero'>
                        We are at the blog!
                    </div>
                    <br/>
                </main>

                <Footer />
            </div>
        </>
);
}