export default function Styles() {

    return (<>
            <style jsx global>{`
            html {
              font-size: 100%;
            }
            body {
              margin: 0;
              font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
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
              grid-template-rows: 100px 2.3fr 0.4fr;
              gap: 0px 0px;
              grid-template-areas: "Header Header Header Header Header" "Main Main Main Main Main" "Footer Footer Footer Footer Footer";
            }
            .content {
              grid-template-areas: "Header Header Header Header Header" ". Main Main Main ." "Footer Footer Footer Footer Footer";
            }
            
            .Header { grid-area: Header;
             background-color: #1A4970;
             border-bottom: 1px solid white;
             font-size: 0.9rem;
             padding: 0.5rem;
             padding-top: 1rem;
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
                height: calc(100% - 50px);
                background: #1A4970;
                list-style-type: none;
                -webkit-font-smoothing: antialiased;
                z-index: 100;
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
                background-color: #1A4970;
                color: #f5f5f5;
                font-size: 1rem;
                padding: 1rem;
                text-align: center;
            }
            .pluginIcon {
                margin-right: 20px;
                width: 80px;
            }
            .Main { 
                grid-area: Main;
                font-weight: 300;
            }
            ul.standard {
                padding: 0;
                margin: 0;
                list-style: none;
            }
            ul.standard li {
                padding: 0.5rem;
            }
            .Demo {
                display: flex;
                width:60%;
                margin:auto;
                align-items:flex-start;
            }
            .DemoNav {
                border-right: 1px solid #1d1d1d;
                padding: 1rem;
            }
            .DemoContent {
                padding: 2rem;
                padding-top: 1rem;
            }
            .DemoContent h1, h2, h3, h4 {
                margin: 0;
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
            
            .Document {
                font-size: 1rem;
                color: #1D222D;
                padding: 1rem 3rem 1rem 3rem;
                text-align: justify;
                font-weight: normal;
            }
            .Products {
              display: flex;
              margin-top: 2rem;
            }
            .Blue {
                background-color: rgba(43,147,228,1);
            }
            .Logo {
                width: 12rem;
            }
            .Hero {
                position: relative;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                font-size: 3rem;
                justify-content: center;
                font-weight: 300;
                padding: 7rem 1rem 9rem 1rem;
                background-color: rgba(43,147,228,0.87);
                background-image: linear-gradient(345deg, #7DC6FD, #2D699B);
            }
            .Shadow {
                box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
            }
            .Subtext  {
                font-size: 1.5rem;
            }
            .Hero:after {
                position: absolute;
                transform: rotate(-1.7deg);
                -ms-transform: rotate(-1.7deg);
                -webkit-transform: rotate(-1.7deg);
                -o-transform: rotate(-1.7deg);
                -moz-transform: rotate(-1.7deg);
                background-color: #f5f5f5;
                content: "";
                z-index: 3;
                display: block;
                height: 70px;
                transform-origin: 100%;
                left: 0;
                right: 0;
                bottom: 0;
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
            .standard {
                color: #1D222D;
                text-decoration: none;
                display: inline-block;
            }
            .Footer nav {
                display: inline-block;
            }
              @media only screen and (max-width: 1000px){
                  .Main { grid-area: Main;
                    font-size: 1.5rem;
                    min-height: 900px;
                  }
                  .Document {
                    padding: 0.5rem;
                  }
                  .Demo {
                    flex-direction: column;
                    width: auto;
                    padding: 0;
                  }
                  .DemoNav {
                    border-right: 0px;
                    padding: 0 1rem 0 1rem;
                    text-align: center;
                    width: 100%;
                  }
                  .DemoNav ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                  }
                  .Hero:after {
                    display: none;
                  }
                  .MP {
                    display: none;
                  }
                  .pluginIcon {
                    width: 7rem;
                    margin-right: 10px;
                  }
                  .Logo {
                    width: 8rem;
                  }
                  .Products {
                    flex-direction: column;
                  }
                  .Hero {
                  text-align: center;
                  padding: 3rem 1rem 3rem 1rem;
                  font-size: 2rem;
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
                      grid-template-rows: 70px 1fr 120px;
                      gap: 0 0;
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