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
                        <Link href="/privacy">
                            <a>Imprint</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <br/>

            &copy; 2020 Realigned Technologies Ltd<br/><br />
            <small><a href="https://www.freepik.com" rel="noopener" target="_blank">Illustrations by - www.freepik.com</a></small>
        </footer>
    )
}