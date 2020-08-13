export default function Menu({open, setOpen}) {

    return (<>
            <div id="menuToggle" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {open && <div id="menu">
                <ul>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>}
        </>
    );
}