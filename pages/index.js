import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";
import Link from "next/link";
import NewCard from "../components/newcard";
import Hero from "../components/Hero";
import Section from "../components/Section";
import {useRouter} from "next/router";

const Flex = props => (
    <div style={{display: 'flex', flexDirection: props.column ? 'column' : 'row'}}>{props.children}</div>);
const Box = props => (
    <div style={{padding: 10, textAlign: props.centered ? 'center' : 'inherit'}}>{props.children}</div>);

const iconWidth = 80;

export default function Home() {

    const router = useRouter();

    return (
        <>
            <Header title="Home"
                description="Product Management and User Story Mapping Apps for Atlassian Jira"
                canonical={router.pathname}
            />
            <Section hasHero>
                <Navigation/>

                <main className='Main'>

                    <Hero
                        title='Story Mapping for Jira - Pro'
                        subtitle='Focus on user value & prioritize the right work'
                        image={                            <img src="/SMHighlight.png" alt="Story Maps Highlight Image" width="1162" height="713" style={{maxWidth:'800px',width:'80%',height:'auto',objectPosition:'center top',paddingTop:'1rem'}}/>
                        }
                        subtext={<HeroButton button1={{
                            title: 'Try it free',
                            href: 'https://marketplace.atlassian.com/1224417',
                            isBlank: true
                        }}
                                             button2={{title: 'Feature Overview', href: 'https://storymapping.app'}}/>} />

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
                        <style jsx>
                            {`
                                a {
                                    color: #4B5366;
                                    text-decoration: none;
                                }
                                a:hover {
                                    color: rgb(66, 153, 225);
                                    text-decoration: none;
                                }
                                `}
                        </style>
                        <h1>Confluence Apps</h1>

                        <span style={{textAlign:'center'}}>We have discontinued our Confluence apps.<br />
                            <Link href="/dc-discontinuation"><a>Read the announcement</a></Link>.</span>
                        <br />
                        <span id='confluence-products' style={{textAlign: 'center',marginTop:'1rem'}}>

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

                        </div></span>
                    </div>

                    <div className={'Content WithPadding'}>

                        <script src='https://www.google.com/recaptcha/api.js'></script>

                        <style>
                            {`
                            #drip-ef-542746920 h3 {font - size: 1.125rem; margin: 0 0 .375rem;}
                            #drip-ef-542746920 > div {margin - bottom: .75rem;}
                            #drip-ef-542746920 fieldset {border: none; margin: 0; padding: 0;}
                            #drip-ef-542746920 legend {margin: 0; padding: 0;}
                            #drip-ef-542746920 input[type="email"],
                            #drip-ef-542746920 input[type="number"],
                            #drip-ef-542746920 input[type="tel"],
                            #drip-ef-542746920 input[type="text"] {margin: 0; padding: .375rem .5625rem; width: 100%;}
                            #drip-ef-542746920 input[type="checkbox"],
                            #drip-ef-542746920 input[type="radio"] {margin: .1875rem .1875rem 0 0; padding: 0;}
                            #drip-ef-542746920 input[type="submit"] {margin: 0; padding: .375rem .5625rem;}
                            .formelement { padding: 1.5rem 0 0 0; } `}

                        </style>

                        <h1>Let's Keep In Touch!</h1>

                        <form style={{textAlign:'center'}} action="https://www.getdrip.com/forms/542746920/submissions" method="post" data-drip-embedded-form="542746920"
                              id="drip-ef-542746920">
                            <div data-drip-attribute="description">

                                    Sign up to stay informed on the latest app news.
                                <br />No spam, unsubscribe at any time.&nbsp;</div>

                            <div  className={'formelement'} style={{textAlign:'left'}}>
                                <label htmlFor="drip-email">Email Address</label><br />
                                <input type="email" id="drip-email" name="fields[email]" defaultValue="" />
                            </div>


                            <div style={{display: "none"}} aria-hidden="true">
                                <label htmlFor="website">Website</label><br />
                                <input type="text" id="website" name="website" tabIndex="-1" autoComplete="false" defaultValue="" />
                            </div>

                            <style jsx>
                                {`button {
                                background-color: #1774C8;
                                color: white;
                                border-radius: 5px;
                                font-size: 1rem;
                                padding: 0.5rem 1.5rem;
                                font-weight: 400;
                                border: 0;
                                cursor: pointer;
                            }`}
                            </style>
                            <div className={'formelement'}>
                                <button type="submit" data-drip-attribute="sign-up-button">Sign Up</button>
                            </div>
                        </form>

                    </div>


                </main>

                <Footer/>
            </Section>
        </>
    );
}
