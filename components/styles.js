export default function Styles() {

    return (<>
            <style jsx global>{`
            html {
              font-size: 100%;
            }
            body {
              margin: 0;
              background-color: rgba(250,250,250,1);
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
            .grid-container {
              min-height: 100vh;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: 110px 2.3fr 0.2fr;
              gap: 0px 0px;
              grid-template-areas: "Header Header Header Header Header" "Main Main Main Main Main" "Footer Footer Footer Footer Footer";
              
            background: linear-gradient( 154deg, rgb(1, 51, 115) 0%, rgb(20, 132, 188) 100%);
            }
            .content {
              grid-template-areas: "Header Header Header Header Header" ". Main Main Main ." "Footer Footer Footer Footer Footer";
            }
            ul {
              margin-bottom: 0;
            }
            .Header { 
                 grid-area: Header;
                
                 font-size: 0.9rem;
                 padding: 1rem 0.5rem 0.5rem;
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
            img {
              margin-bottom: 0;
            }
            .Hero h1 {
              color: white;
            }
            .Hero h3 {
              color: white;
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
            }
            
            .Content {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 1rem 2rem 1rem;
                margin:0;
                background-color: rgba(250,250,250,1);

                color: #6b7280;
            }
            h1,h2,h3,h4,h5,h6 {
                color: rgba(22,30,46,1);
                line-height: 1.5;
            }
            .White {
                background-color: #ffffff;
            }
            .WithPadding {
                flex-direction: column;
                
                padding: 2.5rem 1rem 5rem 1rem;
            }
            .Document {
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
            .Hero {
                position: relative;
                box-sizing: border-box;
                display: flex;
                align-items: flex-start;
                font-size: 2.2rem;
                justify-content: center;
                font-weight: 300;
                padding: 7rem 0 7rem 0;
            }
            .Hero small {
            }
            .Hero a {
                font-weight: 500;
            }  
            .Hero .Minor {
                text-align: center;
            }
            .Highlight {
                font-size: 2.4rem;
                font-weight: 300;
                 margin-bottom: 10px;
            }
            .Hero .Highlight {
                color: white;
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
            .middle {
                align-items: center;
            }
            .flex {
                display: flex;
                justify-content: center;
                flex-direction: row;
            }
            .sflex {
                display: flex;
                justify-content: center;
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
               flex-basis: 0;
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
                align-items: flex-start;
            }
            .text {
                max-width: 1140px;
            }
            .container {
                max-width: 1140px;
                align-items: center;
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
                padding-left: 0;
                margin-left: 0;
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
            nav a {
                color: white;
                text-decoration: none;
            }
            nav a:hover {
                color: rgb(10, 198, 255);
                text-decoration: none;
            }
              @media only screen and (max-width: 1000px){
                  .Main { 
                    grid-area: Main;
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
                    border-right: 0;
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
                  .pluginIcon {
                    width: 7rem;
                    margin-right: 10px;
                  }
                  .Logo {
                    width: 10rem;
                  }
                  .Products {
                    flex-direction: column;
                  }
                  .Hero {
                  text-align: center;
                  padding: 3rem 1rem 3rem 1rem;
                  }
                  .half {
                    padding-bottom: 0;
                  }
                  nav {
                    max-width: 100%;
                    padding: 5px;
                  }
                  html, body {
                      min-height: 100%;
                      min-height: -webkit-fill-available;
                  }
                  .grid-container {
                      display: grid;
                      grid-template-columns: 1fr;
                      grid-template-rows: 100px 1fr 150px;
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