import Menu from "./menu";
import {useState} from "react";
import Link from 'next/link'

export const Items = () => (
    <ul>
        <li><Link href="/#products"><a>Products</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
)

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header'>
            <style jsx>
                {`
                .Logo {
                    width: 14rem;
                    margin-bottom: 0;
                    padding-top: 10px;
                }
                nav {
                    max-width: 60%;
                    padding-top: 0.5rem;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                @media only screen and (max-width: 1000px){
                    .Logo {
                        width: 14rem;
                        min-width: 0;
                    }
                    nav {
                        max-width: 95%;
                    }
                }
                `}
            </style>
            <nav role="navigation" aria-label="Main">
                <Link href="/"><a><img src="/images/RealignedLogo.svg" alt="Realigned Logo"
                        className='Logo'/></a></Link>

                <Menu open={menuOpen} setOpen={setMenuOpen}/>
                <div className='menu'>
                <Items />
                </div>
            </nav>
        </header>
    )
}