import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import FooterHero from "../components/FooterHero";

const Flex = props => (<div style={{display:'flex'}}>{props.children}</div>);
const Box = props => (<div style={{padding:10}}>{props.children}</div>);

const iconWidth = 80;

export default function PersonalDashboards() {

    return (
        <>
            <Header/>
            <div className='grid-container'>
                <Nav/>

                <Footer />

                <main className='Main'>
                    <div className='Hero' style={{flexDirection:'column',alignItems:'center'}}>

                        Don't lose track of the pages you share
                        <br />
                        <small>Keep everything under control - especially when sharing to larger groups</small>

                        <img src='PD3.png' style={{marginTop: 50, marginBottom: 40, width:'80%',maxWidth:800}}
                             alt="Enhanced Sharing Screenshot"/>


                    </div>


                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>Works seamlessly with Confluence</span><br />
                                <span>We integrate behind the scenes, so you can use Confluence's native sharing dialog and invite
                                people to work on the same document - just as before.</span>
                            </div>
                            <div className={'half'}>
                                <img src='PD1.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>

                    <div className='Content' style={{flexDirection:'column'}}>
                        <div className={'flex container'}>

                            <div className={'half'}>
                                <img src='PD2.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                            <div className={'half'}><span className='Highlight'>See your shared pages in your user profile </span><br />
                                <span>So you can be sure the information has been delivered safe and sound</span>
                            </div>
                        </div>

                    </div>

                    <div className='Content White' style={{flexDirection:'column'}}>

                        <div className={'flex container'}>
                            <div className={'half'}><span className='Highlight'>As an admin -<br /> be always in control</span><br />
                                <span>See what users have shared - inside and outside of your organisation</span>
                            </div>
                            <div className={'half'}>
                                <img src='PD3.png' style={{marginTop: 50,width:'100%',maxWidth:800}}
                                     alt="Journey Mapping Screenshot"/>
                            </div>
                        </div>

                    </div>

                    <FooterHero docUrl="https://docz.realignedtechnologies.com/enhancedsharing" url="https://marketplace.atlassian.com/1219996" />


                </main>

            </div>
        </>);

}