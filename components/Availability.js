export default function Availability({server,dc,cloud,text}) {

    return (
        <div className='Content' style={{flexDirection:'column'}}>
            <div className={'flex container'}>

                <div className={'half'}>
                    <div className='sflex middle'>
                        {server && <img src='server.svg' style={{margin: 15,width:'20%',maxWidth:400}}
                             alt="Server Icon"/>}
                        {dc && <img src='dc.svg' style={{margin: 15,width:'20%',maxWidth:400}}
                             alt="Data Center Icon"/>}
                        {cloud && <img src='cloud.svg' style={{margin: 15,width:'25%',maxWidth:400}}
                             alt="Cloud Icon"/>}

                    </div>
                </div>
                <div className={'half'}><h3>{text}</h3>
                </div>
            </div>

        </div>
    )
}