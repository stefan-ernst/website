import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";

export default function Contact() {

    return (
        <>
            <Header description="Get in touch with us - Realigned Technologies" />
            <div className='grid-container'>
                <Navigation isWhite />

                <main className='Main'>
                    <p className='Content FullPage'>
                        <div className={'flex text blog'}>

                            <div className={'flex-1'}>
                                <h3>Thank you for signing up</h3>

                                <p>
                                    Keep an eye out for a welcome email!
                                </p>
                            </div>
                        </div>
                    </p>
                </main>

                <Footer isWhite />
            </div>
        </>
    );
}