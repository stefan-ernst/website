import * as React from 'react';

export default function Section({hasHero,children}) {

    return (
        <section className='grid-container' style={{background: hasHero ? 'linear-gradient(135deg, #1388E7 2.64%, #1AB1BC 102.56%, #1AB1BB 102.57%, #6B30C4 102.58%, #2874BB 102.74%, #1C7ED9 102.74%)' : ''}}>
            {children}
        </section>
        )
}