import Menu from "./menu";
import {useState} from "react";
import Link from 'next/link'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header'>
            <nav role="navigation" aria-label="Main">
                <Link href="/"><a><img src="Realigned_Single.svg" alt="Realigned Logo"
                        className='Logo'/></a></Link>

                <Menu open={menuOpen} setOpen={setMenuOpen}/>
                <ul className='menu'>
                    <li><Link href="/products"><a>Products</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}