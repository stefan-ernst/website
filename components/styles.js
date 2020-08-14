export default function Styles() {

    return (<>
            <style jsx global>{`
            html {
              font-size: 100%;
            }
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              background-color: #f5f5f5;
              padding: 0;
              color: white;
            }
            a {
                color: white;
                text-decoration: none;
            }
            a:hover {
                color: rgba(43,147,228,1);
                text-decoration: none;
            }
            .grid-container {
              min-height: 100vh;
              display: grid;
              grid-template-columns: 0.9fr 1.1fr 1fr 1fr 1fr;
              grid-template-rows: 80px 2.3fr 0.4fr;
              gap: 0px 0px;
              grid-template-areas: "Header Header Header Header Header" "Main Main Main Main Main" "Footer Footer Footer Footer Footer";
            }
            
            .Header { grid-area: Header;
             background-color: #142533;
             border-bottom: 1px solid white;
             font-size: 0.9rem;
             padding: 0.5rem;
             }
             
             #menuToggle {
             cursor: pointer;
             display: none;
             }
             #menuToggle span {
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              
              background: #fff;
              border-radius: 3px;
              
              z-index: 1;
              
              transform-origin: 4px 0px;
              
              transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                          background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                          opacity 0.55s ease;
            }
            
            #menu {
                position: absolute;
                width: 200px;
                top: 50px;
                right: 0;
                height: calc(100vh - 50px);
                background: #000;
                list-style-type: none;
                -webkit-font-smoothing: antialiased;
            }
            #menu ul {
                list-style: none;
                display: block;
                padding-left: 20px;
                padding-bottom: 10px;
            }
            .Footer { 
                grid-area: Footer;
                border-top: 1px solid white;
                background-color: #142533;
                color: #aaaaaa;
                font-size: 1rem;
                padding: 1rem;
                text-align: center;
            }
            .Main { 
                grid-area: Main;
                font-weight: 300;
            }
            
            .Content {
                display: flex;
                align-items: center;
                font-size: 2rem;
                justify-content: center;
                padding: 4rem 1rem 4rem 1rem;
                background-color: #f5f5f5;
                color: #1D222D;
            }
            .Products {
              display: flex;
              margin-top: 2rem;
            }
            .Blue {
                background-color: rgba(43,147,228,1);
            }
            .Logo {
                width: 9rem;
            }
            .Hero {
                display: flex;
                align-items: center;
                font-size: 2rem;
                justify-content: center;
                padding: 4rem 1rem 4rem 1rem;
                background-color: rgba(43,147,228,0.87);
                background-image: linear-gradient(365deg, rgba(43,147,228,0.87) 22%, rgba(14,39,62,0.92) 87%);
            }
            .Subtext  {
                font-size: 1.3rem;
            }
            .Hero div {
                padding: 0.4rem;
            }
            nav {
                font-size: 1rem;
                max-width: 65%;
                display: flex;
                margin: auto;
                justify-content: space-between;
                align-items: center;
            }
            nav ul {
                list-style: none;
                display: flex;
                padding-left: 0px;
            }
            nav li {
                padding: 0.5rem;
            }
            .Footer nav {
                display: inline-block;
            }
              @media only screen and (max-width: 1000px){
                  .Main { grid-area: Main;
                    font-size: 1.5rem;
                    min-height: 900px;
                  }
                  .Logo {
                    width: 8rem;
                  }
                  .Products {
                    flex-direction: column;
                  }
                  .Hero {
                  text-align: center;
                  }
                  nav {
                  max-width: 100%;
                  }
                  html, body {
                      min-height: 100%;
                      min-height: -webkit-fill-available;
                      
                  }
                  .grid-container {
                      display: grid;
                      grid-template-columns: 1fr;
                      grid-template-rows: 50px 1fr 90px;
                      gap: 0px 0px;
                      grid-template-areas: "Header" "Main" "Footer";
                    }
                  .menu {
                    display: none;
                  }
                  #menuToggle {
                    display: block;
                  }
                }
              
            * {
              box-sizing: border-box;
            }
            
          `}</style>
        </>
    )
}