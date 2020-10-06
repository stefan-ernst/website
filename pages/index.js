import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function Home() {

    return (
        <>
            <Header />
            <div className='grid-container'>
                <Nav />

                <main className='Main'>
                    <div className='Hero'>

                        <div style={{paddingRight:20}}>
                            <img src='jmIcon.webp' alt="Journey Mapping Icon" style={{width:'5rem'}} />
                        </div>
                       <div >
                           <span className="animate__animated animate__fadeInUp">Journey Mapping for Jira</span>
                        <br />
                        <p className='Subtext animate__animated animate__fadeInUp' style={{lineHeight:1.5}}>
                            Connect your customer journeys with your work items<br />

                            <small>Now available for Jira Server</small>
                        </p>
                        <br /><HeroButton button1={{title:'Try it free',href:'https://marketplace.atlassian.com/1223654',isBlank:true}}
                       button2={{title:'Feature Overview',href:'/journeymapping'}}/>
                       </div>


                    </div>
                    <div className='Content White nopadding'>
                        <div style={{textAlign:'center'}}>

                            <span>Available on the</span> <br />
                            <a href="https://marketplace.atlassian.com/vendors/1213963/realigned-technologies-ltd" rel="noopener" target="_blank"><img class='MP' src='marketplace.svg' style={{marginTop:15}} alt="Atlassian Marketplace Logo" /></a>

                        </div>
                    </div>
                    <div className='Content WithPadding'>
                        <div className={'Highlight'}>Apps for Jira</div>
                        <a id='products'><div className={'Demo'}>


                            <a href="/journeymapping"><Card>
                                <Flex>
                                    <Box><img src='jmIcon.webp' alt="Journey Mapping Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Journey Mapping<br /> for Jira</h2></Box>
                                </Flex>
                            </Card></a>


                        </div></a>
                    </div>
                    <div className={'Content White WithPadding'}>

                        <div className={'Highlight'}>Apps for Confluence</div>
                        <div className={'Demo'}>
                            <a href="/readconfirmations"><Card>

                                <Flex>
                                    <Box><img src='rcIcon.webp' alt="Read Confirmations Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Read Confirmations<br /> for Confluence</h2></Box>
                                </Flex>

                            </Card></a>
                            <a href="/enhancedsharing"><Card>
                                <Flex>
                                    <Box><img src='ESIcon.webp' alt="Enhanced Sharing Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Enhanced Sharing<br /> for Confluence</h2></Box>
                                </Flex>
                            </Card></a>
                            <a href="/personaldashboards"><Card>
                                <Flex>
                                    <Box><img src='pdIcon.webp' alt="Personal Dashboards Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Personal Dashboards<br /> for Confluence</h2></Box>
                                </Flex>
                            </Card></a>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}