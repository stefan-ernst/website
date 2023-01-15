import Link from "next/link";

export default function Footer() {

    return (<>
            <style jsx>
                {`
                footer {
                    color: #4B5366;                    
                    border-top: 1px solid lightgrey;
                    background: rgba(250,250,250,1);
                }
                a {
                    color: #4B5366;
                    text-decoration: none;
                }
                a:hover {
                    color: rgb(66, 153, 225);
                    text-decoration: none;
                }
                `}
            </style>
            <footer className='Footer'>

                <nav aria-label="Footer">
                    <ul>
                        <li>
                            <Link href="/privacy">
                                <a>Privacy</a>
                            </Link></li>
                        <li>
                            <a rel="noopener" href="https://realigned.ch">Services</a>
                        </li>
                        <li>
                            <a rel="noopener"
                               href="https://realignedtechnologies.atlassian.net/servicedesk/customer/portals"
                               target="_blank">Support</a>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Imprint</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <br/>

                <div className={'pureflex center middle'}><img src="/Swiss.svg" alt="Swiss Flag Icon"
                                                               style={{width: 24, height: 24}}/>
                    <div>&nbsp;&nbsp; Software made in Switzerland</div>
                </div>
                <br/><br/>

                &copy; 2023 Realigned Technologies Ltd<br/>

            </footer>
        </>
    )
}