import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function JourneyMapping() {

    return (
        <>
            <Header/>
            <div className='grid-container'>
                <Nav/>

                <Footer />

                <main className='Main'>
                    <div className='Hero' style={{flexDirection:'column',alignItems:'center'}}>

                        Connect user requirements to your Jira issues
                        <br />
                        <small>Get to know your users - and communicate user requirements more easily to your team</small>

                        <img src='JM1.png' style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                             alt="Journey Mapping Screenshot"/>


                        <div className='minor'>Want to learn more about Journey Mapping?<br /> Read the UX design series on our <a href='/blog'>Blog</a></div>

                    </div>


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                        <div className={'half'}><span className='Highlight'>Create unlimited journey maps right within your Jira projects</span><br />
                            <span>Research user's interactions with your product or service. Get a detailed understanding about their wants and needs.</span>
                        </div>
                            <div className={'half'}>
                        <img src='JM2.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                             alt="Journey Mapping Screenshot"/>
                        </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='JM3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
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
                                <img src='JM5.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>


                    <br />

                    <div className={'Hero'}>
                        <div>
                            Available on the Atlassian Marketplace<br />

                            <br />
                        <HeroButton button1={{title:'Try it free',href:'https://marketplace.atlassian.com/1223654',isBlank:true}}
                                    button2={{title:'Documentation',href:'/docs/journeymapping'}}/>
                        </div>
                    </div>

                </main>

            </div>
        </>);

}