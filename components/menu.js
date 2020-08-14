import {Items} from "./nav";

export default function Menu({open, setOpen}) {

    return (<>
            <div id="menuToggle" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {open && <div id="menu" onClick={() => setOpen(!open)}>
               <Items />
            </div>}
        </>
    );
}