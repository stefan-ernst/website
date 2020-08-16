import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Button from "../components/Button";

export default function EnhancedSharing({posts}) {

    return (
        <>
            <Header />
            <div className='grid-container '>
                <Nav />
                <main className='Main'>
                    <div className='Hero'>
                        <img src='esIcon.png' className='pluginIcon'  /> <div style={{textAlign:'left'}}>Enhanced Sharing for Confluence</div>
                    </div>
                    <br/>
                    <div className='Document'>

                    <div className='Demo'>
                        <div className='DemoNav'>
                            <ul className='standard'>
                                <li>
                                    Overview
                                </li>
                                <li>
                                    Documentation
                                </li>
                                <li>
                                    <Button>Try free</Button>
                                </li>
                            </ul>
                        </div>
                        <div className='DemoContent'>
                            <h1>Keep track of the pages you share</h1>
                        </div>
                    </div>

                    </div>

                </main>

                <Footer />
            </div>
        </>
    );
}
