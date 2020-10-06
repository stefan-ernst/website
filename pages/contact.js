import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function () {

    return (
        <>
            <Header />
            <div className='grid-container'>
                <Nav />

                <main className='Main'>
                    <p className='Content FullPage'>
                        <div className={'flex text blog'}>

                            <div>
                            <h2>Contact</h2>
                            <br />
                            <div className={'pureflex start'}>
                                <div><img src='/home.svg' style={{width:24}} /></div>
                            <div>Realigned Technologies ltd<br />

                            <br />
                            Suurstoffi 16<br />
                            CH-6343 Rotkreuz<br />
                                Switzerland<br /></div>

                            </div>

                            <div className={'pureflex start'}>
                                <div><img src='/mail.svg' style={{width:24}} /></div>
                                <div>info@realigned.ch</div>
                            </div>

                            <div className={'pureflex start'}>
                                <div><img src='/globe.svg' style={{width:24}} /></div>
                                <div><a href="https://realignedtechnologies.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener">Help Center</a></div>
                            </div>
                            </div>

                            <div className={'PartnerLogo'}>
                                <img src="/marketplacepartner.png" style={{width:'80%'}}/>
                            </div>

                            <br />
                        </div>
                    </p>
                </main>

                <Footer />
            </div>
        </>
    );
}