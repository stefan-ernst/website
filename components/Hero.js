export default function Hero({title, subtitle, image, subtext}) {

    return (
        <>

        <div className='Hero' style={{flexDirection:'column',alignItems:'center'}}>

            <span className='Highlight'>{title}</span>
            <br />
            <span className='Minor'>{subtitle}</span>

            {image}

            {subtext}
        </div>
        </>
    )
}