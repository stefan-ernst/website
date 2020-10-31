import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import Availability from "../components/Availability";
import Link from "next/link";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function ReadConfirmations() {

    return (
        <>
            <Header description="Get your team on the same page with Read Confirmations for Confluence" />
            <div className='grid-container'>
                <Navigation/>

                <Footer />

                <main className='Main'>



                    <Hero image={<img src='rc/RC2.png' loading="lazy" style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                                      alt="Read Confirmations Screenshot"/>}
                          subtitle="Send read confirmations to make sure others have read & understood your content"
                          title="Communication - direct and clear" />

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                        <div className={'half'}><h1>Don't lose track</h1>
                            <span>Find all your requested read confirmations in your user profile and track their status</span>
                        </div>
                            <div className={'half'}>
                        <img src='rc/RC3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                             alt="Read Confirmations Screenshot"/>
                        </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='rc/RC4.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Read Confirmations Screenshot"/>
                            </div>
                            <div className={'half'}><h1>Send requests to users and teams</h1>
                                <span>Provide your colleagues with a deadline to confirm they have read the page or blog post</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><h1>Avoid repetitive work</h1>
                                <span>Leverage automation rules to automatically request read confirmations on new documents</span>
                            </div>
                            <div className={'half'}>
                                <img src='rc/RC6.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Read Confirmations Screenshot"/>
                            </div>
                        </div>

                    </div>

                    <Availability server text={<>Available for Confluence Server - <br />
                        <Link href="/contact"><a style={{color:'inherit'}}>Let us know</a></Link> if you want to see other platforms!</>} />



                    <FooterHero alternate docUrl="https://docz.realignedtechnologies.com/readconfirmations" url="https://marketplace.atlassian.com/1221972" />

                </main>

            </div>
        </>);

}