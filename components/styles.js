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
                color: rgb(10, 198, 255);
                text-decoration: none;
            }
            h1 {
                font-weight: 500;
            }
            .grid-container {
              min-height: 100vh;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: 110px 2.3fr 0.2fr;
              gap: 0px 0px;
              grid-template-areas: "Header Header Header Header Header" "Main Main Main Main Main" "Footer Footer Footer Footer Footer";
              
            background-image: linear-gradient( 154deg, rgb(1, 51, 115) 0%, rgb(20, 132, 188) 100%);
            }
            .content {
              grid-template-areas: "Header Header Header Header Header" ". Main Main Main ." "Footer Footer Footer Footer Footer";
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
                top: 70px;
                right: 0;
                height: calc(100% - 70px);
                background: #013373;
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
            .Header { 
                 grid-area: Header;
                
                 font-size: 0.9rem;
                 padding: 0.5rem;
                 padding-top: 1rem;
             }
            .Footer { 
                grid-area: Footer;
                font-size: 1rem;
                padding: 1rem;
                text-align: center;
                position: relative;
                border-top: 1px solid white;
                color: white;
                background-color: #013373;
            }
            .Footer a {
                color: white;
            }
            .Footer a:hover {
                color: rgb(10, 198, 255);
            }
            .pluginIcon {
                margin-right: 20px;
                width: 80px;
            }
            .Main { 
                grid-area: Main;
                font-weight: 300;
                padding: 0;
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
                justify-content: center;
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
                font-size: 1rem;
                justify-content: center;
                padding: 1rem 1rem 5rem 1rem;
                margin:0;
                background-color: #f9f9f9;
                color: #1D222D;
            }
            .White {
                background-color: #ffffff;
                color: #1D222D;
            }
            .Content a {
                color: #1D222D;
            }
            .WithPadding {
                flex-direction: column;
                
                padding: 2.5rem 1rem 5rem 1rem;
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
                width: 14rem;
            }
            .Hero {
                position: relative;
                box-sizing: border-box;
                display: flex;
                align-items: top;
                font-size: 2.2rem;
                justify-content: center;
                font-weight: 300;
                padding: 7rem 0 10rem 0;
                
            }
            .Hero small {
                font-size: 1.2rem;
            }
            .Hero a {
                font-weight: 500;
            }  
            .Hero .minor {
                font-size: 1.8rem;
                text-align: center;
            }
            .Highlight {
                font-size: 2.4rem;
                font-weight: 300;
                 color: #1D222D;
                 margin-bottom: 20px;
            }
            .PartnerLogo {
                margin-left: 50px;
            }
            .pureflex {
                display: flex;
            }
            .center {
                justify-content: center;
            }
            .flex {
                display: flex;
                justify-content: center;
                flex-direction: row;
            }
            .start {
                justify-content: flex-start;
            }
            .top {
                align-items: flex-start !important;
                }
            .start div {
                padding: 15px 5px 10px 5px;
            }
            .half {
               flex-grow: 1;
               flex-shrink: 1;
               flex-basis: 0%;
               padding: 30px;
            }
            .blog {
                width: 60%;
                justify-content: flex-start;
            }
            .blog_content {
                flex-direction: column;
            }
            .FullPage {
                min-height: 80vh;
                padding-top: 10%;
                align-items: flex-start;
            }
            .text {
                font-size: 1.1rem;
                max-width: 1140px;
            }
            .container {
                max-width: 1140px;
                align-items: center;
                font-size: 1.3rem;
            }
            .Shadow {
                box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
            }
            .Subtext  {
                font-size: 1.5rem;
            }
            
            .Hero div {
                padding: 0.4rem;
            }
            .nopadding {
                padding: 1rem;
            }
            
            nav {
                font-size: 1rem;
                max-width: 65%;
                padding-top: 0.5rem;
                
                margin: auto;
                display: flex;
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
                  .PartnerLogo {
                    margin-left: 0;
                  }
                  .flex {
                    flex-direction: column;
                  }
                  .blog {
                    width: 90%;
                  }
                  .Demo {
                    flex-direction: column;
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