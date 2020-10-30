import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";
import Link from "next/link";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function Home() {

    return (
        <>
            <Header description="Next gen apps for Jira & Confluence. Realigned Technologies is building UX design and collaboration tools" />
            <div className='grid-container'>
                <Navigation />

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
                            <a href="https://marketplace.atlassian.com/vendors/1213963/realigned-technologies-ltd" rel="noopener" target="_blank">
                                <img className='MP' src='marketplace.svg' alt="Available on the Atlassian Marketplace" style={{marginTop:15}}  /></a>

                        </div>
                    </div>
                    <div className='Content WithPadding'>
                        <h2>Apps for Jira</h2>
                        <span id='products'><div className={'Demo'}>


                            <Link href="/journeymapping"><a><Card>
                                <Flex>
                                    <Box><img src='jmIcon.webp' alt="Journey Mapping Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h3>Journey Mapping<br /> for Jira</h3></Box>
                                </Flex>
                            </Card></a></Link>

                            {false && <Link href="/personas"><a><Card>
                                <Flex>
                                    <Box><img src='psIcon.webp' alt="Personas Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Persona Manager<br /> for Jira</h2></Box>
                                </Flex>
                            </Card></a></Link>}


                        </div></span>
                    </div>
                    <div className={'Content White WithPadding'}>

                        <h2>Apps for Confluence</h2>
                        <div className={'Demo'}>
                            <Link href="/readconfirmations"><a><Card>

                                <Flex>
                                    <Box><img src='rcIcon.webp' alt="Read Confirmations Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h3>Read Confirmations<br /> for Confluence</h3></Box>
                                </Flex>

                            </Card></a></Link>
                            <Link href="/enhancedsharing"><a><Card>
                                <Flex>
                                    <Box><img src='ESIcon.webp' alt="Enhanced Sharing Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h3>Enhanced Sharing<br /> for Confluence</h3></Box>
                                </Flex>
                            </Card></a></Link>
                            <Link href="/personaldashboards"><a><Card>
                                <Flex>
                                    <Box><img src='pdIcon.webp' alt="Personal Dashboards Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h3>Personal Dashboards<br /> for Confluence</h3></Box>
                                </Flex>
                            </Card></a></Link>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}