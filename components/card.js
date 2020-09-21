export default function Card({children}) {

    return (
        <>
            <style jsx>{`
      div {
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
        transition: background-color .2s ease-in-out,box-shadow .2s ease-in-out,transform .2s ease-in-out;
        padding: 20px;
        cursor: pointer;
        font-size: 1rem;
        margin: 0.5rem;
        font-weight: 600;
      }
      .herocard {
        position: relative;
      }
      .herocard::before {
        content: "";
        position: absolute;
        width: 3px;
        color: #fc73b4;
        background: -moz-linear-gradient( to bottom, rgb(1, 51, 115) 0%, rgba(26, 194, 232, 0.8) 100%);
        background: -webkit-linear-gradient( to bottom, rgb(1, 51, 115) 0%, rgba(26, 194, 232, 0.8) 100%);
        background: linear-gradient( to top, rgb(1, 51, 115) 0%, rgba(26, 194, 232, 0.8) 100%);
        top: 0;
        bottom: 0;
        left: 0;
      }
      div:hover {
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.04), 0 2px 2px 0 rgba(0,0,0,0.04), 0 4px 4px 0 rgba(0,0,0,0.02), 0 12px 16px 0 rgba(0,0,0,0.16);
      transform: translateY(-.125em);
      }
      
    `}</style>
            <div className={'herocard White'}>
                {children}
            </div>
            </>
    )
}