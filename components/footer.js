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
                        <a href="https://realigned.ch">Services</a>
                    </li>
                    <li>
                        <a href="https://realignedtechnologies.atlassian.net/servicedesk/customer/portals"
                           target="_blank">Support</a>
                    </li>
                </ul>
            </nav>
            <br/>

            &copy; 2020 Realigned Technologies Ltd<br/>
        </footer>
    )
}