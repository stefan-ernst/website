import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";

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
                    <div className='Hero' style={{flexDirection:'column',alignItems:'center'}}>

                        Connect user requirements to your Jira issues
                        <br />
                        <small>Get to know your users - and communicate user requirements more easily to your team</small>

                        <img src='rc/RC2.png' style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                             alt="Journey Mapping Screenshot"/>


                        <div className='minor'>Want to learn more about Journey Mapping?<br /> Read the UX design series on our <a href='/blog'>Blog</a></div>

                    </div>


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                        <div className={'half'}><span className='Highlight'>Create unlimited journey maps right within your Jira projects</span><br />
                            <span>Research user's interactions with your product or service. Get a detailed understanding about their wants and needs.</span>
                        </div>
                            <div className={'half'}>
                        <img src='rc/RC3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                             alt="Journey Mapping Screenshot"/>
                        </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='rc/RC4.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                            <div className={'half'}><span className='Highlight'>Bring high level requirements into an understandable story format </span><br />
                                <span>Break down complex requirements and make them more readable to your team</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>Manage personas alongside your user journeys</span><br />
                                <span>Make your user journeys even more customer centric </span>
                            </div>
                            <div className={'half'}>
                                <img src='rc/RC6.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>



                    <FooterHero docUrl="https://docz.realignedtechnologies.com/readconfirmations" url="https://marketplace.atlassian.com/1221972" />

                </main>

            </div>
        </>);

}