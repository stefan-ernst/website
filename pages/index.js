import Styles from "./styles";
import Head from "next/head";
import Divider from "./components/divider";
import Menu from "./components/menu";
import {useState} from "react";

export default function Home() {

    const [menuOpen,setMenuOpen] = useState(false);

    return (
        <div className='grid-container'>

            <Head>
                <link rel="shortcut icon" href="/iconblue.png" />
                <title>User Journeys App</title>
            </Head>
            <style jsx>{`
            .container {
              min-height: 100vh;
            }
            `}</style>

            <Styles />

            <div className='Header'>
                <nav>
                    <object data="Realigned_Single.svg" alt="Realigned Logo" type="image/svg+xml" className='Logo' />

                    <Menu open={menuOpen} setOpen={setMenuOpen} />
                    <ul className='menu'>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className='Main'>
                <div className='Hero'>

                    Here is some white text in the hero
                </div>
                <br />
                <div className='Slant'>

                </div>


            </div>

            <div className='Footer'>
                &copy; 2020 Realigned Technologies Ltd<br />
            </div>
            </div>
    );
}