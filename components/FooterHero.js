import HeroButton from "./HeroButton";

export default function ({url, docUrl}) {
    return (
        <div className={'Content'}>
            <div className={'flex container'}>
                <div className={'half'}>
                    <br />
                    <span className={'Highlight'}>Available on the Atlassian Marketplace</span> <br />

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