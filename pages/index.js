import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";
import Link from "next/link";

export default function Home() {

    return (
        <>
            <Header />
            <div className='grid-container'>
                <Nav />

                <main className='Main'>
                    <div className='Hero'>
                       <div >
                           <span className="animate__animated animate__fadeInUp">Driving efficiency</span>
                        <br />
                        <p className='Subtext animate__animated animate__fadeInUp'>
                            With our Apps from the Atlassian Marketplace
                        </p>
                        <br /><HeroButton />
                       </div>
                    </div>
                    <div className='Content'>
                        <div style={{textAlign:'center'}}>
                            <a name='products'></a> Products
                            <div className={'Products'}>
                                <Link href="/enhancedsharing"><a> <Card>
                                    <img src='ES.png' alt="Enhanced Sharing Illustration" />
                                    <br />
                                    <p className='standard'>Enhanced Sharing for Confluence</p>
                                </Card></a></Link>
                                <Card>
                                    <img src='RC.png' alt="Read Confirmations Illustration" />
                                    <br />
                                    <p>Read Confirmations for Confluence</p>
                                </Card>
                                <Card>
                                    <img src='PD.png' alt="Personal Dashboards Illustration" />
                                    <br />
                                    <p>Personal Dashboards for Confluence</p>
                                </Card>
                            </div>

                            <br /><br />
                            <small className={'Subtext MP'}>Available on the</small> <br />
                            <img class='MP' src='marketplace.svg' style={{marginTop:15}} alt="Atlassian Marketplace Logo" />

                            <br /><br />

                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}