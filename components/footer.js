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
                    <li><Link href="/privacy">
                        <a>Services</a>
                    </Link></li>
                    <li><Link href="/privacy">
                        <a>Support</a>
                    </Link></li>
                </ul>
            </nav><br />

            &copy; 2020 Realigned Technologies Ltd<br/>
        </footer>
    )
}