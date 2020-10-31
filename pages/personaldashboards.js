import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import Availability from "../components/Availability";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function PersonalDashboards() {

    return (
        <>
            <Header description="Personalize your Confluence dashboards with the Personal Dashboards for Confluence - free of charge on the Atlassian Marketplace" />
            <div className='grid-container'>
                <Navigation/>

                <Footer />

                <main className='Main'>
                    <Hero
                        title='Personalize your Confluence Dashboard'
                        subtitle='Manage dashboards easily with our free app'
                        image={<img src='PD3.png' loading="lazy" style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                                    alt="Enhanced Sharing Screenshot"/>}
                        subtext='' />


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><h1>Works seamlessly with Confluence</h1>
                                <span>We integrate behind the scenes, so you can use Confluence's native sharing dialog and invite
                                people to work on the same document - just as before.</span>
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
                            <div className={'half'}><h1>See your shared pages in your user profile </h1>
                                <span>So you can be sure the information has been delivered safe and sound</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><h1>As an admin -<br /> be always in control</h1>
                                <span>See what users have shared - inside and outside of your organisation</span>
                            </div>
                            <div className={'half'}>
                                <img src='PD3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Personal Dashboards Screenshot"/>
                            </div>
                        </div>

                    </div>


                    <Availability server text={<>Available for Confluence Server - <br />
                        Let us know if you want to see other platforms!</>} />

                    <FooterHero alternate docUrl="https://docz.realignedtechnologies.com/personaldashboards" url="https://marketplace.atlassian.com/1221672" />


                </main>

            </div>
        </>);

}