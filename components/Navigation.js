import Menu from "./menu";
import {useState} from "react";
import Link from 'next/link'

export const Items = ({isWhite}) => {
    return (<>
        <style jsx>
            {`
                a {
                    ${isWhite ? 'color: #4B5366;' : 'color: #fff;'}
                    text-decoration: none;
                }
                a:hover {
                    ${isWhite ? 'color: rgb(66, 153, 225);' : 'color: rgb(10, 198, 255);'}
                text-decoration: none;
                }
                `}
        </style>
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/#products"><a>Products</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
        </>
)
}

export default function Navigation({isWhite}) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header' style={{background: isWhite ? 'rgba(250,250,250,1)' : ''}}>
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
                    align-items: flex-end;
                                   
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
                <Link href="/"><a><img src={isWhite ? `/images/BlackOnWhite.svg` : `/images/RealignedLogo.svg`}
                                       alt="Realigned Logo"
                                       className='Logo'/></a></Link>

                <Menu open={menuOpen} setOpen={setMenuOpen}/>
                <div className='menu'>
                    <Items isWhite={isWhite}/>
                </div>
            </nav>
        </header>
    )
}