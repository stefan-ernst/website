import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";
import Link from "next/link";
import NewCard from "../components/newcard";

const Flex = props => (
    <div style={{display: 'flex', flexDirection: props.column ? 'column' : 'row'}}>{props.children}</div>);
const Box = props => (
    <div style={{padding: 10, textAlign: props.centered ? 'center' : 'inherit'}}>{props.children}</div>);

const iconWidth = 80;

export default function Home() {

    return (
        <>
            <Header
                description="Next gen apps for Jira & Confluence. Realigned Technologies is building UX design and collaboration tools"/>
            <div className='grid-container'>
                <Navigation/>

                <main className='Main'>
                    <div className='Hero'>

                        <div style={{textAlign:'center'}}>
                            <span className="animate__animated animate__fadeInUp">Story Mapping for Jira - Pro</span>
                            <br/>
                            <p className='Subtext animate__animated animate__fadeInUp' style={{lineHeight: 1.5}}>
                                Focus on user value & prioritize the right work
                                <br/>

                                <picture>
                                    <source srcSet="/SMHighlight.webp" type="image/webp"/>
                                    <source srcSet="/SMHighlight.png" type="image/png"/>
                                    <img src="/SMHighlight.png" alt="Story Maps Highlight Image" style={{width: 600,paddingTop:'1rem'}}/>
                                </picture><br />
                                <small>Now available for Jira Cloud & Server & DC</small>
                            </p><HeroButton button1={{
                            title: 'Try it free',
                            href: 'https://marketplace.atlassian.com/1224417',
                            isBlank: true
                        }}
                                             button2={{title: 'Feature Overview', href: 'https://storymapping.app'}}/>
                        </div>


                    </div>
                    <div className='Content White nopadding'>
                        <div style={{textAlign: 'center'}}>

                            <span>Available on the</span> <br/>
                            <a href="https://marketplace.atlassian.com/vendors/1213963/realigned-technologies-ltd"
                               rel="noopener" target="_blank">
                                <img className='MP' src='marketplace.svg' alt="Available on the Atlassian Marketplace"
                                     style={{marginTop: 15}}/></a>

                        </div>
                    </div>
                    <div className='Content WithPadding'>
                        <h1>Jira Apps</h1>
                        <span id='products' style={{textAlign: 'center'}}>

                            <style jsx>
                                {`
                                  a:hover h3 {
                                    color: #074492;
                                  }
                                `}
                            </style>


                            <div className={'Demo'}>
                            <Link href="https://storymapping.app"><a><NewCard>
                                <Flex column>
                                    <Box centered> <picture>
                                          <source srcSet="/smProIcon.png" type="image/png"/>
                                          <img src="/smProIcon.png" alt="Story Maps Icon" style={{width: iconWidth}}/>
                                        </picture></Box>
                                    <Box centered><h3>Story Mapping<br/> for Jira</h3></Box>
                                </Flex>
                            </NewCard></a></Link>

                            <Link href="https://journeymapping.app"><a><NewCard>
                                <Flex column>
                                    <Box centered> <picture>
                                          <source srcSet="/jmIcon.png" type="image/png"/>
                                          <img src="/jmIcon.png" alt="Journey Maps Icon" style={{width: iconWidth}}/>
                                        </picture></Box>
                                    <Box centered><h3>Journey Mapping<br/> for Jira</h3></Box>
                                </Flex>
                            </NewCard></a></Link>

                            <Link href="https://betterpersonas.app"><a><NewCard>
                            <Flex column>
                                <Box centered><img src='PersonaAppIcon.png' alt="Personas Icon" style={{width: iconWidth}}/></Box>
                                <Box centered><h3>Personas for Jira</h3></Box>
                            </Flex>
                        </NewCard></a></Link>
                            </div>
                        </span>
                    </div>
                    <div className='Content White WithPadding'>
                        <h1>Confluence Apps</h1>

                        <span id='confluence-products' style={{textAlign: 'center'}}>

                    <div className={'Demo'}>

                             <Link href="/readconfirmations"><a><NewCard>

                                <Flex column>
                                    <Box centered>
                                        <picture>
                                          <source srcSet="/rcIcon.png" type="image/png"/>
                                          <img src="/rcIcon.png" alt="Read Confirmations Icon"
                                               style={{width: iconWidth}}/>
                                        </picture></Box>
                                    <Box centered><h3>Read Confirmations<br/> for Confluence</h3></Box>
                                </Flex>

                            </NewCard></a></Link>
                            <Link href="/enhancedsharing"><a><NewCard>
                                <Flex column>
                                    <Box centered>
                                         <picture>
                                          <source srcSet="/esIcon.png" type="image/png"/>
                                          <img src="/esIcon.png" alt="Enhanced Sharing Icon"
                                               style={{width: iconWidth}}/>
                                        </picture></Box>
                                    <Box centered><h3>Enhanced Sharing<br/> for Confluence</h3></Box>
                                </Flex>
                            </NewCard></a></Link>
                            <Link href="/personaldashboards"><a><NewCard>
                                <Flex column>
                                    <Box centered>
                                        <picture>
                                          <source srcSet="/PersonalDashboards.png" type="image/png"/>
                                          <img src="/PersonalDashboards.png" alt="Personal Dashboards Icon"
                                               style={{width: iconWidth}}/>
                                        </picture></Box>
                                    <Box centered><h3>Personal Dashboards<br/> for Confluence</h3></Box>
                                </Flex>
                            </NewCard></a></Link>

                        {false && <Link href="/personas"><a><Card>
                            <Flex>
                                <Box><img src='psIcon.webp' alt="Personas Icon" style={{width: iconWidth}}/></Box>
                                <Box><h2>Persona Manager<br/> for Jira</h2></Box>
                            </Flex>
                        </Card></a></Link>}


                        </div></span>
                    </div>


                </main>

                <Footer/>
            </div>
        </>
    );
}
