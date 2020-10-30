import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import Link from "next/link";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function EnhancedSharing() {

    return (
        <>
            <Header description="Enhanced Sharing for Confluence - track sharing documents in Confluence" />
            <style jsx>
                {`
                    h1 {
                        font-size: 2.4rem;
                        font-weight: 300;
                    }
                `}
            </style>
            <div className='grid-container'>
                <Navigation/>

                <Footer />

                <main className='Main'>

                    <Hero image={<img src='ES3.png' loading="lazy" style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                                      alt="Enhanced Sharing Screenshot"/>}
                          subtitle="Keep everything under control -  and avoid compliance issues"
                          title="Don't lose track of your shared pages" />



                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>Works seamlessly with Confluence</span><br />
                                <span>We integrate behind the scenes, so you can use Confluence's native sharing dialog and invite
                                people to work on the same document - just as before.</span>
                            </div>
                            <div className={'half'}>
                                <img src='sharing.png' style={{marginTop: 50,width:'60%',maxWidth:500}}
                                     alt="Confluence Sharing dialog screenshot"/>
                            </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='ES2.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                            <div className={'half'}><span className='Highlight'>See shared pages in your user profile </span><br />
                                <span>So you can be sure the information has been delivered safe and sound</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>As an admin -<br /> be always in control</span><br />
                                <span>See what users have shared - inside and outside of your organisation</span>
                            </div>
                            <div className={'half'}>
                                <img src='ES3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='ES3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                            <div className={'half'}><span className='Highlight'>Available for Server & DataCenter</span><br />
                                <span>Performance tested to work on large Confluence instances</span>
                            </div>
                        </div>

                    </div>

                    <FooterHero alternate docUrl="https://docz.realignedtechnologies.com/enhancedsharing" url="https://marketplace.atlassian.com/1219996" />


                </main>

            </div>
        </>);

}