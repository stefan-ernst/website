export default function Card({children}) {

    return (
        <>
            <style jsx>{`
      div {
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
        transition: background-color .2s ease-in-out,box-shadow .2s ease-in-out,transform .2s ease-in-out;
        
        cursor: pointer;
        font-size: 1rem;
        margin: 0.5rem;
      }
      div:hover {
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.04), 0 2px 2px 0 rgba(0,0,0,0.04), 0 4px 4px 0 rgba(0,0,0,0.02), 0 12px 16px 0 rgba(0,0,0,0.16);
      transform: scale(1.02);
      }
      
    `}</style>
            <div>
                {children}
            </div>
            </>
    )
}