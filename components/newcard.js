export default function NewCard({children}) {

    return (
        <>
            <style jsx>{`
     
        .card {
          margin: 1rem;
        }
    `}</style>
            <div className={'card'}>
                {children}
            </div>
            </>
    )
}