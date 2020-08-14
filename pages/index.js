import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Nav from "../components/nav";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";
import Card from "../components/card";

export default function Home() {

    return (
        <>
            <Header />
            <div className='grid-container'>
                <Nav />

                <main className='Main'>
                    <div className='Hero'>
                       <div>
                           Get more out of Confluence & Jira
                        <br />
                        <p className='Subtext'>
                            With our Apps from the Atlassian Marketplace
                        </p>
                        <br /><HeroButton />
                       </div>
                    </div>
                    <div className='Content'>
                        <div style={{textAlign:'center'}}>
                            Products
                            <div className={'Products'}>
                                <Card>
                                    <img src={require('../public/minES.png?resize&size=300')} alt="Enhanced Sharing Preview" />
                                    <br />
                                    <p>Enhanced Sharing for Confluence</p>
                                </Card>
                                <Card>
                                    <img src={require('../public/minRC.png?resize&size=300')} alt="Read Confirmations Preview" />
                                    <br />
                                    <p>Read Confirmations for Confluence</p>
                                </Card>
                                <Card>
                                    <img src={require('../public/minPD.png?resize&size=300')} alt="Personal Dashboards Preview" />
                                    <br />
                                    <p>Personal Dashboards for Confluence</p>
                                </Card>
                            </div>

                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}