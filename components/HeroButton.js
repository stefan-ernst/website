import {isBlockedPage} from "next/dist/next-server/server/utils";

export default function HeroButton({button1, button2, button2Color}) {

    return (
        <>
            <style jsx>{`
      button {
        background-color: #1774C8;
        color: white;
        border-radius: 5px;
        font-size: 1rem;
        padding: 0.5rem 2rem;
        font-weight: 400;
        border: 0;
        cursor: pointer;
      }
      button:hover {
        background: #3699F2;
      }
    `}</style>
            <a href={button1.href} target={button1.isBlank ? "_blank" : ""} rel="noopener"><button>
                {button1.title}
            </button></a>
            <a href={button2.href} target={button2.isBlank ? "_blank" : ""} rel="noopener"><button style={{marginLeft:5,backgroundColor:'transparent',fontWeight:'normal',color: button2Color}}>
                {button2.title}
            </button></a>
        </>
    )

}