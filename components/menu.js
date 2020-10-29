import {Items} from "./nav";

export default function Menu({open, setOpen}) {

    return (<>
            <style jsx>
                {`
                .menuToggle {
                 cursor: pointer;
                 display: none;
                 }
                .menuToggle span {
                  display: block;
                  width: 33px;
                  height: 4px;
                  margin-bottom: 5px;
                  margin-right: 10px;
                  position: relative;
                  
                  background: #fff;
                  border-radius: 3px;
                  
                  z-index: 1;
                  
                  transform-origin: 4px 0px;
                  
                  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                              opacity 0.55s ease;
                }
                
                .mobilemenu {
                    position: absolute;
                    width: 250px;
                    top: 0;
                    right: 0;
                    height: 100%;
                    background: #013373;
                    list-style-type: none;
                    -webkit-font-smoothing: antialiased;
                    z-index: 100;
                }
                               
                @media only screen and (max-width: 1000px){
                  .menu {
                    display: none;
                  }
                  .menuToggle {
                    display: block;
                  }
                
                }
                `}
            </style>
            <style jsx global>
                {`
                 .mobilemenu ul {
                    list-style: none;
                    display: flex;
                    padding-left: 20px;
                    padding-bottom: 10px;
                    flex-direction: column;
                }
                `}
            </style>
            <div className="menuToggle" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {open && <div className="mobilemenu" onClick={() => setOpen(!open)}>
               <Items />
            </div>}
        </>
    );
}