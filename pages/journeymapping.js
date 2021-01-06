import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";
import Link from "next/link";
import Hero from "../components/Hero";
import Availability from "../components/Availability";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function JourneyMapping() {

    return (
        <>
            <Header description="Journey Mapping for Jira - put your customer journeys right into Jira. Available on the Atlassian Marketplace" />

            <div className='grid-container'>
                <Navigation/>

                <Footer />

                <main className='Main'>
                    <Hero image={<img src='jm/JM3.png' loading="lazy" style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                                      alt="Journey Mapping Screenshot"/>}
                          subtitle="Connect user requirements to your Jira issues"
                          title="Bring User Experience Design to Jira"
                          subtext={<>Want to learn more about Journey Mapping?<br /> <Link href='/blog'><a>Read the UX design series on our Blog</a></Link></>} />


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                        <div className={'half'}><span className='Highlight'>Create unlimited journey maps right within your Jira projects</span><br />
                            <span>Document customer interactions with your product or service. Get a detailed understanding about their wants and needs.</span>
                        </div>
                            <div className={'half'}>
                        <img src='jm/JM2.png' loading="lazy" style={{marginTop: 50,width:'100%',maxWidth:800}}
                             alt="Journey Mapping Screenshot"/>
                        </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='jm/JM1.png' loading="lazy" style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                            <div className={'half'}><span className='Highlight'>Bring high level requirements into an understandable story format </span><br />
                                <span>Break down complex user journeys and make them more readable to your team</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>Manage personas alongside your user journeys</span><br />
                                <span>Connect your work-items to be much more customer centric </span>
                            </div>
                            <div className={'half'}>
                                <img src='jm/JM4.png' loading="lazy" style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>



                    <Availability server dc cloud text={<>Available for all Atlassian platforms<br />
                        Server & Cloud available now - Data Center coming soon!r</>} />

                    <FooterHero alternate docUrl="https://docz.realignedtechnologies.com/journeymapping" url="https://marketplace.atlassian.com/1223654" />

                </main>

            </div>
        </>);

}
