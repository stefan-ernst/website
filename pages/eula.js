import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";

export default function Blog() {

    return (
        <>
            <Header description="End user license agreement for Realigned Technologies apps" />
            <div className='grid-container content'>
                <Navigation />

                <main className='Main'>
                    <div className='Document'>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}