import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import Availability from "../components/Availability";
import Link from "next/link";
import Section from "../components/Section";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function PersonalDashboards() {

    return (
        <>
            <Header description="Personalize your Confluence dashboards with the Personal Dashboards for Confluence - free of charge on the Atlassian Marketplace" />

            <Section hasHero>
                <Navigation/>

                <Footer />

                <main className='Main'>
                    <Hero
                        title='Personalize your Confluence Dashboard'
                        subtitle='Manage dashboards easily with our free app'
                        image={<img src='PD3.png' loading="lazy" style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                                    alt="Personal Dashboards Screenshot"/>}
                        subtext='' />


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><h1>Meet the Dashboard Manager</h1>
                                <span>With the Dashboard Manager you can keep all your dashboards in one place.
                                Manage dashboards with a few clicks and set them as your Confluence landing page</span>
                            </div>
                            <div className={'half'}>
                                <img src='PD1.png' loading="lazy" style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Personal Dashboards Screenshot"/>
                            </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='PD2.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Personal Dashboards Screenshot"/>
                            </div>
                            <div className={'half'}><h1>Switch dashboards on the fly </h1>
                                <span>Switch between your dashboards right on the Confluence home page</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><h1>You are in control</h1>
                                <span>Use any page as your Confluence dashboard - unlock all of Confluence powerful macros
                                to style your landing pages</span>
                            </div>
                            <div className={'half'}>
                                <img src='PD3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Personal Dashboards Screenshot"/>
                            </div>
                        </div>

                    </div>


                    <Availability server dc text={<>Available for Confluence Server and Data Center - <br />
                        totally free!</>} />

                    <FooterHero alternate docUrl="https://docz.realignedtechnologies.com/personaldashboards" url="https://marketplace.atlassian.com/1221672" />


                </main>

            </Section>
        </>);

}
