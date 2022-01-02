import {Items} from "./Navigation";

export default function Menu({open, setOpen, isWhite}) {

    return (<>
            <style jsx global>
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
                  
                  background-color: ${isWhite ? '#4B5366' : '#fff'};
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
                    background-color: rgba(250,250,250,1);
                    color: #6b7280;
                    list-style-type: none;
                    -webkit-font-smoothing: antialiased;
                    z-index: 100;
                    border-left: 1px solid lightgrey;
                }
                .mobilemenu ul {
                    list-style: none;
                    display: flex;
                    padding-left: 20px;
                    padding-bottom: 10px;
                    flex-direction: column;
                    margin-top: 40px;
                }
                .mobilemenu li {
                    margin: 4px;
                }
                          
                a {
                    cursor: pointer;
                    color: #4B5366;
                    text-decoration: none;
                }
                a:hover {
                    color: rgb(66, 153, 225);
                    text-decoration: none;
                }     
                @media only screen and (max-width: 1000px){
                  .menu {
                    display: none;
                  }
                  .menuToggle {
                    display: flex;
                    align-items: center;
                  }
                  a {
                    cursor: pointer;
                    color: #4B5366;
                    text-decoration: none;
                }
                a:hover {
                    color: rgb(66, 153, 225);
                    text-decoration: none;
                }  
                
                }
                `}
            </style>
            <div className="menuToggle" onClick={() => setOpen(!open)}>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {open && <div className="mobilemenu" onClick={() => setOpen(!open)}>
                <div style={{position: 'absolute', bottom: 20, right: 20}}><a>Close</a></div>
                <Items isWhite />
            </div>}
        </>
    );
}