import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";
import Link from "next/link";
import NewCard from "../components/newcard";

const Flex = props => (<div style={{display:'flex',flexDirection:props.column ? 'column' : 'row'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10,textAlign:props.centered ? 'center' : 'inherit'}}>{props.children}</div>);

const iconWidth = 80;

export default function Home() {

    return (
        <>
            <Header description="Next gen apps for Jira & Confluence. Realigned Technologies is building UX design and collaboration tools" />
            <div className='grid-container'>
                <Navigation />

                <main className='Main'>
                    <div className='Hero'>

                        <div style={{paddingRight:20}} className='icon'>
                            <picture>
                                <source srcSet="/jmIcon.webp" type="image/webp" />
                                <source srcSet="/jmIcon.png" type="image/png" />
                                <img src="/jmIcon.png" alt="Journey Maps Icon" style={{width:iconWidth}} />
                            </picture>
                        </div>
                       <div >
                           <span className="animate__animated animate__fadeInUp">Journey Mapping for Jira</span>
                        <br />
                        <p className='Subtext animate__animated animate__fadeInUp' style={{lineHeight:1.5}}>
                            Connect your customer journeys with your work items<br />

                            <small>Now available for Jira Cloud & On Premises</small>
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
                        <h1>Our Apps</h1>
                        <span id='products'><div className={'Demo'}>

                            <style jsx>
                                {`
                                  a:hover h3 {
                                    color: #074492;
                                  }
                                `}
                            </style>

                            <Link href="/journeymapping"><a><NewCard>
                                <Flex column>
                                    <Box centered> <picture>
                                          <source srcSet="/jmIcon.webp" type="image/webp" />
                                          <source srcSet="/jmIcon.png" type="image/png" />
                                          <img src="/jmIcon.png" alt="Journey Maps Icon" style={{width:iconWidth}} />
                                        </picture></Box>
                                    <Box centered><h3>Journey Mapping<br /> for Jira</h3></Box>
                                </Flex>
                            </NewCard></a></Link>

                             <Link href="/readconfirmations"><a><NewCard>

                                <Flex column>
                                    <Box centered>
                                        <picture>
                                          <source srcSet="/rc/rcIconNew.webp" type="image/webp" />
                                          <source srcSet="/rc/rcIconNew.png" type="image/png" />
                                          <img src="/rc/rcIconNew.png" alt="Read Confirmations Icon" style={{width:iconWidth}} />
                                        </picture></Box>
                                    <Box centered><h3>Read Confirmations<br /> for Confluence</h3></Box>
                                </Flex>

                            </NewCard></a></Link>
                            <Link href="/enhancedsharing"><a><NewCard>
                                <Flex column>
                                    <Box centered>
                                         <picture>
                                          <source srcSet="/ESIcon.webp" type="image/webp" />
                                          <source srcSet="/ESIcon.png" type="image/png" />
                                          <img src="/ESIcon.png" alt="Enhanced Sharing Icon" style={{width:iconWidth}} />
                                        </picture></Box>
                                    <Box centered><h3>Enhanced Sharing<br /> for Confluence</h3></Box>
                                </Flex>
                            </NewCard></a></Link>
                            <Link href="/personaldashboards"><a><NewCard>
                                <Flex column>
                                    <Box centered>
                                        <picture>
                                          <source srcSet="/pdIcon.webp" type="image/webp" />
                                          <source srcSet="/pdIcon.png" type="image/png" />
                                          <img src="/pdIcon.png" alt="Personal Dashboards Icon" style={{width:iconWidth}} />
                                        </picture></Box>
                                    <Box centered><h3>Personal Dashboards<br /> for Confluence</h3></Box>
                                </Flex>
                            </NewCard></a></Link>

                            {false && <Link href="/personas"><a><Card>
                                <Flex>
                                    <Box><img src='psIcon.webp' alt="Personas Icon" style={{width:iconWidth}} /></Box>
                                    <Box><h2>Persona Manager<br /> for Jira</h2></Box>
                                </Flex>
                            </Card></a></Link>}


                        </div></span>
                    </div>

                </main>

                <Footer />
            </div>
        </>
);
}
