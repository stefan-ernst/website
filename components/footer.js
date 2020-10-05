import Link from "next/link";

export default function Footer() {

    return (
        <footer className='Footer'>
            <nav aria-label="Footer">
                <ul className='menu'>
                    <li>
                        <Link href="/privacy">
                            <a>Privacy</a>
                        </Link></li>
                    <li>
                        <a rel="noopener" href="https://realigned.ch">Services</a>
                    </li>
                    <li>
                        <a rel="noopener" href="https://realignedtechnologies.atlassian.net/servicedesk/customer/portals"
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

            <div className={'flex'}><img src="/Swiss.svg" style={{width:24}} /> <div>&nbsp;&nbsp; Software made in Switzerland</div></div>
            <br />

            &copy; 2020 Realigned Technologies Ltd<br/>

        </footer>
    )
}