import HeroButton from "./HeroButton";

export default function FooterHero({url, docUrl, alternate}) {
    return (
        <div className={`Content ${alternate ? "White" : ""}`}>
            <div className={'flex container'}>
                <div className={'half'}>
                    <br />
                    <h2>Available on the Atlassian Marketplace</h2> <br />

                    <br />
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                        <HeroButton button1={{title:'Try it free',href:url,isBlank:true}}
                                    button2={{title:'Documentation',href:docUrl}} button2Color={'#1D222D'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}