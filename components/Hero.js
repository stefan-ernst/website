export default function Hero({title, subtitle, image, subtext}) {

    return (
        <>

        <div className='Hero' style={{flexDirection:'column',alignItems:'center'}}>

            <h1>{title}</h1>
            <h3>{subtitle}</h3>

            {image}

            <h3 style={{textAlign:'center'}}>{subtext}</h3>
        </div>
        </>
    )
}