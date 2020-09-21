import {useState} from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Nav from "../components/nav";
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
                    <div className='Content White'>
                        <div style={{textAlign:'center'}}>

                            <span>Available on the</span> <br />
                            <img class='MP' src='marketplace.svg' style={{marginTop:15}} alt="Atlassian Marketplace Logo" />

                        </div>
                    </div>
                    <div className='Content WithPadding'>
                        <div className={'Demo'}>


                            <Card>
                                <Flex>
                                    <Box><img src='jmIcon.png' style={{width:iconWidth}} /></Box>
                                    <Box><h2>Journey Mapping<br /> for Jira</h2></Box>
                                </Flex>
                            </Card>
                            <Card>

                                <Flex>
                                    <Box><img src='rcIcon.png' style={{width:iconWidth}} /></Box>
                                    <Box><h2>Read Confirmations<br /> for Confluence</h2></Box>
                                </Flex>

                            </Card>
                            <Card>
                                <Flex>
                                    <Box><img src='ESIcon.png' style={{width:iconWidth}} /></Box>
                                    <Box><h2>Enhanced Sharing<br /> for Confluence</h2></Box>
                                </Flex>
                            </Card>
                            <Card>
                                <Flex>
                                    <Box><img src='pdIcon.png' style={{width:iconWidth}} /></Box>
                                    <Box><h2>Personal Dashboards<br /> for Confluence</h2></Box>
                                </Flex>
                            </Card>

                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}